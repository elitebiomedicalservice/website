import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const suggestedQuestions = [
  'What does a home sleep study check?',
  'Which BiPAP machines do you offer?',
  'Do you deliver oxygen concentrators?',
];

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading, isOpen]);

  async function sendMessage(event?: FormEvent, suggested?: string) {
    event?.preventDefault();
    const content = (suggested ?? input).trim();
    if (!content || isLoading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content }];
    setMessages(nextMessages);
    setInput('');
    setError('');
    setIsLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages.slice(-8) }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(
          result?.error ||
          (response.status === 404
            ? 'The chat service is not deployed on this server. Please contact support.'
            : 'The assistant could not reply. Please try again or call us.')
        );
      }
      if (!result?.answer) {
        throw new Error('The assistant could not reply. Please try again.');
      }
      setMessages((current) => [...current, { role: 'assistant', content: result.answer }]);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'The assistant could not reply. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {isOpen && (
        <section aria-label="Elite Biomedical Services chat" className="mb-3 flex h-[min(560px,calc(100vh_-_110px))] w-[min(390px,calc(100vw_-_2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <header className="flex items-center justify-between bg-teal-800 px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15"><Bot size={22} /></span>
              <div><h2 className="font-semibold">Elite Biomedical Assistant</h2><p className="text-xs text-teal-100">Services, products & sleep study info</p></div>
            </div>
            <button aria-label="Close chat" onClick={() => setIsOpen(false)} className="rounded-lg p-2 hover:bg-white/10"><X size={20} /></button>
          </header>

          <div ref={listRef} aria-live="polite" className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.length === 0 && (
              <div>
                <div className="mb-4 max-w-[90%] rounded-2xl rounded-tl-sm bg-white p-3 text-sm leading-relaxed text-slate-700 shadow-sm">
                  Hello! I can help with Elite Biomedical’s products, services, and home sleep studies. What would you like to know?
                </div>
                <div className="space-y-2">
                  {suggestedQuestions.map((question) => (
                    <button key={question} onClick={() => sendMessage(undefined, question)} className="block rounded-full border border-teal-200 bg-white px-3 py-2 text-left text-xs text-teal-800 hover:bg-teal-50">{question}</button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((message, index) => (
              <div key={`${index}-${message.role}`} className={`max-w-[88%] whitespace-pre-wrap rounded-2xl p-3 text-sm leading-relaxed ${message.role === 'user' ? 'ml-auto rounded-tr-sm bg-teal-700 text-white' : 'rounded-tl-sm bg-white text-slate-700 shadow-sm'}`}>
                {message.content}
              </div>
            ))}
            {isLoading && <div className="w-fit rounded-2xl bg-white px-3 py-2 text-sm text-slate-500 shadow-sm">Thinking…</div>}
            {error && <div role="alert" className="rounded-xl bg-rose-50 p-3 text-sm text-rose-700">{error} <a className="font-semibold underline" href="tel:+918078422393">Call us</a></div>}
          </div>

          <form onSubmit={(event) => sendMessage(event)} className="flex items-center gap-2 border-t border-slate-200 bg-white p-3">
            <label className="sr-only" htmlFor="assistant-message">Your message</label>
            <input id="assistant-message" value={input} onChange={(event) => setInput(event.target.value)} maxLength={1000} placeholder="Ask us a question…" className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100" />
            <button type="submit" disabled={!input.trim() || isLoading} aria-label="Send message" className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-50"><Send size={17} /></button>
          </form>
          <p className="bg-white px-3 pb-3 text-center text-[10px] leading-relaxed text-slate-400">General information only. For medical advice or emergencies, contact a clinician or emergency services.</p>
        </section>
      )}
      <button onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? 'Close chat assistant' : 'Chat with Elite Biomedical'} aria-expanded={isOpen} className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-white shadow-lg transition hover:scale-105 hover:bg-teal-800">
        {isOpen ? <X size={24} /> : <MessageCircle size={25} />}
      </button>
    </div>
  );
}

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { ChatMascot } from './ChatMascot';
import './ChatAssistant.css';

type ChatMessage = { role: 'user' | 'assistant'; content: string };
type MascotPose = 'wave' | 'thinking' | 'happy' | 'concerned' | 'neutral' | 'listening' | 'present';

const suggestions = [
  'What does a home sleep study check?',
  'Tell me about your services',
  'Which BiPAP machines do you offer?',
];

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hi there! I’m the Elite Biomedical Services assistant. What can I help you with?' },
  ]);
  const [draft, setDraft] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pose, setPose] = useState<MascotPose>('neutral');
  const [error, setError] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isLoading, error, isOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setPose('listening');
    } else {
      setPose('neutral');
    }
  }, [isOpen]);

  async function send(content: string) {
    const text = content.trim();
    if (!text || isLoading) return;
    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setDraft('');
    setError('');
    setIsLoading(true);
    setPose('thinking');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages.slice(1).slice(-8) }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(
          result?.error || (response.status === 404
            ? 'The chat service is not available on this server. Please call us for help.'
            : 'The assistant could not reply. Please try again or call us.'),
        );
      }
      if (typeof result?.answer !== 'string' || !result.answer.trim()) {
        throw new Error('The assistant could not reply. Please try again.');
      }
      setMessages((current) => [...current, { role: 'assistant', content: result.answer }]);
      setPose('happy');
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'The assistant could not reply. Please try again.');
      setPose('concerned');
    } finally {
      setIsLoading(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void send(draft);
  }

  function handleKey(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Escape') setIsOpen(false);
  }

  return (
    <div
      className={`chat-root${isOpen ? ' is-open' : ''}`}
      onMouseEnter={() => { if (!isOpen) setPose('wave'); }}
      onMouseLeave={() => { if (!isOpen) setPose('neutral'); }}
    >
      {isOpen && (
        <section className="chat-panel" aria-label="Chat with Elite Biomedical Services">
          <header className="chat-header">
            <ChatMascot pose={isLoading ? 'thinking' : pose} className="brand-avatar" size={48} />
            <div className="brand-copy">
              <strong>Ask Elite Biomedical</strong>
              <span><i /> Here to help with products &amp; services</span>
            </div>
            <button className="chat-close" type="button" aria-label="Close chat" onClick={() => setIsOpen(false)}>×</button>
          </header>

          <div className="chat-messages" aria-live="polite" aria-relevant="additions text">
            <div className="chat-day-label">TODAY</div>
            {messages.map((message, index) => (
              <div key={`${index}-${message.role}`} className={`chat-message-row ${message.role}`}>
                {message.role === 'assistant' && <ChatMascot pose={index === 0 ? 'wave' : pose} className="chat-tiny-avatar" size={30} />}
                <p className="chat-message-bubble">{message.content}</p>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="chat-suggestions">
                {suggestions.map((suggestion) => (
                  <button key={suggestion} type="button" onClick={() => void send(suggestion)}>
                    {suggestion}<span aria-hidden="true">↗</span>
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="chat-message-row assistant">
                <ChatMascot pose="thinking" className="chat-tiny-avatar" size={30} />
                <div className="chat-message-bubble chat-typing" aria-label="Assistant is thinking"><i /><i /><i /></div>
              </div>
            )}
            {error && <div className="chat-error" role="alert">{error} <a href="tel:+918078422393">Call us</a></div>}
            <div ref={bottomRef} />
          </div>

          <form className="chat-composer" onSubmit={submit}>
            <input
              ref={inputRef}
              value={draft}
              onChange={(event) => { setDraft(event.target.value); if (!isLoading) setPose('listening'); }}
              onKeyDown={handleKey}
              placeholder="Write a message…"
              aria-label="Write a message"
              maxLength={1000}
            />
            <button type="submit" aria-label="Send message" disabled={!draft.trim() || isLoading}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 4 17 8-17 8 3-8-3-8Zm3 8h14" /></svg>
            </button>
          </form>
          <div className="chat-powered">General information only <span>·</span> Medical advice from a clinician</div>
        </section>
      )}

      <button
        className="chat-launcher"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        aria-expanded={isOpen}
      >
        {!isOpen && <ChatMascot pose={pose} className="launcher-mascot" size={100} />}
        {isOpen && <span className="chat-launcher-close" aria-hidden="true">×</span>}
      </button>
    </div>
  );
}

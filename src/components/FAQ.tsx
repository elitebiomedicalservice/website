
const questions = [
  {
    question: 'What does Elite Biomedical Services provide?',
    answer: 'The business offers oxygen concentrators, CPAP and BiPAP equipment, home sleep study support, equipment setup, repairs, maintenance, spare parts, and patient guidance.',
  },
  {
    question: 'Where is Elite Biomedical Services located?',
    answer: 'The office is at Door no. 679/A, Basement Floor, Sreesastha Building, near Kelluettan Smaraka Mandir, Edodi, Vadakara, Kozhikode, Kerala 673101.',
  },
  {
    question: 'How can I contact Elite Biomedical Services?',
    answer: 'Call +91 9496522393 or email elitebiomedicalservice@gmail.com. Product and WhatsApp enquiries can also use +91 8078422393.',
  },
  {
    question: 'Does the business support CPAP and BiPAP machines?',
    answer: 'Yes. The site lists CPAP and BiPAP equipment, setup guidance, masks, accessories, and technical support. Therapy choices and machine settings should be guided by a qualified clinician.',
  },
  {
    question: 'Which areas are listed for service?',
    answer: 'The website lists Vadakara, Kozhikode, Kannur, Wayanad, and Malappuram. Contact the team to confirm coverage for your specific location.',
  },
];

export function FAQ() {
  return (
    <section className="bg-section py-20" aria-labelledby="common-questions-title">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 id="common-questions-title" className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">Common Questions</h2>
          <p className="text-slate-600">Helpful information about equipment, services, and contacting our team.</p>
        </div>
        <div className="space-y-3">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-teal-200">
              <summary className="cursor-pointer list-none pr-8 font-semibold text-slate-900 marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                <span className="flex items-center justify-between gap-4">{question}<span aria-hidden="true" className="text-xl text-primary transition-transform group-open:rotate-45">+</span></span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

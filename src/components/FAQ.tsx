
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
    <section className="faq-feature" aria-labelledby="common-questions-title">
      <div className="faq-feature-inner">
        <div className="faq-feature-heading">
          <span>Help &amp; information</span>
          <h2 id="common-questions-title">FAQ</h2>
          <p>Helpful answers about respiratory equipment, services, and getting support from our team.</p>
        </div>
        <div className="faq-feature-list">
          {questions.map(({ question, answer }) => (
            <details key={question} className="faq-feature-item">
              <summary>
                <span>{question}</span>
                <span className="faq-feature-toggle" aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

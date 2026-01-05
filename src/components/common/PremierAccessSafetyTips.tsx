const PremierAccessSafetyTips = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white">
          Premier Access Safety Tips
        </h1>

        <p className="text-sm text-gray-400">
          Designed to ensure a respectful and secure experience.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Ethical Interaction
          </h2>
          <p>
            Companion.ai is an immersive AI-driven environment. Users are
            expected to engage respectfully, ethically, and responsibly with
            avatars at all times.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Emotional Awareness
          </h2>
          <p>
            While avatars simulate emotional intelligence, they are not human
            substitutes. Maintain healthy boundaries and self-awareness.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Personal Data Safety
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Do not share sensitive personal information</li>
            <li>Avoid financial or identity disclosures</li>
            <li>Report suspicious behavior immediately</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Reporting & Support
          </h2>
          <p>
            If you encounter any inappropriate behavior or safety concerns,
            please contact our support team immediately through the Help
            section.
          </p>
        </section>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Companion.ai. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PremierAccessSafetyTips;

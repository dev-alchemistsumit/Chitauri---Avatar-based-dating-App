const SubscriberAgreement = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white">
          Subscriber Agreement
        </h1>

        <p className="text-sm text-gray-400">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Acceptance of Terms
          </h2>
          <p>
            By subscribing to Companion.ai, you agree to be bound by this
            Subscriber Agreement. If you do not agree, please do not use our
            subscription services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Subscription Services
          </h2>
          <p>
            Subscription tiers grant access to enhanced features such as
            advanced avatar interactions, priority messaging, and exclusive
            content.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Billing & Cancellation
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Subscriptions renew automatically unless canceled</li>
            <li>Payments are non-refundable except where required by law</li>
            <li>You may cancel anytime via account settings</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Acceptable Use
          </h2>
          <p>
            You agree not to misuse the platform, harass avatars or users,
            attempt to reverse-engineer systems, or violate ethical or legal
            boundaries.
          </p>
        </section>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Companion.ai. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SubscriberAgreement;

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>

        <p className="text-sm text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Introduction</h2>
          <p>
            Companion.ai ("we", "our", "us") respects your privacy and is
            committed to protecting your personal data. This Privacy Policy
            explains how your information is collected, used, and safeguarded
            when you use our platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account information such as email and profile details</li>
            <li>Chat interactions with AI avatars</li>
            <li>Device, browser, and usage analytics</li>
            <li>Optional profile media uploaded by you</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            How We Use Your Data
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide personalized AI interactions</li>
            <li>To improve platform safety and performance</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Data Security</h2>
          <p>
            We implement industry-standard security measures including
            encryption, access control, and secure storage practices to protect
            your data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal
            information at any time by contacting our support team.
          </p>
        </section>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Companion.ai. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

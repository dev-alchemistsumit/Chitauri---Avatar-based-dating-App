import React from "react";

const Security = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-white">
          Security at Companion.ai
        </h1>

        <p className="text-sm text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-4">
          <p>
            Companion.ai is committed to providing a secure and trusted
            environment for meaningful digital companionship. Protecting
            your data and privacy is a core responsibility we take seriously.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Our Security Approach
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Privacy-first system design</li>
            <li>Least-privilege access controls</li>
            <li>Encrypted data transmission</li>
            <li>Continuous monitoring and risk assessment</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Infrastructure & Application Security
          </h2>
          <p>
            Security is integrated across our development lifecycle,
            infrastructure, and operational processes to minimize risk
            and prevent unauthorized access.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Responsible Disclosure
          </h2>
          <p>
            If you believe you have identified a security vulnerability,
            please report it responsibly so we can investigate and resolve
            the issue promptly.
          </p>
          <p className="text-sm text-gray-400">
            Contact: security@companion.ai
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Our Commitment
          </h2>
          <p>
            Security is an ongoing effort. We continuously evaluate and
            improve our systems to maintain a safe and trustworthy
            experience for our community.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Security;

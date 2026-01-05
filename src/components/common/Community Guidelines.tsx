import React from "react";

const CommunityGuidelines = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-white">
          Community Guidelines
        </h1>

        <p className="text-sm text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-4">
          <p>
            Companion.ai is a space for respectful, meaningful connections.
            These guidelines outline expectations for behavior to help keep
            our community safe and inclusive.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Core Rules
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respect boundaries and consent</li>
            <li>Protect personal and financial information</li>
            <li>No violence, hate, or harassment</li>
            <li>Adults only (18+)</li>
            <li>One person, one account</li>
            <li>No scams, spam, or platform abuse</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Reporting and Enforcement
          </h2>
          <p>
            If you encounter behavior that violates these guidelines,
            please report it. We investigate reports carefully and take
            appropriate action to protect our community.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Our Commitment
          </h2>
          <p>
            We are committed to maintaining a safe, respectful, and authentic
            environment. These guidelines may evolve as Companion.ai grows.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CommunityGuidelines;

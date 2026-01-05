import React from "react";

const IntellectualProperty = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-white">
          Intellectual Property
        </h1>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Companion.ai Inc.
        </p>

        <section className="space-y-4">
          <p>
            Below is a non-exhaustive list of trademarks, service marks, logos,
            patents, and other intellectual property owned by Companion.ai Inc.
            You may not use any Companion.ai intellectual property without prior
            written authorization.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            Sample Trademark Legends
          </h2>
          <p>
            <strong>Registered trademarks:</strong> COMPANION.AI® is the
            exclusive registered trademark of Companion.ai Inc. and is used
            with permission.
          </p>
          <p>
            <strong>Unregistered trademarks:</strong> COMPANION.AI™ is the
            exclusive trademark of Companion.ai Inc. and is used with
            permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            Trademarks & Service Marks
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>COMPANION.AI®</li>
            <li>COMPANION™</li>
            <li>COMPANION PREMIER™</li>
            <li>PREMIER ACCESS™</li>
            <li>AVATAR ROOM™</li>
            <li>AI MATCH™</li>
            <li>SMART COMPATIBILITY™</li>
            <li>IT’S A CONNECTION™</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            Logos & Visual Assets
          </h2>
          <p>
            All Companion.ai logos, wordmarks, avatar designs, and UI visuals
            are protected by trademark and copyright laws. Unauthorized use
            or modification is prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            Patent Notice
          </h2>
          <p>
            Companion.ai services may be protected by one or more patents or
            pending patent applications in the United States and other
            jurisdictions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            Reporting Infringement
          </h2>
          <p>
            To report misuse of Companion.ai intellectual property, contact:
            <br />
            <span className="text-blue-400">ip@companion.ai</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default IntellectualProperty;

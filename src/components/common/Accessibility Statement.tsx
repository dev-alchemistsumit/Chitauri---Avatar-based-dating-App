import React from "react";

const AccessibilityStatement = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-white">
          Accessibility Statement
        </h1>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Companion.ai Inc.
        </p>

        <section className="space-y-4">
          <p>
            At Companion.ai, we are committed to building technology that helps
            people connect in inclusive, intuitive, and accessible ways. We
            serve a diverse global community and continuously work to reduce
            barriers to access.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">Our Commitment</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Ongoing accessibility awareness and best practices</li>
            <li>Alignment with WCAG 2.2 Level AA standards</li>
            <li>Regular accessibility testing and updates</li>
            <li>User feedback-driven improvements</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            Accessibility Features
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Screen reader compatibility</li>
            <li>Text alternatives for non-text content</li>
            <li>Color contrast and text scaling support</li>
            <li>Keyboard-accessible navigation</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            Limitations and Alternatives
          </h2>
          <p>
            While we strive for accessibility, some limitations may exist. If
            you encounter issues, please contact us so we can assist or provide
            alternative solutions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            Feedback and Contact
          </h2>
          <p>
            Email us at{" "}
            <span className="text-blue-400">
              accessibility@companion.ai
            </span>{" "}
            to report accessibility issues or suggest improvements.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AccessibilityStatement;

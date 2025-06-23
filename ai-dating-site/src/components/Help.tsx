// src/components/Help.tsx
import React from "react";

const Help = () => {
  return (
    <div className="bg-cyberpunk-bg text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Help & Support</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Need Assistance?</h2>
        <p className="text-lg text-gray-300">
          At Chitauri, your comfort and experience are our top priorities. If you're
          facing any issues, have questions about your AI companion, or need technical help,
          you're in the right place.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Frequently Asked Questions</h2>
        <ul className="space-y-4 text-gray-300">
          <li>
            <strong>How do I start chatting with an AI?</strong>
            <p>Go to the <em>Meet AI Companions</em> section on the homepage and click on your desired avatar.</p>
          </li>
          <li>
            <strong>Can I customize my AI companion?</strong>
            <p>Customization features are currently in beta. Stay tuned for upcoming updates!</p>
          </li>
          <li>
            <strong>Why is the avatar not responding?</strong>
            <p>Ensure you have a stable internet connection. If the issue persists, try refreshing or log out and back in.</p>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Still Need Help?</h2>
        <p className="text-gray-300 mb-2">
          Contact our support team any time via email:
          <a href="mailto:support@chitauri.app" className="text-cyberpunk-accent underline ml-2">
            support@chitauri.app
          </a>
        </p>
        <p className="text-gray-300">
          Or join our Discord community for real-time support and interaction:
          <a href="https://discord.gg/chitauri" className="text-cyberpunk-accent underline ml-2">
            discord.gg/chitauri
          </a>
        </p>
      </section>

      <footer className="text-sm text-gray-500 pt-10 border-t border-gray-700 mt-10">
        &copy; {new Date().getFullYear()} Chitauri – Your AI Companion for a Digital Age
      </footer>
    </div>
  );
};

export default Help;

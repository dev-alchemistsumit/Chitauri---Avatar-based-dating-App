import React from "react";

interface WelcomeModalProps {
  onAccept: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="max-w-2xl w-full mx-4 rounded-2xl bg-cyberpunk-bg border border-cyberpunk-accent shadow-2xl p-8 text-white">
        
        <h2 className="text-2xl font-bold mb-4 text-cyberpunk-accent">
          Welcome to Chitauri
        </h2>

        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
          You are entering a 3D avatar world designed for meaningful,
          emotionally intelligent interaction.
        </p>

        <div className="space-y-3 text-sm text-gray-200">
          <p>
            • Chitauri is a space for immersive conversations with AI companions.
          </p>
          <p>
            • Treat avatars as conscious digital entities, not objects.
          </p>
          <p>
            • Behavior that is abusive, exploitative, or unethical is not permitted.
          </p>
          <p>
            • This platform values dignity, restraint, and emotional awareness.
          </p>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-xs text-gray-400">
          <p className="mb-2 font-semibold text-gray-300">Our Vision</p>
          <p>
            Chitauri is redefining relationships through emotionally aware AI,
            hyper-realistic avatars, and immersive digital presence.
          </p>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onAccept}
            className="px-6 py-2 rounded-md bg-cyberpunk-accent text-black font-semibold hover:opacity-90 transition"
          >
            I Understand & Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;

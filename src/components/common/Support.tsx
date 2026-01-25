import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const UPI_ID = "sumit2329@ptyes";

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">
            Support Companion.ai
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Companion.ai is an independently built project. If this project
            becomes financially supported, I will continue building it further
            with deeper features, stronger safety systems, and long-term vision.
          </p>
        </header>

        {/* About */}
        <section className="space-y-4">
          <h2 className="text-2xl font-medium">About the Builder</h2>
          <p className="text-gray-400 leading-relaxed">
            I’m Sumit, a developer focused on building thoughtful, technically
            sound products at the intersection of AI, design, and human
            connection.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="https://github.com/dev-alchemistsumit"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-indigo-400 hover:text-indigo-300 transition "
            >
              Github → dev-alchemistsumit
            </a>

            <a
              href="https://x.com/alchemistsumit"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-indigo-400 hover:text-indigo-300 transition "
            >
              X → @alchemistsumit
            </a>
          </div>
        </section>

        {/* Support Section */}
        <section className="space-y-6 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-medium">Buy Me a Coffee ☕</h2>

          <p className="text-gray-400 leading-relaxed">
            If you find value in this project, you can support its development
            directly via UPI. Every contribution helps me dedicate more time and
            energy to building Companion.ai properly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* QR Code */}
            <div className="bg-white p-4 rounded-xl">
              <QRCodeCanvas
                value={`upi://pay?pa=${UPI_ID}&pn=Sumit&cu=INR`}
                size={180}
                level="H"
                includeMargin
              />
            </div>

            {/* UPI Details */}
            <div className="space-y-2 text-center sm:text-left">
              <p className="text-sm text-gray-400">UPI ID</p>
              <p className="text-lg font-mono text-white">{UPI_ID}</p>
              <p className="text-sm text-gray-500">
                Scan the QR code using any UPI app
              </p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="pt-10 text-sm text-gray-500">
          This project is independently developed and maintained. Support is
          optional, always appreciated, and directly fuels future development.
        </footer>
      </div>
    </div>
  );
};

export default Support;

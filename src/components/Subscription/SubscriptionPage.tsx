// src/components/Subscription/SubscriptionPage.tsx
import TierCard from "./TierCard";
import FeatureTable from "./FeatureTable";
import { TIERS } from "./subscriptionData";
import { Link } from "react-router-dom";

const SubscriptionPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-cyberpunk-bg text-white px-6 py-16">
        <div className="max-w-6xl mx-auto justify-center">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Subscription Tiers</h1>
            <p className="text-gray-400">
              Upgrade to Plus, Gold, or Platinum for an enhanced Companion.ai
              experience.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {TIERS.map((tier) => (
              <Link
                key={tier.id}
                to="/user-profile"
                className="  block"
              >
                <TierCard
                  name={tier.name}
                  price={tier.price}
                  highlight={tier.highlight}
                />
              </Link>
            ))}
          </div>

          {/* Comparison */}
          <FeatureTable />

          {/* Footer text */}
          <div className="mt-16 text-sm text-gray-400 space-y-4">
            <div className="flex flex-col justify-center mb-6">
              <div className="flex flex-col justify-center md:flex-row md:space-x-6"></div>
              <div>
                <p className="justify-center m-3 p-3">
                  Companion.ai helps you meet, connect, and explore meaningful
                  conversations through intelligent avatars. <br></br>
                  Features and availability may vary by region and subscription
                  length.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;

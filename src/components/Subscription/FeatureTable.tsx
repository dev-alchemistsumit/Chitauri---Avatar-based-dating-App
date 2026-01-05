// src/components/Subscription/FeatureTable.tsx
import {  TIERS } from "./subscriptionData";
import { Check, X } from "lucide-react";

import type { FeatureKey } from "./subscriptionData";

export const FEATURES: { key: FeatureKey; label: string }[] = [
  { key: "match", label: "Match. Chat. Meet." },
  { key: "likes", label: "Unlimited Likes" },
  { key: "rewinds", label: "Unlimited Rewinds" },
  { key: "passport", label: "Passport™ To Any Location" },
  { key: "ads", label: "Hide Advertisements" },
  { key: "incognito", label: "Go Incognito" },
  { key: "superLikes", label: "Weekly Super Likes" },
  { key: "boost", label: "1 Free Boost a Month" },
  { key: "seeLikes", label: "See Who Likes You" },
  { key: "topPicks", label: "New Top Picks Every Day" },
  { key: "messageBeforeMatch", label: "Message Before Matching" },
  { key: "priorityLikes", label: "Prioritized Likes" },
  { key: "sentLikesHistory", label: "Likes Sent (Last 7 Days)" },
];


const FeatureTable = () => {
  return (
    <div className="overflow-x-auto mt-12">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="text-left p-4 text-gray-400">Features</th>
            {TIERS.map((tier) => (
              <th key={tier.id} className="p-4 text-white">
                {tier.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {FEATURES.map((feature) => (
            <tr key={feature.key} className="border-t border-gray-800">
              <td className="p-4 text-gray-300">{feature.label}</td>

              {TIERS.map((tier) => (
                <td key={tier.id} className="p-4 text-center">
                  {tier.features?.[feature.key] ? (
                    <Check className="mx-auto text-green-400" size={18} />
                  ) : (
                    <X className="mx-auto text-gray-600" size={18} />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureTable;
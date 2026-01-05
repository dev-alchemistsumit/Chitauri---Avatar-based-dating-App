// src/components/Subscription/subscriptionData.ts
export type FeatureKey =
  | "match"
  | "likes"
  | "rewinds"
  | "passport"
  | "ads"
  | "incognito"
  | "superLikes"
  | "boost"
  | "seeLikes"
  | "topPicks"
  | "messageBeforeMatch"
  | "priorityLikes"
  | "sentLikesHistory";
export const TIERS: {
  id: string;
  name: string;
  price: string;
  highlight?: boolean;
  features: FeatureMap;
}[] = [
  {
    id: "free",
    name: "Free",
    price: "₹0",
    features: {
      match: true,
    },
  },
  {
    id: "plus",
    name: "Plus",
    price: "₹299 / month",
    features: {
      match: true,
      likes: true,
      rewinds: true,
      passport: true,
      ads: true,
      incognito: true,
    },
  },
  {
    id: "gold",
    name: "Gold",
    price: "₹499 / month",
    highlight: true,
    features: {
      match: true,
      likes: true,
      rewinds: true,
      passport: true,
      ads: true,
      incognito: true,
      superLikes: true,
      boost: true,
      seeLikes: true,
      topPicks: true,
    },
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "₹799 / month",
    features: {
      match: true,
      likes: true,
      rewinds: true,
      passport: true,
      ads: true,
      incognito: true,
      superLikes: true,
      boost: true,
      seeLikes: true,
      topPicks: true,
      messageBeforeMatch: true,
      priorityLikes: true,
      sentLikesHistory: true,
    },
  },
];

export type FeatureMap = {
  [K in FeatureKey]?: boolean;
};

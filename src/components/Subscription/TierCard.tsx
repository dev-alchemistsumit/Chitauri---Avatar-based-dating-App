// src/components/Subscription/TierCard.tsx

type Props = {
  name: string;
  price: string;
  highlight?: boolean;
};

const TierCard = ({ name, price, highlight }: Props) => {
  return (
    <div
      className={`rounded-2xl p-6 text-center border transition
        ${highlight
          ? "border-cyberpunk-accent bg-gradient-to-b from-purple-900/40 to-black scale-105"
          : "border-gray-700 bg-black/40"}
      `}
    >
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-300 mb-6">{price}</p>
      <button className="w-full py-3 rounded-full font-semibold bg-cyberpunk-accent text-black hover:opacity-90">
        Choose {name}
      </button>
    </div>
  );
};

export default TierCard;

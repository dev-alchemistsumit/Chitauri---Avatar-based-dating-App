// import { stripePromise, createCheckoutSession } from "../../services/Razorpay/Razorpay";

export const SubscriptionSelect = ({
  value,
}: {
  value: string;
}) => {
  const handleCheckout = async (plan: string) => {
    if (plan === "Free") return;

    // const { sessionId } = await createCheckoutSession(plan);
    // const stripe = await stripePromise;
    // await stripe?.redirectToCheckout({ sessionId });
  };

  return (
    <select
      value={value}
      onChange={(e) => handleCheckout(e.target.value)}
      className="p-3 border rounded"
    >
      <option value="Free">Free</option>
      <option value="Plus">Plus</option>
      <option value="Gold">Gold</option>
      <option value="Platinum">Platinum</option>
    </select>
  );
};
import { useState } from "react";
import { SubscriptionSelect } from "./SubscriptionSelect";

export const ProfileForm = ({
  profile,
  onSave,
}: {
  profile: any;
  onSave: (data: any) => void;
}) => {
  const [local, setLocal] = useState(profile);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {  
        e.preventDefault();
        onSave(local);
      }}
    >
      <input
        className="p-3 border rounded"
        placeholder="Name"
        value={local.name}
        onChange={(e) => setLocal({ ...local, name: e.target.value })}
      />

      <input
        className="p-3 border rounded"
        placeholder="Age"
        value={local.age}
        onChange={(e) => setLocal({ ...local, age: e.target.value })}
      />

      <SubscriptionSelect value={profile.subscription} />

      <textarea
        className="p-3 border rounded"
        placeholder="Bio"
        value={local.bio}
        onChange={(e) => setLocal({ ...local, bio: e.target.value })}
      />

      <button className="bg-cyberpunk-accent py-3 rounded text-white font-bold">
        Save Changes
      </button>
    </form>
  );
};

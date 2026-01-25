export const ProfileView = ({ profile }: { profile: any }) => (
  <div className="border p-4 rounded bg-gray-50 text-sm space-y-1">
    <p><strong>Name:</strong> {profile.name || "Not set"}</p>
    <p><strong>Age:</strong> {profile.age || "Not set"}</p>
    <p><strong>Subscription:</strong> {profile.subscription}</p>
    <p><strong>Gender:</strong> {profile.gender || "Not set"}</p>
    <p><strong>Bio:</strong> {profile.bio || "Not set"}</p>
  </div>
);

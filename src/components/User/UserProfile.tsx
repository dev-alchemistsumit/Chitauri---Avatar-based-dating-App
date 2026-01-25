import { useState } from "react";
import { useUserProfile } from "./useUserProfile";
import { ProfileHeader } from "./ProfileHandler";
import { ProfileView } from "./ProfileView";
import { ProfileForm } from "./ProfileForm";

const UserProfile = () => {
  const { profile, updateProfile } = useUserProfile();
  const [editing, setEditing] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-100 via-white to-blue-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">

        <ProfileHeader
          editing={editing}
          toggle={() => setEditing(!editing)}
          photoURL={profile.photoURL}
        />

        {editing ? (
          <ProfileForm
            profile={profile}
            onSave={(data) => {
              updateProfile(data);
              setEditing(false);
            }}
          />
        ) : (
          <ProfileView profile={profile} />
        )}
      </div>
    </div>
  );
};

export default UserProfile;

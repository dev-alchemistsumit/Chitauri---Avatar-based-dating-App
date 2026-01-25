import { Pencil, X } from "lucide-react";

export const ProfileHeader = ({
  editing,
  toggle,
  photoURL,
}: {
  editing: boolean;
  toggle: () => void;
  photoURL?: string;
}) => (
  <>
    <div className="flex justify-end">
      <button onClick={toggle} className="text-cyberpunk-accent">
        {editing ? <X size={32} /> : <Pencil size={26} />}
      </button>
    </div>

    {photoURL && (
      <div className="flex justify-center my-4">
        <img
          src={photoURL}
          className="w-24 h-24 rounded-full border-4 border-cyberpunk-accent"
        />
      </div>
    )}
  </>
);

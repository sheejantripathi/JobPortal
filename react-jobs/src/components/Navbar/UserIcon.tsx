import React from "react";
import { UserInfoNavbar } from "../../interfaces/UserProfile";

interface UserIconProps {
  user?: UserInfoNavbar | null;
}

const UserIcon: React.FC<UserIconProps> = ({ user }) => {
  if (!user) return null;

  return (
    <div className="flex items-center space-x-4">
      <img
        className="w-12 h-12 rounded-full object-cover"
        src={user.picture}
        alt={user.given_name}
      />
      <span className="font-semibold">{user.given_name}</span>
      {/* <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button> */}
    </div>
  );
};

export default UserIcon;

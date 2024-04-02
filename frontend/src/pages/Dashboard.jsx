import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4 text-black">Dashboard</h2>
      {user ? (
        <>
          <h2 className="text-xl text-gray-800">Hi {user.name}!</h2>
          <p className="text-xl text-gray-800">USER TYPE: {user.userType}</p>
          <p className="text-xl text-gray-800"> ID: {user.rollId}</p>
          <p className="text-xl text-gray-800">EMAIL: {user.email}</p>
        </>
      ) : (
        <p className="text-xl text-gray-800">Loading...</p>
      )}
    </div>
  );
}

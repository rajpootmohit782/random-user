import "./styles.css";
import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc",
        );
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
        {user && (
          <div className="relative bg-white rounded-lg overflow-hidden flex w-96">
            <div className="w-1/3 bg-gray-200 flex justify-center items-center relative">
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="p-4 relative z-10">
                <img
                  className="w-4/4 h-3/4 object-cover rounded-full"
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                />
              </div>
            </div>
            <div className="w-2/3 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{`${user.name.first} ${user.name.last}`}</h2>
              <p className="text-base text-gray-700 mb-2">
                <span className="font-semibold">Gender:</span>{" "}
                <span className="capitalize">{user.gender}</span>
              </p>
              <p className="text-base text-gray-700 mb-2">
                <span className="font-semibold">Email:</span>{" "}
                <span className="text-blue-500 break-all">{user.email}</span>
              </p>
              <p className="text-base text-gray-700 mb-2">
                <span className="font-semibold">Phone:</span>{" "}
                <span>{user.phone}</span>
              </p>
              <div className="flex justify-end"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;

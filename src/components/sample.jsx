import React from "react";

function ProfilePage  () {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 via-red-200 to-yellow-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-4xl">
        <div className="flex justify-between items-start">
          <div>
            <img
              src="https://placehold.co/100"
              alt="User"
              className="rounded-full shadow-md"
            />
            <h1 className="text-2xl font-bold mt-4">Your Name</h1>
            <div className="mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Edit Profile
              </button>
              <button
                className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Settings
              </button>
            </div>
          </div>
          <div>
         
            <div className="flex flex-col">
              
              <button
                className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                GitHub Link
              </button>
              <input
                type="text"
                placeholder="Paste URL"
                className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Resume
            </button>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex-1">
            <h2 className="font-bold">Skillset</h2>
            <div className="flex flex-wrap mt-2">
              {["HTML", "CSS", "Java", "Python", "C++", "Html"].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded m-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 ml-4">
            <h2 className="font-bold">Projects</h2>
            <div className="mt-2">
              <textarea
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                placeholder="Project Description"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="border p-4 rounded">
            <h2 className="font-bold">Upload Documents</h2>
            <div className="flex items-center mt-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Browse
              </button>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ml-4">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

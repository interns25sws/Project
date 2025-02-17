import React from "react";

const Profile = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Profile Header */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/1200x300"
          alt="Cover"
          className="w-full h-48 object-cover"
        />
        <div className="p-6 flex items-center gap-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white -mt-12"
          />
          <div>
            <h2 className="text-2xl font-semibold">Gaston Lapierre</h2>
            <p className="text-gray-600">Project Head Manager</p>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="mt-6 grid grid-cols-3 gap-6">
        {/* Personal Information */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <p>
            <strong>Position:</strong> Project Head Manager
          </p>
          <p>
            <strong>Work:</strong> Oxford International
          </p>
          <p>
            <strong>Location:</strong> Pittsburgh, PA
          </p>
          <p>
            <strong>Email:</strong> hello@GastonLapierre.com
          </p>
          <p>
            <strong>Languages:</strong> English, Spanish, German
          </p>
        </div>

        {/* About Section */}
        <div className="bg-white shadow-md p-6 rounded-lg col-span-2">
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <p>
            I am a project manager with deep background in brand management at
            the top CPG companies with eCommerce growth marketing. I simplify
            and create world-class campaigns with digital marketing strategies.
          </p>
        </div>
      </div>

      {/* Achievements & Interests */}
      <div className="mt-6 grid grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Achievements</h3>
          <p>🏆 +12 Achievements</p>
          <p>🎖️ +24 Accomplishments</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg col-span-2">
          <h3 className="text-xl font-semibold mb-4">Marketing Expertise</h3>
          <p>#Leadership #Advertising #Public Relations</p>
          <p>#Event Marketing #Performance Marketing</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;


<div className="flex flex-col md:flex-row items-center md:items-start justify-between border-b pb-6 mb-6 gap-6">
{/* User Details Section */}
<div className="text-center md:text-left md:w-2/3">
  <p className="font-semibold text-gray-800">
    Login Id:{" "}
    <span className="text-gray-600">{allProfileData?.user_id}</span>
  </p>
  <p className="font-semibold text-gray-800">
    Mobile No.:{" "}
    <span className="text-gray-600">{allProfileData?.phone}</span>
  </p>
  <p className="font-semibold text-gray-800">
    Wallet:{" "}
    <span className="text-green-600">{allProfileData?.wallet}</span>
  </p>
</div>

{/* Profile Image and Upload Section */}
<div className="flex flex-col items-center gap-4">
  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 flex items-center justify-center shadow-inner overflow-hidden">
    {selectedImage ? (
      <img
        src={selectedImage}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    ) : allProfileData?.photo ? (
      <img
        src={`https://root2.futureservices.services/uploads/${allProfileData?.photo}`}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    ) : (
      <span className="text-gray-500 text-4xl">👤</span>
    )}
  </div>

  <p className="mt-2 font-bold text-gray-800 text-lg">
    {allProfileData?.name}
  </p>

  {/* Update Image Label */}
  <label
    htmlFor="upload-image"
    className="text-sm text-blue-500 hover:underline cursor-pointer"
  >
    Update Image
  </label>
  <input
    type="file"
    id="upload-image"
    accept="image/*"
    className="hidden"
    onChange={handleImageUpload}
  />

  {/* Save Changes Button */}
  <button
    onClick={handleImageUpdate}
    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
  >
    Save Changes
  </button>
</div>
</div>
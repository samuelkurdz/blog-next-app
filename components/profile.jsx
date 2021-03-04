import Image from 'next/image';

const Profile = () => {
  return (
    <div className="profile-container">
      <p>Profile Picture Here man</p>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
  )
};

export default Profile;

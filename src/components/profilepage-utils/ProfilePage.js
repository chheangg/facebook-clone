import { useState } from "react";
import { useParams } from "react-router-dom"
import HomeContent from "../homepage-utils/HomeContent";
import MainHeader from "./MainHeader";
import {profileProp, postProp }from "./ExampleProp";

const ProfilePage = () => {
  const param = useParams();

  const checkProfile = () => {
    const profile = profileProp.find((prop) => prop.name === param.profileId)
    return profile;
  }

  const checkProfilePosts = () => {
    const filtered = postProp.filter((prop) => prop.by.name === param.profileId)
    return filtered;
  }

  const [profile, setProfile] = useState(checkProfile())
  const [posts, setPosts] = useState(checkProfilePosts());

  if (!posts) {
    return (
      <div>
        Sorry, this profile doesn't exist!
      </div>
    )
  }
  return (
    <div>
      <MainHeader user={profile} />
      <div>
        <HomeContent discussions={posts} />
      </div>
    </div>
  )
}

export default ProfilePage;
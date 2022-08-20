import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ProfileContent from "./ProfileContent";
import MainHeader from "./MainHeader";
import { db } from "../services/Layout";
import { doc } from "firebase/firestore";
import fetchProfile from "./services/ProfilePage";

const ProfilePage = ({addToCurrentMsgs}) => {
  const [profile, setProfile] = useState(null)
  const param = useParams();

  const checkProfile = () => {
    const ref = `/users/${param.profileId}`;
    const profileRef = doc(db, ref);
    const data = fetchProfile(profileRef);
    data.then(profileInfo => setProfile(profileInfo));
  }

  useEffect(checkProfile, [])

  if (!profile) {
    return (
      <div>
        Sorry, this profile doesn't exist!
      </div>
    )
  }

  return (
    <div>
      <MainHeader user={profile} addToCurrentMsgs={addToCurrentMsgs}/>
      <div>
        <ProfileContent discussions={[]} profileId={param.profileId}/>
      </div>
    </div>
  )
}

export default ProfilePage;
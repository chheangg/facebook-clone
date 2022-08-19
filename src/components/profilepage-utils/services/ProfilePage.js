import { getDoc } from "firebase/firestore";

const fetchProfile = async (ref) => {
  const profileData = await getDoc(ref);
  return profileData.data()
}

export default fetchProfile;
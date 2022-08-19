import pageLayout from "../utils/PageLayout";
import Posts from "../utils/Posts";
import HomeUtils from "../homepage-utils/HomeUtils";

const ProfileContent = pageLayout(HomeUtils, Posts, 'profile');

export default ProfileContent;
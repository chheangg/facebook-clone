import pageLayout from "../utils/PageLayout";
import Posts from "../utils/Posts";
import HomeUtils from "./HomeUtils";

const HomeContent = pageLayout(HomeUtils, Posts, 'home');

export default HomeContent;
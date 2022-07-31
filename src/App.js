import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage-utils/HomePage";
import ProfilePage from "./components/profilepage-utils/ProfilePage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='profile' element={<ProfilePage />}>
            <Route path=':profileId' element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

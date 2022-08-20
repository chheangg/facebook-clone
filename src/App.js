import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/homepage-utils/HomePage";
import ProfilePage from "./components/profilepage-utils/ProfilePage";
import Layout from "./components/Layout";

const App = () => {
  const [currentMsgs, setCurrentMsgs] = useState([]);

  const addToCurrentMsgs = (chat) => {
    setCurrentMsgs(currentMsgs.concat(chat));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout currentMsgs={currentMsgs} setCurrentMsgs={setCurrentMsgs} addToCurrentMsgs={addToCurrentMsgs}/>}>
          <Route index element={<HomePage />} />
          <Route path='profile' element={<ProfilePage addToCurrentMsgs={addToCurrentMsgs}/>}>
            <Route path=':profileId' element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

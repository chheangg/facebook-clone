import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage-utils/HomePage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

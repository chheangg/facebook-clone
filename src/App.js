import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

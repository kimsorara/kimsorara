import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home";
import Detail from "./detail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />}></Route>
        <Route path="/movie:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

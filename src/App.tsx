import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Question1 from "./pages/question1/question1";
import Question2 from "./pages/question2/question2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question1" element={<Question1 />} />
          <Route path="/question2" element={<Question2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

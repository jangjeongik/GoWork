import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import ConfirmPage from "./components/ConfirmPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/create-work" element={<Page1 />} />
          <Route path="/ing-work" element={<Page2 />} />
          <Route path="/report" element={<Page3 />} />
         <Route path="/create-work/confirm" element={<ConfirmPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-task" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

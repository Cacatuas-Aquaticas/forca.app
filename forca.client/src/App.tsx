import { BrowserRouter, Route, Routes } from "react-router-dom";
import Play from "./pages/Play";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar/Calendar"
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/play/:date" element={<Play />} />
        <Route path="/daily" element={<Play />} />
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
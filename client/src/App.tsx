import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Tasks from "./screens/Tasks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

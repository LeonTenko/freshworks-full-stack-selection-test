import "./App.css";
import { Routes, Route } from "react-router-dom";

// Component Imports
import HomePage from "./pages/homepage/homepage.component";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;

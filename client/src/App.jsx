// Asset imports
import "./App.scss";

// Component Imports
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;

import "./App.scss";
import { Routes, Route } from "react-router-dom";

// Component Imports
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";

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

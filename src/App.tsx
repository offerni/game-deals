import PageHeader from "components/PageHeader";
import PageFooter from "components/PageFooter";
import PageContent from "components/PageContent";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { toggleBodyDarkMode } from "utils";

function App() {
  const darkModeInitialState = localStorage.getItem("darkMode") !== "false";
  const [darkMode, setDarkMode] = useState(darkModeInitialState);

  const handleDarkMode = () => {
    const newDarkModeValue = !darkMode;
    setDarkMode(newDarkModeValue);
    localStorage.setItem("darkMode", newDarkModeValue.toString());

    toggleBodyDarkMode(newDarkModeValue);
  };

  return (
    <div className="min-h-screen dark:bg-gray-800 bg-white">
      <Router>
        <PageHeader darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <PageContent />
        <PageFooter />
      </Router>
    </div>
  );
}

export default App;

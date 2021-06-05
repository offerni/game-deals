import PageHeader from "components/PageHeader";
import PageFooter from "components/PageFooter";
import PageContent from "components/PageContent";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const darkModeInitialState = localStorage.getItem("darkMode") !== "false";
  const [darkMode, setDarkMode] = useState(darkModeInitialState);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", (!darkMode).toString());
  };

  return (
    <div className={`App ${darkMode ? "dark bg-gray-800" : ""}`}>
      <Router>
        <PageHeader darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <PageContent />
        <PageFooter />
      </Router>
    </div>
  );
}

export default App;

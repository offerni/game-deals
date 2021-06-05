import PageHeader from "components/PageHeader";
import PageFooter from "components/PageFooter";
import PageContent from "components/PageContent";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
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

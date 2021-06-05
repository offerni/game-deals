import PageHeader from "components/PageHeader";
import PageFooter from "components/PageFooter";
import PageContent from "components/PageContent";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <PageHeader />
        <PageContent />
        <PageFooter />
      </Router>
    </div>
  );
}

export default App;

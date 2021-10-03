import "assets/scss/style.scss";
import Example from "pages/Example";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Example}></Route>
      </Router>
    </div>
  );
}

export default App;

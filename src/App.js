import "assets/scss/style.scss";
import DetailsPage from "pages/DetailsPage";
import Example from "pages/Example";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route exac path="/example" component={Example} />
      </Router>
    </div>
  );
}

export default App;

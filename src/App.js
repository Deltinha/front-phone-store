import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login"></Route>
          <Route exact path="/sign-up"></Route>
          <>
            {/* Insert Navbar component here */}
            <Route exact path="/"></Route>
            <Route exact path="/product/:productId"></Route>
            <Route exact path="/checkout"></Route>
          </>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyle from './styles/ GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/login"></Route>
          <Route exact path="/sign-up"></Route>
          <>
            {/* Insert Navbar component here */}
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/product/:productId"></Route>
            <Route exact path="/checkout"></Route>
          </>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

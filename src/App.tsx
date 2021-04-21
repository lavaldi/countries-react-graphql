import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/layout';
import CountriesList from './views/countries-list';
import Country from './views/country';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <CountriesList />
          </Route>
          <Route path="/:countryId" exact>
            <Country />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

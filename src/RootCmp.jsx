import { routes } from './routes.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader.jsx';
import { AppFooter } from './cmps/AppFooter';
import './scss/main.scss';

export function RootCmp() {
  return (
    <div className='App main-root'>
      <Router>
        <AppHeader />
        <main className = 'main-root full'>
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} exact component={route.component} path={route.path} />
            ))}
          </Switch>
        </main>
        <AppFooter />
      </Router>
    </div>
  );
}

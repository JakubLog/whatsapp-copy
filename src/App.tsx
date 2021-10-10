import React from 'react';
import AppProviders from 'providers/AppProviders';
import { Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <AppProviders>
      <Switch>
        <Route path="/" exact>
          Hello world!
        </Route>
        <Route path="*">Error</Route>
      </Switch>
    </AppProviders>
  );
};

export default App;

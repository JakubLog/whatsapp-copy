import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        Hello world!
      </Route>
      <Route path="*">Error</Route>
    </Switch>
  );
};

export default App;

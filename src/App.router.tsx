import React, { useReducer } from 'react';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Login, Properties } from './routes';
import reducer, { initialState } from './AppReducer';
import { ProtectedRoute } from './components/ProtectedRoute';

// @ts-ignore
export const AppContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route
          render={({ location }) => (
            <Switch location={location}>
              <Route component={() => <Redirect to="/login" />} exact path="/" />
              <Route component={Login} path='/login/' />
              <ProtectedRoute component={Properties} path='/properties/' redirectPathName="/login/" />
              {/*This is for no matching route should be one the last line*/}
              <Route component={Login} />
            </Switch>
          )}
        />
      </BrowserRouter>
    </AppContext.Provider>
  );
}
export default App;

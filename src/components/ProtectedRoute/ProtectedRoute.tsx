import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../../App.router';

interface Props {
  component: any;
  redirectPathName: string;
  path: any;
}

export const ProtectedRoute: React.FC<Props> = ({ component: Component, redirectPathName }) => {

  const { state } = useContext(AppContext);

  return (
    <Route
      render={(props) => {
        if (state.isLoggedIn) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: redirectPathName,
              state: { reDirectMessage: 'Please finish current step' },
            }}
          />
        );
      }}
    />
  );
};

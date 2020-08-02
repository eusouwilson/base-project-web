import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import DrawerMenu from 'components/layout/drawer';

import history from 'services/history';

function App() {
  return (
    <>
      <Router history={history}>
        <CssBaseline />
        <DrawerMenu />
      </Router>
    </>
  );
}

export default App;

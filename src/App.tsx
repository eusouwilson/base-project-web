import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import DrawerMenu from 'components/layout/drawer';
import Routes from 'components/pages';

import history from 'services/history';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <CssBaseline />
        <DrawerMenu>
          <Routes />
        </DrawerMenu>
      </Router>
    );
  }
}
export default App;

import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import DrawerMenu from 'components/layout/drawer';
import Routes from 'components/pages';

import history from 'services/history';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <BrowserRouter>
          <CssBaseline />

          <DrawerMenu>
            <Routes />
          </DrawerMenu>
        </BrowserRouter>
      </Router>
    );
  }
}
export default App;

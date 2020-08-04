import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const AdminPage: React.FC = () => {
  return (
    <Typography variant="h1" noWrap>
      rotas Admin
      <Link to="/public"> public </Link>
    </Typography>
  );
};

export default AdminPage;

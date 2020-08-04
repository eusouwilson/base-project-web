import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
const PublicPage: React.FC = () => {
  return (
    <Typography variant="h1" noWrap>
      rotas public
      <Link to="/admin"> admin </Link>
    </Typography>
  );
};

export default PublicPage;

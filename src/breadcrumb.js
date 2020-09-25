import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

function Breadcrumb() {
    return (
      <div className="breadcrumb align-center">
      <Breadcrumbs aria-label="breadcrumb">
        <Link className="textPrimary" href="/">
          Team Size
        </Link>
        <Link color="inherit" href="/">
          Work Space
        </Link>
        <Link color="inherit" href="/">
          Locations
        </Link>
        <Link color="inherit" href="/">
          Weekly Access
        </Link>
      </Breadcrumbs>
      </div>
    );
  }
  
  export default Breadcrumb;
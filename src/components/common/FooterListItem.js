import React from 'react';
import { ListItem } from '@mui/material';

const FooterListItem = (props) => {
  const { sx, children } = props;
  return (
    <ListItem sx={{ py: 0, ...sx }} {...props}>
      {children}
    </ListItem>
  );
};

export default FooterListItem;

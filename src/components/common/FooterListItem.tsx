import React from 'react';
import { ListItem, ListItemProps } from '@mui/material';

const FooterListItem = (props: ListItemProps) => {
  const { sx, children } = props;
  return (
    <ListItem sx={{ py: 0, ...sx }} {...props}>
      {children}
    </ListItem>
  );
};

export default FooterListItem;

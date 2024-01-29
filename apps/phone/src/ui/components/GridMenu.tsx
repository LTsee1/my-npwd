import React, { Fragment } from 'react';
import { AppIcon } from './AppIcon';
import { Box, Grid, GridSize } from '@mui/material';
import { Link } from 'react-router-dom';
import { IApp } from '@os/apps/config/apps';

interface GridMenuProps {
  items: IApp[];
  Component?: React.ElementType;
  xs?: GridSize;
  bottomBar?: boolean;
}
// i hate myself for this code
export const GridMenu: React.FC<GridMenuProps> = ({ items, Component = AppIcon, xs , bottomBar}) => {
  return (
    <Grid container alignItems="center" direction="row">
      {items &&
        items.length &&
        items.map((item) => (
          <Fragment key={item.id}> 
            {( (bottomBar)  && item.bottomBar)  && (
              <Grid item xs={xs} key={item.id}>
                <Box textAlign="center">
                  <Link to={item.path}>
                    <Component {...item} />
                  </Link>
                </Box>
              </Grid>
            )}
              {( (!bottomBar)  && !item.bottomBar)  && (
              <Grid item xs={xs} key={item.id}>
                <Box textAlign="center">
                  <Link to={item.path}>
                    <Component {...item} />
                  </Link>
                </Box>
              </Grid>
            )}
          </Fragment>
        ))}
    </Grid>
  );
};

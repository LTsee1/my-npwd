import React from 'react';
import { darken, Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { green } from '@mui/material/colors';
import { Badge, Button, Zoom } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { INotificationIcon } from '@os/notifications/providers/NotificationsProvider';
import { Tooltip } from './Tooltip';



const useStyles = makeStyles<Theme, { color: string; backgroundColor: string ,barApp : boolean}>((theme) => ({
  root: {
    padding: 0,
    background: 'transparent',
    marginTop: ({barApp}) => {
      if (barApp) {
        return theme.spacing(1)
      }
        else { 
      return theme.spacing(3)
      }
    },
  },
  avatar: {
    '&:hover': {
      background: ({ backgroundColor }) => {
        return `linear-gradient(0deg, ${darken(backgroundColor, 0.15)} 10%, ${backgroundColor} 90%)`;
      },
      transform: 'rotate(3deg)',
    },
    background: ({ backgroundColor }) => {
      return `linear-gradient(0deg, ${darken(backgroundColor, 0.2)} 20%, ${backgroundColor} 90%)`;
    },
    color: ({ color }) => color,
    boxShadow: theme.shadows[2],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:  ({barApp}) => {
      if (barApp) {
        return 30
      }
        else { 
      return 20
      }
    },
    transition: 'all .1s',
    width:  ({barApp}) => {
      if (barApp) {
        return theme.spacing(8)
      }
        else { 
      return theme.spacing(9)
      }
    },
    height:({barApp}) => {
      if (barApp) {
        return theme.spacing(8)
      }
        else { 
      return theme.spacing(9)
      }
    },
    fontSize: theme.typography.h1.fontSize,
  },
  icon: {
    fontSize: theme.typography.h1.fontSize,
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  tooltip: {
    fontSize: 16,
  },
}));

export interface AppIconProps {
  id: string;
  nameLocale: string;
  Icon: React.ElementType;
  icon: React.ElementType;
  backgroundColor: string;
  color: string;
  notification: INotificationIcon;
  barApp: boolean,
}

export const AppIcon: React.FC<AppIconProps> = ({
  id,
  nameLocale,
  Icon,
  backgroundColor,
  color,
  icon,
  notification,
  barApp,
}) => {
  const [t] = useTranslation();
  const classes = useStyles({
    backgroundColor: backgroundColor || green[50],
    color: color || green[400],
    barApp: barApp
  });

  return (
    <button className={classes.root}>
      <Badge
        color="error"
        badgeContent={notification?.badge}
        invisible={!notification || notification.badge < 2}
      >
        {Icon ? (
          <Icon className={classes.icon} fontSize="large" />
        ) : (
          <div className={classes.avatar}>{icon || t(nameLocale)}</div>
        )}
             
      </Badge>
      
      {("nothing" && barApp) || <div className='app_name'>{t(nameLocale)}</div> }
    </button>
  );
};

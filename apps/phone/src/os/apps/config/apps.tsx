import React from 'react';
import { blue, common, grey, purple } from '@mui/material/colors';
import { DialerApp } from '@apps/dialer/components/DialerApp';
import { ContactsApp } from '@apps/contacts/components/ContactsApp';
import { CalculatorApp } from '@apps/calculator/components/CalculatorApp';
import { SettingsApp } from '@apps/settings/components/SettingsApp';
import { MessagesApp } from '@apps/messages/components/MessagesApp';
import { ExampleAppWrapper } from '@apps/example/components/ExampleAppWrapper';
import { MarketplaceApp } from '@apps/marketplace/components/MarketplaceApp';
import { NotesApp } from '@apps/notes/NotesApp';
import CameraApp from '@apps/camera/components/CameraApp';
import { AppRoute } from '../components/AppRoute';

import {
  MESSAGES_APP_PRIMARY_COLOR,
  MESSAGES_APP_TEXT_COLOR,
} from '@apps/messages/messages.theme';
import {
  CONTACTS_APP_PRIMARY_COLOR,
  CONTACTS_APP_TEXT_COLOR,
} from '@apps/contacts/contacts.theme';
import {
  MARKETPLACE_APP_PRIMARY_COLOR,
  MARKETPLACE_APP_ICON_COLOR,
} from '@apps/marketplace/marketplace.theme';
import { NOTES_APP_ICON_COLOR, NOTES_APP_PRIMARY_COLOR } from '@apps/notes/notes.theme';
import { DIALER_APP_PRIMARY_COLOR, DIALER_APP_TEXT_COLOR } from '@apps/dialer/dialer.theme';
import {
  TWITTER_APP_PRIMARY_COLOR,
  TWITTER_APP_TEXT_COLOR,
} from '@apps/twitter/twitter.theme';
import { MATCH_APP_PRIMARY_COLOR, MATCH_APP_TEXT_COLOR } from '@apps/match/match.theme';
import { SvgIconProps, Theme } from '@mui/material';
import { INotificationIcon } from '@os/notifications/providers/NotificationsProvider';
import { BrowserApp } from '@apps/browser/components/BrowserApp';
import { MatchApp } from '@apps/match/components/MatchApp';
import LifeInvaderContainer from '@apps/twitter/components/TwitterContainer';
import { IPhoneSettings } from '@typings/settings';
import { i18n } from 'i18next';
import {
  DARKCHAT_APP_PRIMARY_COLOR,
  DARKCHAT_APP_TEXT_COLOR,
} from '@apps/darkchat/darkchat.theme';
import DarkChatApp from '../../../apps/darkchat/DarkChatApp';

export interface IAppConfig {
  id: string;
  nameLocale: string;
  backgroundColor: string;
  color: string;
  path: string;
  disable?: boolean;
  Route: React.FC<{ settings?: IPhoneSettings; i18n?: i18n; theme?: Theme }>;
  bottomBar?: boolean;
}

export type IApp = IAppConfig & {
  notification: INotificationIcon;
  icon: JSX.Element;
  isDisabled: boolean;
  notificationIcon: JSX.Element;
  NotificationIcon: React.FC<SvgIconProps>;
  Icon?: React.FC<SvgIconProps>;
  theme?: any;
  bottomBar?: boolean;
};
export const barAPPS: IAppConfig[] = [

]

export const APPS: IAppConfig[] = [
  {
    id: 'DIALER',
    nameLocale: 'APPS_DIALER',
    backgroundColor: DIALER_APP_PRIMARY_COLOR,
    color: DIALER_APP_TEXT_COLOR,
    path: '/phone',
    Route: () => <AppRoute id="DIALER" path="/phone" component={DialerApp} emitOnOpen={false} />,
    bottomBar: true,
  },
  {
    id: 'MESSAGES',
    nameLocale: 'APPS_MESSAGES',
    backgroundColor: MESSAGES_APP_PRIMARY_COLOR,
    color: MESSAGES_APP_TEXT_COLOR,
    path: '/messages',
    Route: () => (
      <AppRoute id="MESSAGES" path="/messages" component={MessagesApp} emitOnOpen={false} />
    ),
    bottomBar: true,
  },
  {
    id: 'CONTACTS',
    nameLocale: 'APPS_CONTACTS',
    backgroundColor: CONTACTS_APP_PRIMARY_COLOR,
    color: CONTACTS_APP_TEXT_COLOR,
    path: '/contacts',
    Route: () => (
      <AppRoute id="CONTACTS" path="/contacts" component={ContactsApp} emitOnOpen={false} />
    ),
    bottomBar: true,
  },
  {
    id: 'TWITTER',
    nameLocale: 'APPS_TWITTER',
    backgroundColor: TWITTER_APP_PRIMARY_COLOR,
    color: TWITTER_APP_TEXT_COLOR,
    path: '/twitter',
    Route: () => (
      <AppRoute id="TWITTER" path="/twitter" component={LifeInvaderContainer} emitOnOpen={false} />
      ),
    },
    {
      id: 'MARKETPLACE',
      nameLocale: 'APPS_MARKETPLACE',
      backgroundColor: MARKETPLACE_APP_PRIMARY_COLOR,
      color: MARKETPLACE_APP_ICON_COLOR,
      path: '/marketplace',
      Route: () => (
        <AppRoute
          id="MARKETPLACE"
          path="/marketplace"
          component={MarketplaceApp}
          emitOnOpen={false}
        />
      ),
    },
  {
    id: 'DARKCHAT',
    nameLocale: 'APPS_DARKCHAT',
    backgroundColor: DARKCHAT_APP_PRIMARY_COLOR,
    color: DARKCHAT_APP_TEXT_COLOR,
    path: '/darkchat',
    Route: () => (
      <AppRoute id="DARKCHAT" path="/darkchat" component={DarkChatApp} emitOnOpen={false} />
    ),
  },
  {
    id: 'CALCULATOR',
    nameLocale: 'APPS_CALCULATOR',
    backgroundColor: purple[500],
    color: grey[50],
    path: '/calculator',
    Route: () => (
      <AppRoute id="CALCULATOR" path="/calculator" component={CalculatorApp} emitOnOpen={false} />
    ),
  },
  {
    id: 'NOTES',
    nameLocale: 'APPS_NOTES',
    backgroundColor: NOTES_APP_PRIMARY_COLOR,
    color: NOTES_APP_ICON_COLOR,
    path: '/notes',
    Route: () => <AppRoute id="NOTES" path="/notes" component={NotesApp} emitOnOpen={false} />,
  },
  {
    id: 'CAMERA',
    nameLocale: 'APPS_CAMERA',
    backgroundColor: grey['A400'],
    color: common.white,
    path: '/camera',
    Route: () => <AppRoute id="CAMERA" path="/camera" component={CameraApp} emitOnOpen={false} />,
  },
    {
      id: 'SETTINGS',
      nameLocale: 'APPS_SETTINGS',
      backgroundColor: '#383838',
      color: grey[50],
      path: '/settings',
      Route: () => (
        <AppRoute id="SETTINGS" path="/settings" component={SettingsApp} emitOnOpen={false} />
        
        ),
      },
];

// Example app only in dev

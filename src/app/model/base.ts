import {
  createEffect,
  createEvent, forward, restore,
} from 'effector';
import { generateSeed, handleWalletEvent } from '@core/api';
import { BackgroundEvent, ConnectedData, NotificationType } from '@app/core/types';
import { isNil } from '@app/core/utils';
import NotificationController from '@core/NotificationController';

import { setView, View } from './view';

export const setSeed = createEvent<string[]>();
export const setIds = createEvent<number[]>();
export const setOnboarding = createEvent<boolean>();

export const $seed = restore(setSeed, []);
export const $ids = restore(setIds, []);
export const $onboarding = restore(setOnboarding, null);

const SEED_CONFIRM_COUNT = 6;

const getRandomIds = () => {
  const result = [];
  while (result.length < SEED_CONFIRM_COUNT) {
    const value = Math.floor(Math.random() * 12);
    if (!result.includes(value)) {
      result.push(value);
    }
  }
  return result;
};

$ids.on(setSeed, () => getRandomIds());

export const generateSeedFx = createEffect(generateSeed);

forward({
  from: generateSeedFx.doneData,
  to: setSeed,
});

handleWalletEvent<ConnectedData>(
  BackgroundEvent.CONNECTED,
  ({
    is_running,
    onboarding,
    notification,
  }) => {
    if (!isNil(notification) && notification.type === NotificationType.CONNECT) {
      NotificationController.setNotification(notification);
      setView(is_running ? View.CONNECT : View.LOGIN);
    } else {
      setOnboarding(onboarding);
      setView(is_running ? View.WALLET : View.LOGIN);
    }
  },
);

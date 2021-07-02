import { sendNotification } from './api-util-notifications';

describe('apiUtilNotifications', () => {
  it('should work', () => {
    sendNotification('text');
  });
});

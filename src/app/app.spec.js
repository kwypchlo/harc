import angular from 'angular';
import app from './app';

describe('app', () => {
  describe('AppCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('AppCtrl', {});
      });
    });

    it('should contain the github project url', () => {
      expect(ctrl.url).toBe('https://github.com/kwypchlo/harc');
    });
  });
});

describe('utils.helpers', () => {
  describe('getDevice', () => {
    test('return "Web" if platform device is not mobile', async () => {
      jest.mock('react-native', () => {
        return {
          Platform: {
            OS: 'web',
          },
        };
      });

      const { getDevice } = require('./helpers');
      const result = getDevice();
      expect(result).toEqual('Web');
    });

    test('return "Mobile" if platform is ios', async () => {
      jest.mock('react-native', () => {
        return {
          Platform: {
            OS: 'ios',
          },
        };
      });
      const { getDevice } = require('./helpers');
      const result = getDevice();
      expect(result).toEqual('Mobile');
    });

    test('return "Mobile" if platform is android', async () => {
      jest.mock('react-native', () => {
        return {
          Platform: {
            OS: 'android',
          },
        };
      });
      const { getDevice } = require('./helpers');
      const result = getDevice();
      expect(result).toEqual('Mobile');
    });
  });
});

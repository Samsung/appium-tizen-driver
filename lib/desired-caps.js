let commonCapConstraints = {
  platformName: {
    isString: true,
    inclusionCaseInsensitive: ['Tizen'],
    presence: true
  },
  app: {
    isString: true
  },
  appPackage: {
    isString: true
  },
  tizenInstallTimeout: {
    isNumber: true
  },
  sdbPort: {
    isNumber: true
  },
};

let desiredCapConstraints = {};

Object.assign(desiredCapConstraints, commonCapConstraints);

export default desiredCapConstraints;
export { commonCapConstraints };

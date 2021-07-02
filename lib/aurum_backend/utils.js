const utils = {};

utils.grpcAsync = async function (grpcFunction, grpcClient, arg) {
  return new Promise((resolve, reject) => {
    grpcFunction.bind(grpcClient)(arg, function (error, result) {
      if (error) {
        reject(error);
      }

      resolve(result);
    });
  });
};

export default utils;
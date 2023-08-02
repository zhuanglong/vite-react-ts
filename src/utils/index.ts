export const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

/**
 * 在请求完成之前统一展示 fallback
 * https://juejin.cn/post/6994674140825272334
 */
export function wrapPromise(promise: Promise<any>) {
  let status = 'pending';
  let result: any;

  const suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    },
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}

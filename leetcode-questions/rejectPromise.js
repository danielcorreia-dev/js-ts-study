const timeLimit = (fn, t) => {
  return async function (...args) {
    let timeout;
    const timeoutPromise = new Promise((_, reject) => {
      timeout = setTimeout(() => {
        clearTimeout(timeout);
        reject('Time Limit Exceeded');
      }, t);
    });
    const result = await Promise.race([fn(...args), timeoutPromise]);
    clearTimeout(timeout);
  };
};

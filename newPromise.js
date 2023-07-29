const timeLimit = (fn, t) => {
  return async function limited(...args) {
    let timeout;
    const timeoutPromise = new Promise((_, reject) => {
      timeout = setTimeout(() => {
        clearTimeout(timeout);
        reject({ reject: 'time limited', time: t });
      }, t);
    });
    const result = await Promise.race([fn(...args), timeoutPromise]);
    clearTimeout(timeout);
    return result;
  };
};

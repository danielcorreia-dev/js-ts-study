try {
  // It's executed when it hasn't errors
} catch {
  // It's executed when it has errors
} finally {
  // It's always going to execute
}

function showHour(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Expecting Date instance');
  }

  if (!data) {
    data = new Date();
  }

  return new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(data);
}

try {
  // const date = new Date(0);
  const hour = showHour();
  console.log(hour);
} catch (e) {
  console.log("We couldn't detect the hour")
} finally {
  console.log('Have a nice day.');
}

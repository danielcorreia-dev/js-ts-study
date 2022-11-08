const request = (obj) => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      obj.sucess(xhr.responseText);
    } else {
      obj.error(xhr.statusText);
    }
  });
};

document.addEventListener('click', (e) => {
  const elem = e.target;
  const tag = elem.tagName.toLowerCase();

  if(tag === 'a') { 
    e.preventDefault();
    loadPage(elem);
  }
});

const loadPage = elem => {
  const href = elem.getAttribute('href');

  request({
    method: 'GET',
    url: href,
    sucess(response) {
      loadResult(response);
    },

    error(errorText) {
      console.log(error);
    },
  })
}

const loadResult = (response) => {
  const result = document.querySelector('.result');
  result.innerHTML = response;
}
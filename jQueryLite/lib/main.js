const DOMNodeCollection = require('./dom_node_collection.js');

const _queue = [];
let _docReady = false;

window.$d = function (selector) {
  switch (typeof selector) {
    case 'function':
      return registerDocReadyCallback(selector);
    case 'string':
      return fetchNodesFromDom(selector);
    case 'object':
      if (selector instanceof HTMLElement) {
        return new DOMNodeCollection([selector])
      }
  }

  document.addEventListener("DOMContentLoaded", (e) => {
    _docReady = true;
    queue.forEach((func) => {
      func();
    });
  });
};

window.$d.extend = function(base, ...objects) {
  objects.forEach((object) => {
    for (const key in obj) {
      base[key] = obj[key];
    }
  });
  return base;
};

window.$d.ajax = function(options) {
  const defaults = {
    success: () => {},
    error: () => {},
    url: '',
    method: 'GET',
    data: "",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  };

  const mergedCall = $d.extend(defaults, options);
  mergedCall.method = mergedCall.method.toUpperCase();

  const xhr = new XMLHttpRequest();
  xhr.open(mergedCall.method, mergedCall.url, true);

  xhr.onload = function() {
    if (request.status === 200) {
      options.success(request.response);
    } else {
      options.error(request.response);
    }
  };

  xhr.send(JSON.stringify(mergedCall.data));
};

fetchNodesFromDom = function (selector) {
  const nodes = document.querySelectorAll(selector);
  const nodesArray = Array.from(nodes);
  return new DOMNodeCollection(nodesArray);
}

registerDocReadyCallback = function (func) {
  if (_docReady) {
    func();
  } else {
    _queue.push(func)
  }
};

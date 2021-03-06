const DOMNodeCollection = require('./dom_node_collection.js');

const _queue = [];
let _docReady = false;

window.$d = function (selector) {
  switch (typeof selector) {
    case 'function':
      return registerDocReadyCallback(selector);
    case 'string':
      if (selector[0] === '#') {
        return new DOMNodeCollection([document.getElementById(selector.slice(1))]);
      } else {
        return fetchNodesFromDom(selector);
      }
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
    for (const key in object) {
      base[key] = object[key];
    }
  });
  return base;
};

window.$d.

window.$d.ajax = function(options) {
  const defaults = {
    method: 'GET',
    url: 'https://www.booknomads.com/api/v0/isbn/9789000035526',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    data: {},
    success: () => {},
    error: () => {},
  };

  const mergedCall = $d.extend(defaults, options);
  mergedCall.method = mergedCall.method.toUpperCase();

  const xhr = new XMLHttpRequest();
  xhr.open(mergedCall.method, mergedCall.url, true);

  xhr.onload = function(e) {
    if (xhr.status === 200) {
      defaults.success(xhr.response);
    } else {
      defaults.error(xhr.response);
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

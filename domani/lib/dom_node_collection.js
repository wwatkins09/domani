class DOMNodeCollection {
  constructor(htmlEls) {
    this.htmlEls = htmlEls;
  }

  html(string) {
    if (typeof string === 'string') {
      this.htmlEls.forEach((node) => {
        node.innerHTML = string;
      });
    } else {
      return this.htmlEls[0].innerHTML;
    }
  }

  empty() {
    this.html('');
  }

  append(arg) {
    this.htmlEls.forEach( (node) => {
      node.innerHTML += arg;
    });
  }

  attr(attrName, newValue) {
    if (typeof newValue === 'string' ) {
      this.htmlEls.forEach( (node) => {
        node.setAttribute(attrName, newValue)
      });
    } else {
      return this.htmlEls[0].getAttribute(attrName);
    }
  }

  addClass(className) {
    this.htmlEls.forEach ( (node) => {
      node.classList.add(className);
    });
  }

  removeClass(className) {
    this.htmlEls.forEach ( (node) => {
      node.classList.remove(className);
    });
  }

  children() {
    let result = [];
    this.htmlEls.forEach( (node) => {
      let nodeChildren = node.children;
      result = result.concat(Array.from(nodeChildren));
    });
    return new DOMNodeCollection(result);
  }

  parent() {
    let result = [];
    this.htmlEls.forEach( (node) => {
      let nodeParent = node.parentNode;
      if (!result.includes(nodeParent)) {
        result.push(nodeParent);
        }
      });
      return new DOMNodeCollection(result);
    }


  find(selector) {
    let result = [];
    this.htmlEls.forEach( (node) => {
      let elementList = node.querySelectorAll(selector);
      result = result.concat(Array.from(elementList));
    });
    return new DOMNodeCollection(result);
  }

  remove () {
    this.empty();
    this.htmlEls = [];
  }

  on (eventName, handler) {
    this.htmlEls.forEach( (node) => {
      node.addEventListener(eventName, handler);
      const eventKey = `domani-${eventName}`;
      if (typeof node[eventKey] === 'undefined') {
        node[eventKey] = [];
      }
      node[eventKey].push(handler);
    });
  }

  off (eventName) {
    this.htmlEls.forEach( (node) => {
      const eventKey = `domani-${eventName}`;
      if (node[eventKey]) {
        node[eventKey].forEach((handler) => {
          node.removeEventListener(eventName, handler);
        });
      }
      node[eventKey] = [];
    });
  }

  each (callback) {
    this.htmlEls.forEach( (node) => {
      callback(node);
    });
  }

}



module.exports = DOMNodeCollection;

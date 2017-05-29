/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

var SweetSelector = {
  select: function(selector) {
    return document.querySelectorAll(selector);
  }
};

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

var DOM = {
  hide: function(element) {
    let elements = SweetSelector.select(element);
    for (let ele of elements) ele.style.display = 'none';
  },

  show: function(element) {
    let elements = SweetSelector.select(element);
    for (let ele of elements) ele.style.display = '';
  },

  addClass: function(element, className) {
    let elements = SweetSelector.select(element);
    for (let ele of elements) ele.classList.add(className);
  },

  removeClass: function(element, className) {
    let elements = SweetSelector.select(element);
    for (let ele of elements) ele.classList.remove(className);
  }
};

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

var EventDispatcher = {
  on: function(element, eventName, callback) {
    let elements = SweetSelector.select(element);
    for (let ele of elements) {
      console.log(ele);
      let event = document.createEvent('HTMLEvents');
      event.initEvent('click', true, false);
      ele.dispatchEvent(event);

      callback();
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

var AjaxWrapper = {
  request: function(params) {
    var request = new XMLHttpRequest();
    request.open(params.type, params.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = request.responseText;
        console.log('data :', data);
        params.success(data);
      } else {
        // We reached our target server, but it returned an error
        // return false
        params.fail();
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  }
};

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

function miniquery(selector) {
  function hide() {
    DOM.hide(selector);
  }
  function show() {
    DOM.show(selector);
  }
  function addClass() {
    DOM.addClass(selector);
  }
  function removeClass() {
    DOM.removeClass(selector);
  }
  function on(element, eventName, callback) {
    EventDispatcher.on(element, eventName, callback);
  }
  function ajax(params) {
    AjaxWrapper.request(params);
  }
  return ({
    this: SweetSelector.select(selector),
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass,
    on: on,
    ajax: ajax
  })
}

let $ = miniquery;

/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
var SweetSelector = {
  select: function (selector) {
    return document.querySelectorAll(selector);
    //if(selector[0] === "#") {
    //  return document.getElementById(selector.slice(1));
    //} else if (selector[0] === ".") {
    //  return document.getElementsByClassName(selector.slice(1));
    //} else {
    //  return document.getElementsByTagName(selector);
    //}
  }
};
/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
var DOM = {
  hide: function(selector) {
    selected = SweetSelector.select(selector);
    for (let i=0;i<selected.length;i++) {
      selected[i].style.visibility = "hidden";
    }
  },
  show: function(selector) {
    selected = SweetSelector.select(selector);
    for (let i=0;i<selected.length;i++) {
      selected[i].style.visibility = "visible";
    }
  },
  addClass: function(selector, added) {
    selected = document.getElementsByClassName(selector.slice(1));
    for(let i=0;i<selected.length;i++) {
      selected[i].classList.add(added);
    }
  },
  removeClass: function(selector, removed) {
    selected = document.getElementsByClassName(selector.slice(1));
    for(let i=0;i<selected.length;i++) {
      selected[i].classList.remove(removed);
    }
  },
};

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
var EventDispatcher = {
  on: function (selector, event, callback) {
    let elem = SweetSelector.select(selector);
    for (let i=0;i<elem.length;i++) {
      elem[i].addEventListener(event, callback);
    }
  },
  trigger: function(selector, event) {
    event = new Event (event);
    let elem = SweetSelector.select(selector);
    for (let i=0;i<elem.length;i++) {
      elem[i].dispatchEvent(event);
    }
  }
};

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
var AjaxWrapper = {
  request: function(obj) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("error", obj.fail);
    oReq.addEventListener("load", obj.success);
    oReq.open(obj.type,obj.url);
    //oReq.onreadystatechange = function() {
    //  if (oReq.readyState == XMLHttpRequest.DONE && oReq.status == 200) {
    //    obj.success;
    //  } else {
    //    obj.fail;
    //  }
    //};
    oReq.send();
  }
};
/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
var miniquery = function (selector="") {
  var selected = document.querySelectorAll(selector);
  return {
    hide: function () {
      for (let i=0;i<selected.length;i++) {
        selected[i].style.visibility = "hidden";
      }
    },
    show: function () {
      for (let i=0;i<selected.length;i++) {
        selected[i].style.visibility = "visible";
      }
    },
    addClass: function(added) {
      for(let i=0;i<selected.length;i++) {
        selected[i].classList.add(added);
      }
    },
    removeClass: function(removed) {
      for(let i=0;i<selected.length;i++) {
        selected[i].classList.remove(removed);
      }
    },
    on: function (event, callback) {
      for (let i=0;i<selected.length;i++) {
        selected[i].addEventListener(event, callback);
      }
    },
    trigger: function(event) {
      event = new Event (event);
      for (let i=0;i<selected.length;i++) {
        elem[i].dispatchEvent(event);
      }
    }
  };
};

miniquery.ajax = function(obj) {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("error", obj.fail);
  oReq.addEventListener("load", obj.success);
  oReq.open(obj.type,obj.url);
  oReq.send();
};

var $ = miniquery;

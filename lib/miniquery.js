/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
var SweetSelector = {
  select: function(value) {
    switch (value[0]) {
      case "#":
        return document.getElementById(value.substring(1));
        break;
      case ".":
        return document.getElementsByClassName(value.substring(1));
        break;
      default:
        return document.getElementsByTagName(value);
    }
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
var DOM = {
  hide: function(value) {
    var targets = SweetSelector.select(value);
    if(targets.length > 1) {
      var arr = [].slice.call(targets);
      arr.forEach(target => {
        target.style.visibility = "hidden";
      })
    } else targets.style.visibility = "hidden";
  },
  show: function(value) {
    var targets = SweetSelector.select(value);
    if(targets.length > 1) {
      var arr = [].slice.call(targets);
      arr.forEach(target => {
        target.style.visibility = "visible";
      })
    } else targets.style.visibility = "visible";
  },
  removeClass: function(value, removed) {
    var targets = SweetSelector.select(value);
    if(targets.length > 1) {
      var arr = [].slice.call(targets);
      arr.forEach(target => {
        target.classList.remove(removed);
      })
    } else targets.classList.remove(removed);
  },
  addClass: function(value, added) {
    var targets = SweetSelector.select(value);
    if(targets.length > 1) {
      var arr = [].slice.call(targets);
      arr.forEach(target => {
        target.classList.add(added);
      })
    } else targets.classList.add(added);
  }
}


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
var EventDispatcher = {
  on: function(value, events, callback) {
    var targets = SweetSelector.select(value);
    var arr = [].slice.call(targets);
    arr.forEach(target => {
      target.addEventListener(events, callback, false);
    })
  },
  trigger: function(value, events) {
    var evt = new Event(events);
    var targets = SweetSelector.select(value);
    var arr = [].slice.call(targets);
    arr.forEach(target => {
      target.dispatchEvent(evt);
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
var AjaxWrapper = {
  request: function(obj) {
    var request = new XMLHttpRequest();
    request.open(obj.type, obj.url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        obj.success(request.responseText);
      } else {
        // We reached our target server, but it returned an error
        console.log('error')
      }
    };
    request.onerror = function() {
      obj.fail();
    };
    request.send();
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

var miniquery = function(value) {
  return {
    this: SweetSelector.select(value),
    hide: function() {
      DOM.hide(value)
    },
    show: function() {
      DOM.show(value)
    },
    addClass: function(added) {
      DOM.addClass(value, added)
    },
    removeClass: function(removed) {
      DOM.removeClass(value, removed)
    },
    on: function(events, callback) {
      EventDispatcher.on(value, events, callback)
    },
    trigger: function(events) {
      EventDispatcher.trigger(value, events)
    }
  }
}

miniquery.ajax = function(obj) {
  return AjaxWrapper.request(obj)
}

var $ = miniquery;
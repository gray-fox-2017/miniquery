/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

 class SweetSelector {
   static select(selector) {
     let query = document.querySelectorAll(selector)
     let nodes = [].map.call(query, node => node)
     return nodes.length == 1 ? nodes[0] : nodes
    // return query
   }
 }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

 class DOM {
   static hide(selector) {
     let selectorHide = SweetSelector.select(selector)
     if (Array.isArray(selectorHide)) {
       selectorHide.forEach(el => el.style.display = 'none')
     } else {
       selectorHide.style.display = 'none'
     }
   }

   static show(selector) {
     let selectorHide = SweetSelector.select(selector)
     if (Array.isArray(selectorHide)) {
       selectorHide.forEach(el => el.style.display = '')
     } else {
       selectorHide.style.display = ''
     }
   }

   static removeClass(selector, className) {
     let selectorRemove = SweetSelector.select(selector)
     if (Array.isArray(selectorRemove)) {
       selectorRemove.forEach(el => el.classList.remove(className))
     } else {
       selectorRemove.classList.remove(className)
     }
   }

   static addClass(selector, className) {
     let selectorAdd = SweetSelector.select(selector)
     if (Array.isArray(selectorAdd)) {
       selectorAdd.forEach(el => el.classList.add(className))
     } else {
       selectorAdd.classList.add(className)
     }
   }
 }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 class EventDispatcher {
   static on(selector, eventName, eventHandler) {
    let els = SweetSelector.select(selector)
    // console.log(Array.isArray(els));
    if (Array.isArray(els)) {
      els.forEach(el => el.addEventListener(eventName, eventHandler))
    } else {
      els.addEventListener(eventName, eventHandler);
    }
  }

   static trigger(selector, eventName, eventHandler) {
    let els = SweetSelector.select(selector)
    // console.log(Array.isArray(els));
    if (Array.isArray(els)) {
      els.forEach(el => {
        var event = document.createEvent('HTMLEvents');
        event.initEvent(eventName, true, false);
        el.dispatchEvent(event);
      })
    } else {
      var event = document.createEvent('HTMLEvents');
      event.initEvent(eventName, true, false);
      els.dispatchEvent(event);
    }
  }
 }


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

class AjaxWrapper {
  static request(option) {
    let request = new XMLHttpRequest()
    request.open(option.type, option.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var resp = request.responseText;
        option.success(resp)
      } else {
        // We reached our target server, but it returned an error
        var resp = request.responseText;
        option.fail(resp)
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      var resp = request.responseText;
      option.fail(resp)
    };

    request.send();
  }
}
// akan mereturn gagal kalo belum terhubung dengan express js

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */




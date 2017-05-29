/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
    static select(params) {
        // let selector = document.querySelector(params)
        let selector = params;
        return document.querySelectorAll(selector)

    }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
   static hide(params) {
      SweetSelector.select(params).forEach((value) => {
         value.style.display = 'none'
      })
   }

   static show(params) {
      SweetSelector.select(params).forEach((value) => {
         value.style.display = ''
      })
   }

   static removeClass(params) {
      SweetSelector.select(params).forEach((value) => {
         value.classList.remove()
      })
   }

   static addClass(params1, params2) {
      // let dom = SweetSelector.select(params1)
      //
      // if (typeof(dom) == "object") {
      //    SweetSelector.select(params1).classList.add(params2)
      // }
      SweetSelector.select(params1).forEach((value) => {
         if(value.classList) {
            value.classList.add(params2)
         } else {
            value.className += ' ' +className
         }
      })
   }
}


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

class EventDispatcher {
   static on(params1, events, callback) {
      SweetSelector.select(params1).forEach((element) => {
         element.addEventListener(events, callback, false)
      })
   }

   static trigger(params1, events) {
      var event = new Event(events)
      SweetSelector.select(params1).forEach((element) => {
         element.dispatchEvent(event)
      })
   }
}


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

class AjaxWrapper {
  static request(params) {
    var oReq = new XMLHttpRequest()
    oReq.addEventListener('load', params.success)
    oReq.addEventListener('error', params.fail)
    oReq.open(params.type, params.url)
    oReq.send();
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

class miniquery {
  constructor(params) {
    this.params = params
  }

  select() {
    return SweetSelector.select(this.params)
  }
  hide() {
    DOM.hide(this.params)
  }
  show(){
    DOM.show(this.params)
  }
  addClass(params) {
    DOM.addClass(this.params, params)
  }
  removeClass(params) {
    DOM.removeClass(this.params, params)
  }
  on(events, callback) {
    EventDispatcher.on(this.params, events, callback)
  }
  trigger(events) {
    EventDispatcher.trigger(this.params, events)
  }
  request(obj) {
    AjaxWrapper.request(obj)
  }
}

var mQuery = function(params) {
  return new miniquery(params)
}

var $ = function(params) {
  return new miniquery(params)
}
/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 class SweetSelector {
      static select (input) {
           return document.querySelector(input);
      }
 }


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
     class DOM {
          static hide(input) {
               let selector = document.querySelector(input)
               return selector.style.visibility = "hidden";
          }

          static show(input) {
               let selector = document.querySelector(input)
               return selector.style.visibility = "show";
          }

          static removeClass(input, clasName) {
               let selector = document.querySelector(input)
               return selector.classList.remove( clasName );

          }

          static addClass(input, clasName) {
               let selector = document.querySelector(input)
               return selector.classList.add(clasName);

          }
     }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
 class EventDispatcher {
      static on (input, action, callback) {
          //  console.log('input '+input);
           return document.querySelector(input).addEventListener(action, callback);
      }

          static triggerEvent(el, eventName, options) {
            var event;
            if (window.CustomEvent) {
              event = new CustomEvent(eventName, options);
            } else {
              event = document.createEvent('CustomEvent');
              event.initCustomEvent(eventName, true, true, options);
            }
            el.dispatchEvent(event);
          }

 }

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

          class AjaxWrapper {
                 static request(option) {
                   let xhttp = new XMLHttpRequest()
                   xhttp.open(option.type, option.url, true);
                   xhttp.onload = function() {
                     if (xhttp.status >= 200 && xhttp.status < 400) {
                       option.success(this.responseText)
                     } else {
                       option.fail(this.responseText)
                     }
                   };

                   xhttp.onerror = function() {
                     // There was a connection error of some sort
                     option.fail(this.responseText)
                   };

                   xhttp.send();
                 }
          }



/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

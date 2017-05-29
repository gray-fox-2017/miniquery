/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 var SweetSelector = {
   select: function(element){
     return document.querySelectorAll(element)
   }
 }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

var DOM = {
  hide: function(element){
    var selected = SweetSelector.select(element)
    for (var i = 0; i < selected.length; i++) {
      selected[i].style.display = "none";
    }
  },
  show: function(element){
    var selected = SweetSelector.select(element)
    for (var i = 0; i < selected.length; i++) {
      selected[i].style.display = "block";
    }
  },
  addClass: function(element, classAdded) {
    var selected = SweetSelector.select(element)
    for (var i = 0; i < selected.length; i++) {
      selected[i].classList.add(classAdded);
    }
  },
  removeClass: function(element, removedClass){
    var selected = SweetSelector.select(element)
    for (var i = 0; i < selected.length; i++) {
      selected[i].classList.remove(removedClass);
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 var EventDispatcher = {
   on: function(element, addEvent, callback){
     var selected = SweetSelector.select(element)
     for (var i = 0; i < selected.length; i++) {
       selected[i].addEventListener(addEvent, callback)
     }
   },
   trigger: function(element, addEvent){
     var selected = SweetSelector.select(element)
     for (var i = 0; i < selected.length; i++) {
       let event = document.createEvent('HTMLEvents')
       event.initEvent(addEvent, true, false)
       selected[i].dispatchEvent(event)
     }
   }
 }


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
 var AjaxWrapper = {
   request: function(data){
    var request = new XMLHttpRequest();
    request.open(data.type, data.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var resp = request.responseText;
        console.log('Success: ', resp);
      } else {
        console.log("ERROR");
        // We reached our target server, but it returned an error

      }
    };
    request.onerror = function() {
      // There was a connection error of some sort
    };
    request.send();
   }
 }


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
 function miniquery(selector){
   function hide(){
     DOM.hide(selector)
   }
   function show(){
     DOM.show(selector)
   }
   function addClass(){
     DOM.addClass(selector)
   }
   function removeClass(){
     DOM.removeClass(selector)
   }
   function on(addEvent, callback){
     EventDispatcher.on(selector, addEvent, callback)
   }
   function trigger(addEvent){
     EventDispatcher.trigger(selector, addEvent)
   }
   return ({
     this: SweetSelector.select(selector),
     hide: hide,
     show: show,
     addClass: addClass,
     removeClass: removeClass,
     on: on,
     trigger: trigger
   })
}

miniquery.ajax = function(data){
  return AjaxWrapper.request(data)
}

let $ = miniquery

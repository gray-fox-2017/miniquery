/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 const SweetSelector = {
   select : function (nilai) {
     return document.querySelectorAll(nilai)
   }
 }


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 const DOM = {
   hide : function (nilai) {
     document.querySelector(nilai).style.display ='none'
   },
   show : function (nilai) {
     document.querySelector(nilai).style.display =''
   },
   removeClass : function(klas, parameter){
     var el = document.querySelector(klas)
     if (el.classList)
      el.classList.remove(parameter);
    // else
    //   el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
   },
   addClass : function(klas, parameter){
     var el = document.querySelector(klas)
     if (el.classList)
      el.classList.add(parameter);
    else
      el.className += ' ' + parameter;
    }
 }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
 const EventDispatcher = {
   on : function (klas, parameter, cb) {
    //  console.log(klas);
    //  console.log(cb);
     let el = document.querySelector(klas)
     return el.addEventListener(parameter, cb);
   }
 }

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

const AjaxWrapper = {
  request = function(objk){
    var request = new XMLHttpRequest();
    request.open(objk.type, objk.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText;
      } else {

      }
    };

    request.onerror = function() {
    };

    request.send();

  }
}


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

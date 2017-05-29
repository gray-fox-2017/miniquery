/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
const SweetSelector = {
   select : function(selector) {
     let elm;
     switch (selector[0]) {
       case '#' :
         elm = document.getElementById(selector.substr(1));
         break;
       case '.' :
         elm = document.getElementsByClassName(selector.substr(1));
         break;
       default:
         elm = document.getElementsByTagName(selector);
         break;
     }
     return elm
   }

}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

 const DOM = {

   hide : function(selector) {
     let elm = SweetSelector.select(selector);
     if (elm.length > 1)
       for (let i = 0; i< elm.length;i++) elm[i].style.visibility = 'hidden';
     else elm.style.visibility = 'hidden';

   },
   show: function(selector) {
     let elm = SweetSelector.select(selector);
     if (elm.length > 1)
       for (let i = 0; i< elm.length;i++) elm[i].style.visibility = 'initial';
     else elm.style.visibility = 'initial';
   },
   removeClass: function(selector,classname) {
     let elm = SweetSelector.select(selector);
     if (elm.length > 1)
       for (let i = 0; i< elm.length;i++) elm[i].classList.remove(classname);
     else
     elm.classList.remove(classname);
   },
   addClass: function(selector,classname) {
     let elm = SweetSelector.select(selector);
     if (elm.length > 1)
       for (let i = 0; i< elm.length;i++) elm[i].classList.add(classname);
     else elm.classList.add(classname);
   }
 }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
const EventDispatcher = {
  on: function(selector,evt,callback){
    let elm = SweetSelector.select(selector);
    if (elm.length > 1)
      for (let i = 0; i< elm.length;i++) elm[i].addEventListener(evt,callback);
    else elm.addEventListener(evt,callback);
  },
  trigger: function(selector,evt) {
    evt = new Event(evt);
    let elm = SweetSelector.select(selector);
    if (elm.length > 1)
      for (let i = 0; i< elm.length;i++) elm[i].dispatchEvent(evt);
    else  elm.dispatchEvent(evt);

  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
const AjaxWrapper = {
  request: function(req) {
    const xhr = new XMLHttpRequest();
    let method = req.type;
    let url = req.url;

    xhr.addEventListener('error',req.fail);
    xhr.addEventListener('load',req.success)
    xhr.open(method,url,true);

    xhr.send(null);



  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
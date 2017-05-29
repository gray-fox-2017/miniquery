/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

let miniquery = function(selector) {
  let elm = document.querySelectorAll(selector);
  return {
    hide : function() {
      for (let i = 0; i< elm.length;i++) elm[i].style.visibility = 'hidden';
    },
    show: function() {
      for (let i = 0; i< elm.length;i++) elm[i].style.visibility = 'initial';
    },
    removeClass: function(classname) {
      for (let i = 0; i< elm.length;i++) elm[i].classList.remove(classname);
    },
    addClass: function(classname) {
      for (let i = 0; i< elm.length;i++) elm[i].classList.add(classname);
    },
    on: function(evt,callback){
      for (let i = 0; i< elm.length;i++) elm[i].addEventListener(evt,callback);
    },
    trigger: function(evt) {
      evt = new Event(evt);
      for (let i = 0; i< elm.length;i++) elm[i].dispatchEvent(evt);

    }

  }
};

//
miniquery.ajax = function(req) {
  const xhr = new XMLHttpRequest();
  let method = req.type;
  let url = req.url;

  xhr.addEventListener('error',req.fail);
  xhr.addEventListener('load',req.success)
  xhr.open(method,url,true);

  xhr.send(null);
}

let $ = miniquery;
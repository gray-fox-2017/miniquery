/*!
 * miniquery
 */
 class miniquery {
   constructor(data){
     
   }
 }

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
let SweetSelector = {
  select : (str)=> {
    return document.querySelectorAll(str)
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
let DOM = {
  hide : (str)=> {
    let data = SweetSelector.select(str)
    data.forEach(el => {
      el.style.display= 'none'
    })
  },
  show : (str)=> {
    // let data = SweetSelector.select(str)
    data.forEach(el => {
      el.style.display= ''
    })
  },
  removeClass : (str,className)=> {
    let data = SweetSelector.select(str)
    data.forEach(el =>{
        el.classList.remove(className);
    })
  },
  addClass : (str,className)=> {
    let data = SweetSelector.select(str)
    data.forEach(el =>{
      if (el.classList)
        el.classList.add(className)
      else {
        el.className += " "+ className
      }
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
let EventDispatcher = {
  on : (klass, click, next)=>{
    let data = SweetSelector.select(klass)
    data.forEach(el =>{
      el.addEventListener(click, next())
    })
  },
  trigger : (klass, click) => {
    let data = SweetSelector.select(klass)
    data.forEach(el =>{
      var event = document.createEvent('HTMLEvents');
      event.initEvent(click, true, false);
      el.dispatchEvent(event);
    })
  }
}


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
 class AjaxWrapper{
   static request(obj){
     let request = new XMLHttpRequest()
     request.open(obj.type, obj.url, true)

     request.onload = function() {
       if (request.status >= 200 && request.status < 400) {
         // Success!
         var data = request.responseText;
         obj.success(data)
       } else {
         // We reached our target server, but it returned an error
         var data = request.responseText;
         obj.fail(data)
       }
     };

     request.onerror = function() {
       // There was a connection error of some sort
       var data = request.responseText
       obj.fail(data)
     };

     request.send();
   }
 }

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
class miniquery{

}

/*!
 * miniquery
 */


/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

class SweetSelector{
	static select(input){
		return document.querySelector(input);
	}
}
/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
	static hide(input){
		return document.querySelector(input).style.visibility = "hidden";
	}
	static show(input){
		return document.querySelector(input).style.visibility = "visible"
	}
	static removeClass(kelas, rm){
		return document.querySelector(kelas).classList.remove(rm);
	}
	static addClass(kelas, ad){
		return document.querySelector(kelas).classList.add(ad);
	}
}
/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher {
	static on(input, action, cb){
		return document.querySelector(input).addEventListener(action, cb);
	}
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper {
  static request(obj) {
    let xhttp = new XMLHttpRequest()
    xhttp.open(obj.type, obj.url, true);

    xhttp.onload = function() {
      if (xhttp.status >= 200) {
        obj.success(this.responseText)
      } else {
        obj.fail()
      }
    };

    xhttp.onerror = function() {
      obj.fail()
    };

    xhttp.send();
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
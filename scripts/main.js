(function (window) {
  "use strict";
  var FORM_SELECTOR = "[data-coffee-order=\"form\"]";
  var App = window.App;
  var Truck = App.Truck;
  var Datastore = App.Datastore;
  var FormHandler= App.FormHandler;
  var myTruck = new Truck("ncc-1701", new Datastore());
  window.myTruck = myTruck;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  console.log(formHandler);
}) (window);

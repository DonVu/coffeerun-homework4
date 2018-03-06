(function (window) {
  "use strict";
  var App = window.App;
  var Truck = App.Truck;
  var Datastore = App.Datastore;
  var myTruck = new Truck("ncc-1701", new Datastore());
  window.myTruck = myTruck;
}) (window);

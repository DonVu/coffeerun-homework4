(function (window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  function Checklist(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$element = $(selector);
    if (this.$element.length == 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  function Row(coffeeOrder) {
    var $div = $("<div></div>", {
      "data-coffee-order": "checkedbox",
      "class": "checkedbox"
    });

    var $label = $("<label></label>");

    var $checkbox = $("<inpute></input>", {
      type: "checkbox",
      value: coffeeOrder.emailAddress
    });

    var description =  coffeeOrder.size + " ";
    if (coffeeOrder.flavor) {
      description +=coffeeOrder.flavor+ " ";
    }

    description += coffeeOrder.coffee + ", ";
    description += " (" + coffeeOrder.emailAddress + ")";
    description += " [" + coffeeOrder.strength + "x]";
  }

  App.Checklist = Checklist;
  window.App = App;
}) (window);

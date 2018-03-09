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

  App.Checklist = Checklist;
  window.App = App;
}) (window);

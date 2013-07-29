window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, postData) {
    var that = this;
    new Journal.Routers.PostRouter($rootEl, postData)
    Backbone.history.start();
  }
};
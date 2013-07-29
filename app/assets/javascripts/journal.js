window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, postData) {
    var that = this;
    new Journal.Routers.PostRouter($rootEl, postData)
    Backbone.history.start();
    // var posts = new Journal.Collections.Posts(postData);
    //
    // var postIndexView = new Journal.Views.PostIndexView({
    //   collection: posts
    // });

    // var postShowView = new Journal.Views.PostShowView({
    // });
  }
};
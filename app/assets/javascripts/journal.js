window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, postData) {
    var that = this;

    var posts = new Journal.Collections.Posts(postData);
    console.log(posts)
    var postIndexView = new Journal.Views.PostIndexView({
      collection: posts
    });

    $rootEl.html(postIndexView.render().$el);
  }
};
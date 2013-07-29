window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($sidebar, $content, postData) {
    var posts = new Journal.Collections.Posts(postData);

    this.installSidebar($sidebar, posts);

    var that = this;
    new Journal.Routers.PostRouter($content, posts);
    Backbone.history.start();
  },

  installSidebar: function ($sidebar, posts) {
    var postIndexView = new Journal.Views.PostIndexView({
      collection: posts
    });

    $sidebar.html(postIndexView.render().$el);
  }
};
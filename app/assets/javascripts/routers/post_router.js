Journal.Routers.PostRouter = Backbone.Router.extend({

  initialize: function($rootEl, postData){
    this.$rootEl = $rootEl;
    this.posts = new Journal.Collections.Posts(postData);
  },

  routes: {
    "": "index",
    "posts/:id": "show"
  },

  index: function() {
    var that = this;
    var postIndexView = new Journal.Views.PostIndexView({
      collection: that.posts
    });

    that.$rootEl.html(postIndexView.render().$el);
  },

  show: function(id){
    var post = this.posts.get(id);
    var postShowView = new Journal.Views.PostShowView({
      model: post
    });

    this.$rootEl.html(postShowView.render().$el);
  }

});
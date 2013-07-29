Journal.Routers.PostRouter = Backbone.Router.extend({
  initialize: function($rootEl, posts){
    this.$rootEl = $rootEl;
    this.posts = posts;
  },

  routes: {
    "": "index",
    "posts/new": "new",
    "posts/:id": "show",
    "posts/:id/edit": "edit"
  },

  index: function() {
    var that = this;

    that.$rootEl.empty();
  },

  show: function(id){
    var post = this.posts.get(id);
    var postShowView = new Journal.Views.PostShowView({
      model: post
    });

    this.$rootEl.html(postShowView.render().$el);
  },

  edit: function(id){
    var post = this.posts.get(id);
    var postEditView = new Journal.Views.PostEditView({
      model: post
    });

    this.$rootEl.html(postEditView.render().$el);
  },

  new: function(){
    var that = this;
    var postNewView = new Journal.Views.PostNewView({
      collection: that.posts
    });

    that.$rootEl.html(postNewView.render().$el);
  }

});
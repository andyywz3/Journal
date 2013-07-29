Journal.Views.PostIndexView = Backbone.View.extend({
  events: {
    "click .delete": "remove"
  },

  initialize: function(){
    var that = this;

    var renderCallback = that.render.bind(that);
    that.listenTo(that.collection, "remove", renderCallback);
    that.listenTo(that.collection, "add", renderCallback);
    that.listenTo(that.collection, "change", renderCallback);
    that.listenTo(that.collection, "reset", renderCallback);
  },

  render: function(){
    var that = this;

    var renderedContent = JST["posts/index"]({
      posts: that.collection
    })

    that.$el.html(renderedContent);
    return that;
  },

  remove: function(el){
    var thing = this.collection.get(el.target.id);
    thing.destroy();
  }

})
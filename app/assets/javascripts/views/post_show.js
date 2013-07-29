Journal.Views.PostShowView = Backbone.View.extend({
  events: {
    "click .back": "back"
  },

  initialize: function(){
    var that = this;

    var renderCallback = that.render.bind(that);
    that.listenTo(that.model, "destroy", renderCallback);
  },

  render: function(){
    var that = this;
    console.log(that.model)
    var renderedContent = JST["posts/show"]({
      post: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },

  back: function(){
    window.history.back();
  }

});
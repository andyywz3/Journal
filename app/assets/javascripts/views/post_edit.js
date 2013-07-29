Journal.Views.PostEditView = Backbone.View.extend({
  events: {
    "click .back": "back",
    "click .edit": "edit"
  },

  initialize: function(){
    var that = this;

    var renderCallback = that.render.bind(that);
    that.listenTo(that.model, "change", renderCallback);
  },

  render: function(){
    var that = this;
    var renderedContent = JST["posts/edit"]({
      post: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },

  back: function(){
    window.history.back();
  },

  edit: function(){
    var that = this;
    var title = that.$("input[name=post\\[title\\]]").val();
    var body = that.$("textarea").val();
    this.model.set({title: title, body: body})
    // this.model.set({title: title, body: body});
    this.model.save({}, {
      success: function () {
        Backbone.history.navigate('#/', {trigger: true})
      },
      error: function() {
        console.log("Erorr");
        that.render();
      }
    });
    return false
  }

});
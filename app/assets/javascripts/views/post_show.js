Journal.Views.PostShowView = Backbone.View.extend({
  events: {
    "click .back": "back",
    "dblclick .ptitle": "etitle",
    "dblclick .pbody": "ebody",
    "blur .edittitle": "stitle",
    "blur .editbody": "sbody"
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
  },

  etitle: function (event) {
    var that = this;
    $(event.target).replaceWith("<input type='text' class='edittitle' name='post[title]' value='" + that.model.escape("title") + "'>")
  },

  ebody: function(event){
    var that = this;
    $(event.target).replaceWith("<textarea class='editbody' name='post[body]'>" + that.model.escape("body") + "</textarea>")
  },

  stitle: function(event){
    var that = this;
    var oldtitle = that.model.escape("title");
    var title = that.$("input[name=post\\[title\\]]").val();
    this.model.set({title: title})
    this.model.save({}, {
      success: function () {
        $(event.target).replaceWith("<div class='ptitle'>" + title + "</div>")
      },
      error: function() {
        $(event.target).replaceWith("<div class='ptitle'>" + oldtitle + "</div>")
      }
    });
  },

  sbody: function(event){
    var that = this;
    var oldbody = that.model.escape("body");
    var body = that.$("textarea").val();
    this.model.set({body: body})
    this.model.save({}, {
      success: function () {
        $(event.target).replaceWith("<div class='pbody'>" + body + "</div>")
      },
      error: function() {
        $(event.target).replaceWith("<div class='pbody'>" + oldbody + "</div>")
      }
    });
  }

});

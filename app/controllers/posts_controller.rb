class PostsController < ApplicationController
  respond_to :json
  def index
    @posts = Post.all

    respond_to do |format|
      format.html {render :index}
      format.json {render json: @posts}
    end
  end

  def create
  end

  def destroy
    @post = Post.find(params[:id])
    id = @post.id
    @post.destroy

    respond_to do |format|
      format.json {render json: @post.id}
    end
  end
end

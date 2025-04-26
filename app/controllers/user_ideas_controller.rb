class UserIdeasController < ApplicationController
  def destroy
    @user_idea = current_user.UserIdeas.find(params[:id])
    @user_idea.destroy
    redirect_to my_songs_path, status: :see_other
  end
end

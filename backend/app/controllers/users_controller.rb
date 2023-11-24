class UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    @users = Rails.cache.fetch('all_users', expires_in: 1.hour) do
      @users = User.all.includes(:reports)
    end
    render json: @users, include: { reports: { only: :title }, role: { only: :name }}
  end

  def show
    @user = User.find(params[:id])
    render json: @user, include: { reports: { only: :title }, role: { only: :name }}
  end

  def update
    @user = User.find(params[:id])
    if @user
      user_name = @user.name;
      @user.update(name: user_name);
      render json: @user
    else
      render json: { error: 'Failed to update user profile' }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :other_attributes)
  end

end

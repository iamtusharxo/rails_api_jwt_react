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
end

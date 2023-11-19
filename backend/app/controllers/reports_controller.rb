# reports_controller.rb
class ReportsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_report, only: [:show, :edit, :update, :destroy]

  def index
    @reports = current_user.reports
    render json: @reports
  end

  def show
    render json: @report
  end

  # Other actions

  private

  def set_report
    @report = current_user.reports.find(params[:id])
  end
end

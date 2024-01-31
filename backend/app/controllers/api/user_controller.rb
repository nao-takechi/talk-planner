class Api::UserController < ApplicationController
  def create
    sendTime = params[:temp_data][:sendTime]
    line_access_token = params[:line_access_token]
    getLineId(accessToken)

    begin
      ret = User.create(sendTime)
    rescue => e
      render status: 422, json: { status: e.message } and return
    end
    render json: { status: :ok, data: ret }
  end

  def getLineId(accessToken)

  end
end
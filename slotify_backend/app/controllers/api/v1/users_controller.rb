class Api::V1::UsersController < ApplicationController
    before_action :set_user, only: [:update, :show]

    def index
        @users = User.all
        render json: @users, status: :ok
    end
    def show
        render json: @user, status: :ok
    end

    def create
        user = UserService.new(user_params).create_user
        render json: user.to_json(include: { roles: { only: [:role] }}, except: :password_digest ), status: :created
        rescue ActiveRecord::RecordInvalid => error
            render json: {errors: error.message}, status: :unprocessable_entity
    end

    def edit
    end

    def update
        if @user
            if @user.update(user_params)
                render json: @user, status: :ok
            else
                render json: { errors: @user.errors.full_message }, status: :unprocessable_entity
            end
        else
            render json: { errors: "User not found." }, status: :unprocessable_entity
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :first_name, :last_name, :email, :phone_number, :password, :role)
    end

    def set_user
        @user = User.find(params[:id])
    end
end
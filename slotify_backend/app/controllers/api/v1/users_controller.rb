class Api::V1::UsersController < ApplicationController
    before_action :set_user, only: [:update, :show, :edit]

    def index
        @users = User.all

        render json: @users, status: :ok
    end
    def show
        render json: @user, status: :ok
    end

    def create
        @user = User.new(user_params.except(:role))
        @user.roles << Role.find_by(role: user_params.fetch(:role) || "user")
        if @user.save
            render json: @user, status: :created
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def edit
    end

    def update

        if @user.update(user_params)
            render json: @user, status: :ok
        else
            render json: { errors: @user.errors.full_message }, status: :unprocessable_entity
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
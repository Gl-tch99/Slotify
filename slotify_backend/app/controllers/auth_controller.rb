class AuthController < ApplicationController
    skip_before_action :authenticate_request, only: [:login]
    def login
        puts "Login request received"
        user= User.find_by(email: params[:email])
        puts user
        if user&.authenticate(params[:password])
            user.update_jti
            token = create_token(user)
            render json: { 
                token: token, 
                user: {
                  email: user.email,
                  name: user.username,
                  roles: user.roles.pluck(:role) #telling to get the role of the user from the roles table and the column name is role
                }
              }, status: :ok
        else
            render json: { error: 'Invalid email or password' }, status: :unauthorized
        end
    end

    def logout
      @current_user.update_jti
      render json: { message: "Logged out successfully" }
    end

    private
    def create_token(user)
        payload = {
          user_id: user.id,
          email: user.email,
          roles: user.roles.pluck(:role),
          jti: user.jti
        }
        JwtService.encode(payload)
      end

end
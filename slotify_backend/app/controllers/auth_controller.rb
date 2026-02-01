class AuthController < ApplicationController
    skip_before_action :authenticate_request, only: [:login]
    def login
        puts "Login request received"
        user= User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
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

    private
    def create_token(user)
        payload = {
          user_id: user.id,
          email: user.email,
          roles: user.roles.pluck(:role)
        }
        JwtService.encode(payload)
      end

end
module Authenticatable
    extend ActiveSupport::Concern
  
    included do
      before_action :authenticate_request
      attr_reader :current_user
    end
  
    private
  
    def authenticate_request
      @current_user = auth_user_from_token
      unless @current_user
        puts "Authentication failed - no current user"
        render json: { error: 'Not Authorized' }, status: 401
      else
        puts "Authentication successful - user: #{@current_user.email}"
      end
    end
  
    def auth_user_from_token
      @auth_user_from_token ||= begin
      puts request.headers
        header = request.headers['Authorization']
        puts header
        return nil unless header
        
        token = header.split(' ').last
        return nil unless token
        
        begin
          decoded = JwtService.decode(token)
          return nil unless decoded
          
          user = User.find_by(id: decoded[:user_id])
          user
        rescue => e
          nil
        end
      end
    end
  end
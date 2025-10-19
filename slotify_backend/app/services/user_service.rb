class UserService
    def initialize(user_params)
        @user_params = user_params  
    end

    def create_user
        ActiveRecord::Base.transaction do
            user = User.create!(@user_params.except(:role))  #removed role from params as passing it in same body while creating User.
            user.roles << Role.find_by(role: @user_params.fetch(:role) || "user")
            user
        end
    end
end
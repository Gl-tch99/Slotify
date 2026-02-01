class JwtService
    SECRET_KEY = ENV['JWT_SECRET_KEY'] || 
    Rails.application.credentials.dig(:jwt, :secret_key) || 
    Rails.application.credentials.secret_key_base ||
    Rails.application.secret_key_base ||
    'ambesh-mayur-varshith-secret-key'

    def self.encode(payload, exp = 24.hours.from_now)
        payload[:exp] = exp.to_i
        JWT.encode(payload, SECRET_KEY, 'HS256')
    end

    def self.decode(token)
        return nil unless token
        decoded = JWT.decode(token, SECRET_KEY)[0]
        HashWithIndifferentAccess.new(decoded)
      rescue JWT::ExpiredSignature => e
        nil
      rescue JWT::VerificationError => e
        nil
      rescue JWT::DecodeError => e
        nil
      rescue => e
        nil
      end
end

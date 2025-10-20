# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puts "Creating roles"
permitted_roles = [
    {  
      "role": "admin",
    },
    {
      "role": "user",
    },
    {
      "role": "owner",
    }
  ]

permitted_roles.each do |role_attrs|
    role = Role.find_or_create_by(role: role_attrs[:role])
    puts "Created role: #{role.role}"
end

puts "-"*50
puts "Creating users..."

# Create admin users
admin_users = [
  {
    username: "ambeshraturi",
    first_name: "ambesh",
    last_name: "raturi",
    email: "ambesh.raturi@gamil.com",
    password: "password123",
    phone_number: "1234567890"
  },
  {
    username: "mayurpimpale",
    first_name: "mayur",
    last_name: "pimpale",
    email: "bob.smith@gamil.com", 
    password: "password123",
    phone_number: "0987654321"
  },
  {
    username: "varshilpatel",
    first_name: "varshil",
    last_name: "patel",
    email: "varshil.patel@gamil.com", 
    password: "password123",
    phone_number: "1122334455"
  }
]

# Create regular users
regular_users = [
  {
    first_name: "Carol",
    last_name: "Davis",
    email: "carol.davis@example.com",
    password: "password123", 
    phone_number: "2233445566", 
    username: "caroldavis"
  },
  {
    first_name: "David",
    last_name: "Wilson",
    email: "david.wilson@example.com",
    password: "password123",
    phone_number: "3344556677",
    username: "davidwilson"
  }
]

# Create regular users
owner_users = [
  {
    first_name: "ambeshowner",
    last_name: "raturi",
    email: "ambesh.raturi.owner@example.com",
    password: "password123", 
    phone_number: "2233445512", 
    username: "ambeshowner"
  },
  {
    first_name: "varshilowner",
    last_name: "patel",
    email: "varshil.patel.owner@example.com",
    password: "password123",
    phone_number: "3344556632",
    username: "varshilowner"
  },
  {
    first_name: "mayurowner",
    last_name: "pimpale",
    email: "mayur.pimpale.owner@example.com",
    password: "password123",
    phone_number: "3344511632",
    username: "mayurowner"
  }
]

admin_users.each do |user_attrs|
  user = User.find_or_create_by(username: user_attrs[:username]) do |u|
    u.assign_attributes(user_attrs)
    u.roles << Role.find_by(role: "admin")
  end
  puts "Created user: #{user.username}"
end

regular_users.each do |user_attrs|
    user = User.find_or_create_by(username: user_attrs[:username]) do |u|
      u.assign_attributes(user_attrs)
      u.roles << Role.find_by(role: "user")
    end
    puts "Created user: #{user.username}"
end

owner_users.each do |user_attrs|
  user = User.find_or_create_by(username: user_attrs[:username]) do |u|
    u.assign_attributes(user_attrs)
    u.roles << Role.find_by(role: "owner")
  end
  puts "Created user: #{user.username}"
end

puts "-"*50

venue = [
  {
      "name": "venue_1",
      "owner_user_id": 6,
      "address": {
          "street_1": "add1",
          "street_2": "add2",
          "city": "city",
          "state": "state",
          "pincode": 987234,
      }
  },
  {
      "name": "test_venue_2",
      "owner_user_id": 7,
      "address": {
          "street_1": "add1",
          "street_2": "add2",
          "city": "city",
          "state": "state",
          "pincode": 987234,
      }
  },
  {
      "name": "The Grand Hall",
      "owner_user_id": 8,
      "address": {
          "street_1": "123 Main St",
          "street_2": "123 Main St",
          "city": "Springfield",
          "state": "IL",
          "pincode": 62704,
      }
  }]

  venue.each do |venue_attrs|
    venue = Venue.find_or_create_by(name: venue_attrs[:name]) do |v|
      v.owner_user_id = venue_attrs[:owner_user_id]
      v.build_address(venue_attrs[:address])
    end
    puts "Created venue: #{venue.name}"
  end

puts "Venues Created."

puts "-"*50
puts "Creating sports..."
sports = [
  { game: "Football" },
  { game: "Basketball" },
  { game: "Tennis" },
  { game: "Cricket" },
  { game: "Badminton" }
]
sports.each do |sport_attrs|
  sport = Sport.find_or_create_by(game: sport_attrs[:game])
  puts "Created sport: #{sport.name}"
end
puts "Sports Created."

puts "Seeding completed."





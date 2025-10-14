-- Initialize PostgreSQL database for Slotify
-- This file is automatically executed when the PostgreSQL container starts

-- Create the test database
CREATE DATABASE slotify_backend_test;

-- Grant privileges to the user
GRANT ALL PRIVILEGES ON DATABASE slotify_backend_development TO slotify_backend;
GRANT ALL PRIVILEGES ON DATABASE slotify_backend_test TO slotify_backend;

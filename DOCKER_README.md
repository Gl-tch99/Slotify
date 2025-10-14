# Docker Setup for Slotify

This project includes a complete Docker setup with PostgreSQL database for both development and production environments.

## Quick Start

1. **Copy the environment file:**
   ```bash
   cp env.example .env
   ```

2. **Get your Rails master key:**
   ```bash
   # Copy the master key from your Rails app
   cat slotify_backend/config/master.key
   ```
   Add this key to your `.env` file.

3. **Start the services:**
   ```bash
   docker-compose up --build
   ```

4. **Access the applications:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000
   - PostgreSQL: localhost:5432

## Services

### PostgreSQL Database (`db`)
- **Image:** postgres:15-alpine
- **Port:** 5432
- **Database:** slotify_backend_development
- **User:** slotify_backend
- **Password:** password
- **Data persistence:** Uses Docker volume `postgres_data`

### Rails Backend (`backend`)
- **Port:** 3000
- **Environment:** development
- **Auto-migration:** Database is automatically created and migrated on startup
- **Hot reload:** Code changes are reflected immediately

### React Frontend (`frontend`)
- **Port:** 5173
- **Environment:** development
- **Hot reload:** Code changes are reflected immediately
- **API URL:** Configured to connect to backend at http://localhost:3000

## Development Commands

### Start all services:
```bash
docker-compose up
```

### Start in background:
```bash
docker-compose up -d
```

### View logs:
```bash
# All services
docker-compose logs

# Specific service
docker-compose logs backend
docker-compose logs frontend
docker-compose logs db
```

### Stop services:
```bash
docker-compose down
```

### Rebuild and start:
```bash
docker-compose up --build
```

### Access Rails console:
```bash
docker-compose exec backend bundle exec rails console
```

### Run Rails commands:
```bash
# Database migration
docker-compose exec backend bundle exec rails db:migrate

# Database seed
docker-compose exec backend bundle exec rails db:seed

# Run tests
docker-compose exec backend bundle exec rails test
```

### Access PostgreSQL:
```bash
# Connect to database
docker-compose exec db psql -U slotify_backend -d slotify_backend_development

# Or from host machine
psql -h localhost -p 5432 -U slotify_backend -d slotify_backend_development
```

## Environment Variables

Create a `.env` file based on `env.example`:

- `RAILS_MASTER_KEY`: Your Rails master key (required)
- `DATABASE_URL`: Database connection string
- `POSTGRES_*`: PostgreSQL configuration
- `VITE_API_URL`: Frontend API URL

## Data Persistence

- **PostgreSQL data:** Stored in Docker volume `postgres_data`
- **Bundle cache:** Stored in Docker volume `bundle_cache` for faster rebuilds

## Troubleshooting

### Database connection issues:
```bash
# Check if database is ready
docker-compose exec db pg_isready -U slotify_backend

# Reset database
docker-compose down -v
docker-compose up --build
```

### Permission issues:
```bash
# Fix file permissions
sudo chown -R $USER:$USER .
```

### Port conflicts:
If ports 3000, 5173, or 5432 are already in use, modify the ports in `docker-compose.yml`:
```yaml
ports:
  - "3001:3000"  # Change 3000 to 3001
```

## Production Deployment

For production deployment, use the existing production Dockerfile in `slotify_backend/Dockerfile` and configure appropriate environment variables for your production environment.

## File Structure

```
Slotify/
├── docker-compose.yml          # Main orchestration file
├── env.example                 # Environment variables template
├── init.sql                    # PostgreSQL initialization
├── DOCKER_README.md           # This file
├── slotify_backend/
│   ├── Dockerfile             # Production Dockerfile
│   ├── Dockerfile.dev         # Development Dockerfile
│   └── config/database.yml    # Database configuration
└── slotify_frontend/
    └── Dockerfile             # Frontend Dockerfile
```

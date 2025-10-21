# NestJS + Prisma Blog API

This is a backend-only NestJS application using Prisma with PostgreSQL. It has JWT authentication and allows users to create and read posts.  

## Features
- JWT-based authentication for users.
- Users can create posts; `authorId` is taken from the token.
- Get all posts or a single post by ID.
- Prisma ORM for database management.

## Database Models
**User**: id, username, password, posts.  
**Post**: id, title, content, published, authorId, createdAt, updatedAt.

## Setup
1. Create `.env`:
DATABASE_URL="postgresql://postgres:postgrespassword@localhost:5432/nest_auth?schema=public"
JWT_SECRET="your_jwt_secret_key"

2. Start PostgreSQL with Docker:
docker-compose up -d

3. Install dependencies:
npm install

4. Run Prisma migrations:
npx prisma migrate dev --name init

5. Start server:
npm run start:dev

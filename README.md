# NestJS + Prisma Blog API

A backend-only API built with **NestJS** and **Prisma** using **PostgreSQL**. Supports **JWT authentication**, allowing users to securely create and fetch posts. Ideal for a blog or content API.

## Features
- JWT-based user authentication.
- Create posts with `authorId` from token.
- Fetch all posts or by ID.
- Type-safe DB access with Prisma.

## Database
- **User**: `id`, `username`, `password`, `posts`.
- **Post**: `id`, `title`, `content`, `published`, `authorId`, `createdAt`, `updatedAt`.

## Setup
1. `.env`:
DATABASE_URL="postgresql://postgres:postgrespassword@localhost:5432/nest_auth?schema=public"
JWT_SECRET="your_jwt_secret_key"

2. Start DB: `docker-compose up -d`  
3. Install deps: `npm install`  
4. Migrate DB: `npx prisma migrate dev --name init`  
5. Start server: `npm run start:dev`

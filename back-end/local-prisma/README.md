# Local prisma server using Docker

Start prisma container by running

$ docker-compose up -d

The following Docker Compose file configures two Docker containers:

prisma: The container running your Prisma server.
postgres-db: The container running a local PostgreSQL instance, based on the PostgreSQL Docker image.
prisma is using the postgres-db container as its database. Instead of referencing the database host via an IP address or URL, it simply references the postgres-db image as the database host:

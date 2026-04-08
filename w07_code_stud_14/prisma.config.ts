import { defineConfig } from "prisma/config";

const localDatabaseUrl = "postgresql://postgres:user@localhost:5433/wp2_demo_14";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DIRECT_URL ?? process.env.DATABASE_URL ?? localDatabaseUrl,
  },
});
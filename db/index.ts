import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = "postgres://postgres:postgres@localhost:5432/drizzle"
const pool = postgres(connectionString, { max: 1 })

const db = drizzle(pool)

export default db;

import { drizzle } from "drizzle-orm/node-postgres";
import { users } from "./schema.js";

const db = drizzle('postgresql://postgres:password@localhost:5432/postgres')

import { drizzle } from "drizzle-orm/singlestore/driver";
import { users } from "./schema.js";

const db = drizzle('postgresql://postgres:password@localhost:5432/postgres')

// src/services/DrizzleService.ts
import { Service } from "@tsed/di";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from '../db/schema.js'

@Service()
export class DrizzleService {
    public db: NodePgDatabase<typeof schema>;
    private pool: Pool;

    $onInit() {
        this.pool = new Pool({
            connectionString: 'postgresql://postgres:password@localhost:5432/postgres',
        });

        this.db = drizzle(this.pool, { schema });
        console.log("Drizzle ORM connected to the database.");
    }

    $onDestroy() {
        this.pool.end();
    }
}

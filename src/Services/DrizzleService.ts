// src/services/DrizzleService.ts
import { Service } from "@tsed/di";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

@Service()
export class DrizzleService {
    public db: NodePgDatabase<Record<string, never>>;
    private pool: Pool;

    $onInit() {
        this.pool = new Pool({
            connectionString: 'postgresql://postgres:password@localhost:5432/postgres',
        });

        this.db = drizzle(this.pool);
        console.log("Drizzle ORM connected to the database.");
    }

    $onDestroy() {
        this.pool.end();
    }
}

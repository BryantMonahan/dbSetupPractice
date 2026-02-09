import { pgTable, serial, text } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
    userId: serial().primaryKey(),
    username: text().notNull(),
    password: text().notNull()
})
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

//salas ondem serão feitas as perguntas
export const rooms = pgTable('rooms', {
  //o banco de dados vai gerar o id de forma aleatória
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  description: text(),
  createAt: timestamp().defaultNow().notNull(),
});

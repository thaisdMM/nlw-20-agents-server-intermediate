import { pgTable, text, timestamp, uuid, vector } from 'drizzle-orm/pg-core'
import { rooms } from './rooms.ts'

//salas ondem serão feitas as perguntas
export const audioChunks = pgTable('audio_chunks', {
  //o banco de dados vai gerar o id de forma aleatória
  id: uuid().primaryKey().defaultRandom(),
  roomId: uuid()
    .references(() => rooms.id)
    .notNull(),
  transcription: text().notNull(),
  //embeddings: representação semantica do áudio, não é literal é semântico
  embeddings: vector({ dimensions: 768 }).notNull(),
  createdAt: timestamp().defaultNow().notNull(),
})

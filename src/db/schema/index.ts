import { audioChunks } from './audio-chunks.ts'
import { questions } from './questions.ts'
import { rooms } from './rooms.ts'

// Barrel File - arquivo que reexporta todos os arquivos que tem aqui dentro
export const schema = {
  rooms,
  questions,
  audioChunks,
}

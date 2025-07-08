import postgres from 'postgres';
import { env } from '../env.ts';

export const sql = postgres(env.DATABASE_URL);

// para mostrar que o código estava batendo no banco de dados antes de criar tabelas
const result = await sql`SELECT 'Hello' as message`;
console.log(result);

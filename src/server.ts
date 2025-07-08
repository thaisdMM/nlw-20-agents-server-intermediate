import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { env } from './env.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  // se o meu front-end não rodar nesse localhost colocar *
  origin: 'http://localhost:5173',
});
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

// garantir que rode na porta 3333 - geralmente todo servidor backend tem a rota abaixo
app.get('/health', () => {
  return 'OK';
});

app.listen({ port: env.PORT });

// rota para criar salas
import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { z } from 'zod/v4'
import { transcribeAudio } from '../../services/gimini.ts'

export const uploadAudioRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    '/rooms/:roomId/audio',
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = request.params
      const audio = await request.file()

      if (!audio) {
        throw new Error('Audio is required.')
      }
      // como o arquivo é pequeno vai acumular até finalizar
      const audioBuffer = await audio.toBuffer()
      // agora sim vai converter o arquivo
      const audioAsBase64 = audioBuffer.toString('base64')

      const transcription = await transcribeAudio(audioAsBase64, audio.mimetype)
      return transcription
    }
  )
}

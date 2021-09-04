export const showUserPath = {
  get: {
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: ['Rotas'],
    summary: 'API para buscar o usúario logado',
    description: 'Essa rota precisa **estar autenticado**',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/userShow',
            },
          },
        },
      },
      400: {
        $ref: '#/components/badRequest',
      },
      401: {
        $ref: '#/components/unauthorized',
      },
      404: {
        $ref: '#/components/notFound',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
};

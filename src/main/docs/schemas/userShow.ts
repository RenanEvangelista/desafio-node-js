export const userShow = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    telephones: {
      type: 'array',
      items: {
        $ref: '#/schemas/userTelephone',
      },
    },
    created_at: {
      type: 'string',
      format: 'date-time',
    },
    modified_at: {
      type: 'string',
      format: 'date-time',
    },
  },
};

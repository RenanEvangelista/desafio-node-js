export const createAccountParams = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    telephones: {
      type: 'array',
      items: {
        $ref: '#/schemas/userTelephone',
      },
    },
  },
  required: ['email', 'password'],
};

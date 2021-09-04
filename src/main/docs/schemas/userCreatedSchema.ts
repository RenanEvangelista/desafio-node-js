export const userCreated = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    created_at: {
      type: 'string',
      format: 'date',
    },
    modified_at: {
      type: 'string',
      format: 'date-time',
    },
  },
};

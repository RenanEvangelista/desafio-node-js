import paths from './paths';
import components from './components';
import schemas from './schemas';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Api Desafio NodeJs',
    version: '1.0.0',
    contact: {
      name: 'Renã Evangelista',
      email: 'contato@renanevangelistamoraes.com',
    },
  },
  servers: [
    {
      url: '/api',
      description: 'Servidor Principal',
    },
  ],
  tags: [
    {
      name: 'Rotas',
      description: 'Todas rotas relacionada a Api',
    },
  ],
  paths,
  schemas,
  components,
  security: {
    basicAuth: [],
  },
};

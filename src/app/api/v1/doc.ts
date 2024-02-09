import { withSwagger } from 'next-swagger-doc';

const swaggerHandler = withSwagger({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'The Bible API',
      version: '0.1.0',
    },
  },
  apiFolder: 'pages/api/v1',
});
export default swaggerHandler();
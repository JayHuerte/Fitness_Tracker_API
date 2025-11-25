const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Your API Documentation",
      version: "1.0.0",
      description: "API documentation for your project",
    },
    servers: [
  {
    url: "http://localhost:3000",
    description: "Development server"
  },
  {
    url: "https://fitness-tracker-api-orcin.vercel.app/",
    description: "Production server"
  },
],
  },

  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

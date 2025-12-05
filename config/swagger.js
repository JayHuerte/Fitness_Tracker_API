const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Fitness Tracker API",
      version: "1.0.0",
      description: "API documentation for fitness tracker",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server"
      },
      {
        url: process.env.VERCEL_URL 
          ? `https://${process.env.VERCEL_URL}`
          : "https://fitness-tracker-api-orcin.vercel.app",
        description: "Production server"
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
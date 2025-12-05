const swaggerJSDoc = require("swagger-jsdoc");

const getSwaggerSpec = (req) => {
  // Determine the server URL based on environment
  let serverUrl;
  if (req) {
    // Use the request's origin for dynamic detection
    serverUrl = `${req.protocol}://${req.get('host')}`;
  } else {
    // Fallback for non-request contexts
    serverUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";
  }

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
          url: serverUrl,
          description: process.env.VERCEL_URL ? "Production server" : "Development server"
        },
      ],
    },
    apis: ["./routes/*.js"],
  };

  return swaggerJSDoc(options);
};

module.exports = getSwaggerSpec;
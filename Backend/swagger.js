const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "User Management",
            version: "1.0.0",
            description: "API documentation for authflow project",
        },

        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",  // Optionally specify JWT as the format
                },
            },
        },

        security: [
            {
                bearerAuth: [],  // This enforces bearer authentication for all routes
            },
        ],

        servers: [
            {
                url: "https://authflow-backend-l73i.onrender.com",  
                description: "Local Server",
            },
        ],
    },
    apis: ["./routes/*.js"], 
}; 

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("Swagger Docs available at https://authflow-backend-l73i.onrender.com/api-docs");
};

module.exports = swaggerDocs; 

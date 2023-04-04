import swaggerAutogen from "swagger-autogen";

const outputFile = "./config/swagger.json";
const endpointsFiles = ["./src/router/router.ts"];

const swagger = swaggerAutogen({ language: "pt-BR" });

const doc = {
    info: {
        version: "1.0.0",
        title: "API de Store",
        language: "pt-BR",
        description: "Documentação da API de Store gerada automaticamente pelo <b>Swagger-Autogen</b>",
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
        {
            name: "Product",
            description: "Endpoints para gerenciar produtos",
        },
    ],
    definitions: {
        Product: {
            id: "2aef4c18-aa1f-40f0-8e07-3d0faadca799",
            name: "Tênis Mizuno Wave Titan 2",
            price: 227.99,
            category: {
                id: "c0ff9a32-c444-4d28-a0e0-f1dedadfd619",
                name: "Tênis",
            },
            createdAt: "2023-03-30T12:41:16.775Z",
            updatedAt: "2023-03-30T12:41:16.775Z",
        },
        AddProduct: {
            name: "Tênis Mizuno Wave Titan 2",
            price: 227.99,
            category: "c0ff9a32-c444-4d28-a0e0-f1dedadfd619",
        },
        ProductValidator: {
            errors: ["[name] - type is required", "[price] - type is required", "[category] - type is required"],
            status: 422,
        },
    },
};

swagger(outputFile, endpointsFiles, doc);

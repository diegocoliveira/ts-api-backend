import { Request, Response } from "express";
import ProductService from "../services/product-service";

export default class ProductController {
    service = new ProductService();

    async insert(req: Request, res: Response) {
        /*
            #swagger.tags = ["Product"];
            #swagger.description = "Endpoint para inserir um produto";

            #swagger.parameters[] = {
                in: "body",
                description: "Dados do produto",
                schema: { $ref: "#/definitions/AddProduct" }
            }

            #swagger.responses[201] = { schema: { data: {$ref: "#/definitions/Product"}, status:201 } }
            #swagger.responses[422] = {schema: {$ref: "#/definitions/ProductValidator"} }
            #swagger.responses[500] = { schema: { errors: ["aconteceu um erro interno"], status:500 } }

        */
        try {
            const errors: string[] = (req.query.errors as string[]) || [];

            if (errors.length > 0) {
                return res.status(422).json({ errors });
            }
            const result = await this.service.insert(req.body);
            return res.status(result.status || 500).json(result);
            //return res.status(200).json({ data: req.body });
        } catch (error: any) {
            console.log("Erro ao inserir o produto", error.message);
            return res.status(500).json({ errors: [error.message] });
        }
    }

    async list(req: Request, res: Response) {
        /*
            #swagger.tags = ["Product"];
            #swagger.description = "Rota para listar os produtos";

            #swagger.responses[200] = { schema: { data: [{$ref: "#/definitions/Product"}], status:200 } }
            #swagger.responses[500] = { schema: { errors: ["aconteceu um erro interno"], status:500 } }
        */
        try {
            const result = await this.service.list();
            return res.status(result.status || 500).json(result);
        } catch (error: any) {
            console.log("Erro ao listar os produtos", error.message);
            return res.status(500).json({ errors: [error.message] });
        }
    }
}

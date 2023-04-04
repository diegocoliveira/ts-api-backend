import dotenv from "dotenv";
import Express from "express";
import Router from "./router/router";
import swaggerUi from "swagger-ui-express";


dotenv.config({ path: "./config/.env" });

const port = process.env.PORT || 8000;

const app = Express();
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

const swaggerDocument = require("../config/swagger.json");
const options = {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "Store API",
    customfavIcon: "/assets/favicon.ico",

};

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

const router = new Router();
app.use(router.get());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

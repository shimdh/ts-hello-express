import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";

class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware() {
        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes() {
        const router = express.Router();
        router.get("/", (req, res, next) => {
            res.json({
                message: "Hello World!",
            });
        });
        this.express.use("/", router);
    }

}

export default new App().express;

import * as express from "express";
import * as path from "path";

export class Server {

    public static bootstrap(): Server {
        return new Server();
    }

    public app: express.Application;

    constructor() {
        this.app = express();

        this.config();

        this.routes();

        this.api();
    }

    public api() {
        // empty
    }

    public config() {
        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            err.status = 404;
            next(err);
        });
    }

    public routes() {
        // empty
    }
}

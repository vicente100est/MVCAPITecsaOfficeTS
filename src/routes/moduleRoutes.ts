import { Router } from "express";
import moduleController from '../controllers/moduleController';

class ModuleRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', moduleController.lst );
        this.router.get('/:id', moduleController.getOne );
        this.router.post('/', moduleController.create );
        this.router.delete('/:id', moduleController.delete );
        this.router.put('/:id', moduleController.update );
    }
}

const modulesRouter = new ModuleRoutes();
export default modulesRouter.router;
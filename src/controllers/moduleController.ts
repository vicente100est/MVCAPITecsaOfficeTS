import { Request, Response } from 'express';
import pool from '../database';

class ModuleController {

    public lst (req: Request, res: Response){
        res.json({text: 'Listing all modules'});
    }

    public getOne (req: Request, res: Response){
        res.json({text: 'Getting module ' + req.params.id});
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO module SET ?', [req.body]);
        //        console.log(req.body);
        res.json({message: 'Module saved'});
    }

    public delete(req: Request, res: Response){
        res.json({text: 'Deleting a module ' + req.params.id});
    }

    public update(req: Request, res: Response){
        res.json({text: 'Updating a module ' + req.params.id});
    }
}

export const moduleController = new ModuleController();
export default moduleController;
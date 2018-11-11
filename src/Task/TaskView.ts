import ITask from "./ITask";
import TaskModel from "./TaskModel";
import {Request} from "express";
import { strict } from "assert";

class TaskView{
    model:TaskModel = new TaskModel();
    getAll():ITask[]{
        return this.model.getAll();
    }

    add(_req:Request):void{
        let title: string = _req.body.title;
        let description: string = _req.body.description; 
        this.model.add(title, description);
    }
}

export default TaskView;
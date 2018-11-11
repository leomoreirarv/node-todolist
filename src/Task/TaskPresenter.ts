import ITask from "./ITask";
import TaskView from "./TaskView";
import {Request} from "express";

class TaskPresenter{
    view:TaskView = new TaskView();
    getAll():ITask[]{
        return this.view.getAll();
    }

   add(_req:Request):void{
        this.view.add(_req);
   }
}

export default TaskPresenter;
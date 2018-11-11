import ITask from "./ITask";
import Task from "./Task";

class TaskModel{
    //at moment I'm storaging tasks only in memmory
    public listOfTasks:ITask[] = new Array();
    getAll():ITask[]{
        return this.listOfTasks;
    }

   add(_title: string, _description: string):void{
        this.listOfTasks.push(new Task(_title, _description));
   }
}

export default TaskModel;
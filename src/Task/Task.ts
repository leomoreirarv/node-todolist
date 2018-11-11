import ITask from "./ITask";
import { Guid } from "guid-typescript";

class Task implements ITask{
    title:string;
    description:string;
    guid: string;
    order:number;
    constructor(_title: string, _description: string){
        this.title = _title;
        this.description = _description;
        this.guid = Guid.raw();
        this.order = 0;
    }
}

export default Task;
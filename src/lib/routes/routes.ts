import {Request, Response, Application} from "express";
import TaskPresenter from "../../Task/TaskPresenter";

export class Routes{
    presenter:TaskPresenter = new TaskPresenter();
    public routes(app:Application):void{
        app.route("/")
            .get((req: Request, res: Response) => {
                res
                    .status(200)
                    .send(this.presenter.getAll());
            });

        app.route("/add")
            .put((req: Request, res: Response) => {
                res
                    .status(200)
                    .send(this.presenter.add(req));
            });
    }
}

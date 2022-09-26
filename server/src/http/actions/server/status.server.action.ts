import { Response, Request } from "express";

export default new class StatusServerAction {
    async run(_req: Request, res: Response) {
        return res.status(200).json({ message: "Server active" });
    }
}
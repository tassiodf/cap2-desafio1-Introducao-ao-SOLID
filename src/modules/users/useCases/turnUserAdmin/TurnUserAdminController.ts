import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
    constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

    handle(request: Request, response: Response): Response {
        try {
            const { user_id } = request.params;
            const ret = this.turnUserAdminUseCase.execute({ user_id });
            return response.json(ret);
        } catch (e) {
            return response.status(404).json({ error: e.message });
        }
    }
}

export { TurnUserAdminController };

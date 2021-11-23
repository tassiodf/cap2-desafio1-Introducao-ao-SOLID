import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(request: Request, response: Response): Response {
        try {
            const { name, email } = request.body;
            const ret = this.createUserUseCase.execute({ name, email });
            return response.status(201).json(ret);
        } catch (e) {
            return response
                .status(400)
                .json({ error: "User whith this email already existing" });
        }
    }
}

export { CreateUserController };

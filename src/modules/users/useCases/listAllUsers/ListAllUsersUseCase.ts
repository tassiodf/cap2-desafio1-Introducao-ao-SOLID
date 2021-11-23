import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user_id: any;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const userAdmin = this.usersRepository.findById(user_id);

        if (!userAdmin) throw new Error("User not found");
        if (userAdmin.admin !== true) {
            throw new Error("User not admin");
        } else {
            const usuarios = this.usersRepository.list();
            return usuarios;
        }
    }
}

export { ListAllUsersUseCase, IRequest };

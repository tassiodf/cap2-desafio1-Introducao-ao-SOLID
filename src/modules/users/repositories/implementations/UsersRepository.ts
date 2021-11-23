import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private users: User[];

    private static INSTANCE: UsersRepository;

    private constructor() {
        this.users = [];
    }

    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }

        return UsersRepository.INSTANCE;
    }

    create({ name, email }: ICreateUserDTO): User {
        const user = new User();

        Object.assign(user, {
            name,
            admin: false,
            email,
            created_at: new Date(),
            updated_at: new Date(),
        });

        this.users.push(user);
        return user;
    }

    findById(id: string): User | undefined {
        const userId = this.users.find((user) => user.id === id);
        return userId;
    }

    findByEmail(email: string): User | undefined {
        const userEmail = this.users.find((user) => user.email === email);
        return userEmail;
    }

    turnAdmin(receivedUser: User): User {
        // eslint-disable-next-line no-param-reassign
        receivedUser.admin = true;
        // eslint-disable-next-line no-param-reassign
        receivedUser.updated_at = new Date();

        return receivedUser;
    }

    list(): User[] {
        return this.users;
    }
}

export { UsersRepository };

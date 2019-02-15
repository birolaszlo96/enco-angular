import { Role } from './role.model';

export interface IUserModel {
    username: string;
    roles: Role[];
}

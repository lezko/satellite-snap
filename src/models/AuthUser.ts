import {User} from 'models/User';

export interface AuthUser extends User {
    token: string;
}
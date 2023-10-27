export enum UserRole {
    User = 'USER',
    Admin = 'ADMIN'
}

export interface User {
    id: number;
    login: string;
    role: UserRole;
}

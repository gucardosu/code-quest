export interface User {
    id: number;
    name: string;
    email: string;
    password_hash: string;
    created_at: Date;
    update_at: Date;
}

export interface CreateUserDTD {
    name: string;
    email: string;
    password: string;
}
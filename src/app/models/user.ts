export class User {
    id: number;
    name: string;
    role: string;
    token: string;

    constructor( id: number, name: string, role: string, token: string) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.token = token;
    }
}
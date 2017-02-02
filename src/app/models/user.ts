export type Role = 'admin' | 'staff' | 'parent' | 'SECS';

export class User {
    id: number;
    name: string;
    role: Role;
    token: string;
    institutionShortCode: string;
    constructor(id: number, name: string, role: Role, token: string, institutionShortCode: string) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.token = token;
        this.institutionShortCode = institutionShortCode;
    }
}

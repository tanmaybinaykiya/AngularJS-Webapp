export class Class {

    constructor(
        public name: string,
        public teacherIds: string[],
        public fullCapacity: number,
        public currentUsage: number) { }
}

export class AddClassRequest {
    constructor(
        public name: string,
        public teacherIds: string[],
        public fullCapacity: number
    ) { }
}

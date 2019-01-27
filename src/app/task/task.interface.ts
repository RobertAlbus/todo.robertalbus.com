export class Task {
    public name: string;
    public description: string;
    public completed: boolean;
    public taskId: number;

    constructor(name: string, description: string, completed: boolean = false) {
        this.name           = name;
        this.description    = description;
        this.completed      = completed;
    }
}

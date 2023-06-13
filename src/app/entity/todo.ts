export class todo {
  id: number;
  title: string;
  done: boolean;
  dueDate: number;
  priority:number;
  description:string;

  constructor(id: number, titel: string, done: boolean) {
    this.id = id;
    this.title = titel;
    this.done = done;
    this.priority = 1;
    this.dueDate = Date.now();
    this.description="Ich komme vom Frontend"
  }
}

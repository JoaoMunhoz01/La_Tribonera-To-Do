class Task {
  name: string;
  done: boolean;
  id: number; // TODO: ID gerado pelo banco

  static currentId = 0;

  constructor(name: string) {
    this.name = name;
    this.done = false;
    this.id = Task.currentId++;
  }
};

export default Task;

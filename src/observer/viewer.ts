import { IObservable } from "./observable";
import { IObserver } from "./observer";

export class Viewer implements IObserver {
  private exercise: IObservable | null = null;
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(): void {
    if(this.exercise?.getExercise() == ''){
      return;
    }
      
    if (this.exercise) {
      console.log(`${this.getName()} also did ${this.exercise.getExercise()} exercise`);
    }
  }

  setExercise(exercise: IObservable): void {
    this.exercise = exercise;
  }
  
  getName(): string {
    return this.name;
  }
}

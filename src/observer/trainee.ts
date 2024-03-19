import { IObservable } from "./observable";
import { IObserver } from "./observer";

export class Trainee implements IObservable {
  private observerList: IObserver[] = [];
  private exercise: string = '';

  subscribe(observer: IObserver): void {
    console.log('New viewer has joined the class')
    this.observerList.push(observer);
    observer.setExercise(this);
  }

  unsubscribe(observer: IObserver): void {
    const index = this.observerList.indexOf(observer);
    if (index !== -1) {
      console.log(`Viewer ${index} logged off`);
      this.observerList.splice(index, 1);
      observer.setExercise(null);
    }
  }

  notifyObservers(): void {
    this.observerList.forEach(observer => {
      observer.update();
    });
  }

  getExercise(): string {
    return this.exercise;
  }
  
  setExercise(exercise: string): void {
    if(exercise == ''){
      return;
    }
    console.log(`Trainee did ${exercise} exercise`);
    this.exercise = exercise;
    this.notifyObservers();
  }
}

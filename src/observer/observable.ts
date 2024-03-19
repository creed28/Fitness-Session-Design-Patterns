import { IObserver } from "./observer";

export interface IObservable {
  subscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  notifyObservers(): void;
  getExercise(): string;
}

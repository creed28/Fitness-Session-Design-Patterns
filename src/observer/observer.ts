import { IObservable } from "./observable";

export interface IObserver {
  update(): void;
  setExercise(exercise: IObservable | null): void;
}

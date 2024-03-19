import { ICommand } from './command';
import { Exercise } from './exercise';

export class LayDown implements ICommand {
  private exercise: Exercise;

  constructor(position: Exercise) {
    this.exercise = position;
  }

  execute(): string {
    return this.exercise.layDown();
  }
  
  undo(): string {
    return this.exercise.standUp();
  }
}

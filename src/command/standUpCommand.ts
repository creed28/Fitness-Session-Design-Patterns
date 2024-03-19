import { ICommand } from './command';
import { Exercise } from './exercise';

export class StandUp implements ICommand {
    private exercise: Exercise;

    constructor(position: Exercise) {
        this.exercise = position;
    }

    execute(): string {
        return this.exercise.standUp();
    }

    undo(): string {
       return this.exercise.layDown();
    }
}

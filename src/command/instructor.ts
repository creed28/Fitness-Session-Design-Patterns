import { ICommand } from './command';

export class Instructor {
    private exercise: ICommand | null = null;

    setCommand(exercise: ICommand): void {
        this.exercise = exercise;
    }

    do(): string {
        if (!this.exercise) {
            return '';  
        }
        return this.exercise.execute();
    }

    undo(): string {
        if (!this.exercise) {
            return '';
        }
        return this.exercise.undo();
    }
}

import { ICommand } from "./command/command";
import { Instructor } from "./command/instructor";
import { LayDown } from "./command/layDownCommand";
import { Exercise } from "./command/exercise";
import { StandUp } from "./command/standUpCommand";
import { Trainee } from "./observer/trainee";
import { Viewer } from "./observer/viewer";

const exercise: Exercise = new Exercise();

const standUp: ICommand = new StandUp(exercise);
const layDown: ICommand = new LayDown(exercise);

const instructor: Instructor = new Instructor();

const trainee: Trainee = new Trainee();

const viewer1: Viewer = new Viewer("Viewer1");
const viewer2: Viewer = new Viewer("Viewer2");
const viewer3: Viewer = new Viewer("Viewer3");

trainee.subscribe(viewer1);
trainee.subscribe(viewer2);
trainee.subscribe(viewer3);

trainee.setExercise(instructor.do());

instructor.setCommand(standUp);
trainee.setExercise(instructor.do());
trainee.setExercise(instructor.undo());

instructor.setCommand(layDown);
trainee.setExercise(instructor.undo());
trainee.setExercise(instructor.do());

trainee.unsubscribe(viewer3);

trainee.setExercise(instructor.do());
trainee.setExercise(instructor.undo());

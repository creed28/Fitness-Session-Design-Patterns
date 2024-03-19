export class Exercise {
  private standingUp: boolean;   
   
  constructor() {
    this.standingUp = true;
  }   

  standUp(): string {
    this.standingUp = true;
    console.log('Instructor said to stand up');
    return ("stand up");
  }  

  layDown(): string {
    this.standingUp = false;
    console.log('Instructor said to lay down');
    return ("lay down");
  }
}

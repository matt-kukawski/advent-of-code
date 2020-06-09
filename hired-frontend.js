// const solution = (...messages) => {
//     class Emitter {
//       constructor() {
//         this.messages = messages;
//         this.event = () => {};
//       }
  
//       setEvent(fn) {
//         this.event = fn;
//       }
  
//       trigger() {
//         // console.log(this.messages)
//         this.messages.forEach(message => 
//             // console.log(message)
//             this.event(message)
//         );
//       }
//     }
  
//     class Receiver {
//       constructor() {
//         this.messages = [messages];
//       }
  
//       ping(message) {
//         // console.log('receiver: ',message)
//         this.messages.push(message);
//         // console.log('reveiver: ', messages)
//       }
//     }
  
//     const myEmitter = new Emitter(messages);
//     const myReceiver = new Receiver();
  
//     myEmitter.setEvent(myReceiver.ping);
//     myEmitter.trigger();
  
//     return myReceiver.messages;
//   };

//   console.log(solution("A", "B", "C")) // ["A", "B", "C"]

// const solution = (pot) => {
//     const zeros = {};

//     var indices = [];
//     for(var i=0; i<pot.length;i++) {
//         for(var j=0; j<pot[i].length;j++) {
//             if (pot[i][j] === 0) indices.push(i);
//         }
//     }

//     for (let i=0; i < pot.length; i++) {
//         console.log(`row ${i}: ${pot[i]}`);
//         console.log(pot[i].indexOf(0));
//     } 
// };

function MazeSolver(maze) {

    this.maze = maze;

    this.traverse = function(column, row) {
        if(this.maze[column][row] == 2) {
            console.log("We solved the maze at (" + column + ", " + row + ")");
        } else if(this.maze[column][row] == 0) {
            console.log("At valid position (" + column + ", " + row + ")");
            // this.maze[column][row] = 9;
            if(column < this.maze.length - 1) {
                this.traverse(column + 1, row);
            }
            if(row < this.maze[column].length - 1) {
                this.traverse(column, row + 1);
            }
            if(column > 0) {
                this.traverse(column - 1, row);
            }
            if(row > 0) {
                this.traverse(column, row - 1);
            }
        }
    };

};

const input = [
    [0,1,1,1,1],
    [0,1,0,0,0],
    [0,0,0,1,0],
    [1,1,1,1,0],
    [1,0,0,1,2]
];

MazeSolver(input);
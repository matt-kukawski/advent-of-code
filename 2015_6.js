var input=document.body.textContent.split('\n').filter(function(l){return l.length>0});

function parseCommand(text) {
    var parsed = text.match(/(.*) (\d+),(\d+) through (\d+),(\d+)/);
    return { 
      action : parsed[1], 
      start : {x:Math.min(parsed[2],parsed[4]), y:Math.min(parsed[3],parsed[5])}, 
      end : {x:Math.max(parsed[2],parsed[4]), y:Math.max(parsed[3],parsed[5])} }
  }

// Part 1
  function applyCommand(grid, command) {
    for( var x=command.start.x; x<=command.end.x; x++ ) {
      for( var y=command.start.y; y<=command.end.y; y++ ) {
        if (grid[x] == undefined) grid[x] = [];
        if (grid[x][y] == undefined) grid[x][y] = false;
        switch(command.action) {
          case "turn on":
            grid[x][y] = true;
            break;
          case "turn off":
            grid[x][y] = false;
            break;
          case "toggle":
            grid[x][y] = !grid[x][y];
            break;
        }
      }
    }
    
    return grid;
  }
  
//   input
//   .map(parseCommand)
//   .reduce(applyCommand, [])
//   .reduce(function(count,row){
//     return count + row.filter(function(l){return l}).length
//   },0);

// Part 2
  function applyCommand2(grid, command) {
    for( var x=command.start.x; x<=command.end.x; x++ ) {
      for( var y=command.start.y; y<=command.end.y; y++ ) {
        if (grid[x] == undefined) grid[x] = [];
        if (grid[x][y] == undefined) grid[x][y] = 0;
        switch(command.action) {
          case "turn on":
            grid[x][y] += 1;
            break;
          case "turn off":
            if( grid[x][y] > 0) grid[x][y] -= 1;
            break;
          case "toggle":
            grid[x][y] += 2;
            break;
        }
      }
    }
    
    return grid;
  }
  
  input
  .map(parseCommand)
  .reduce(applyCommand2, [])
  .reduce(function(intensity,row){
    return intensity + row.reduce(function(intensity,col){
      return intensity + col
    },0)
  },0);
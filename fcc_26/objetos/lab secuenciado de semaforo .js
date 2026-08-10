const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

let runSequence = (config, cycles) => {
  // config es un objecto configurable
  // cycles son las iteraciones maximas
  for (let i = 0; i < cycles; i++) {
    if (!config.phases) {
      console.log("No phases found");
      break      
    } else if (config.fault) {
      console.log("Faulted phase!");
      break
    } else if (config.phases[i].duration <= 0) {
      console.log("Invalid phase detected");
    } else {
      for (let j = 0; j < config.phases.length; j++) {
        console.log(`Switching to ${config.phases[j].color} for ${config.phases[j].duration} s`);        
      }
    }
  }
}

let generateTimeline = (config, cycles) => {
  let arr = []
  let acumulation = 0
  for (let i = 0; i < cycles; i++) {
    for (let j = 0; j < config.phases.length; j++) {
      acumulation += config.phases[j].duration
      arr.push(acumulation)
    }    
  }
  return arr
}

runSequence(config4, 5)
runSequence(config1, 1)

console.log(generateTimeline(config2, 2));

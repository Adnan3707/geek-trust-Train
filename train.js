const { Station_trainA, Station_trainB } = require('./data');

const STATION_AFTER_HYD_TRAIN_A = 1200; // Rename Station_After_HYD_Train_A for better readability
const STATION_AFTER_HYD_TRAIN_B = 2000; // Rename Station_After_HYD_Train_B for better readability

module.exports = class VehicleTrain {
  constructor(data) {
    this.data = data;
    this.outputTrainA = ['TRAIN_A', 'ENGINE']; // Rename output_train_A to outputTrainA for camelCase consistency
    this.outputTrainB = ['TRAIN_B', 'ENGINE']; // Rename output_train_B to outputTrainB for camelCase consistency
    this.arrivalA = [];
    this.arrivalB = [];
  }

  arrivalTrainA(details) {
    let bogies = details.replace(/\s{2}/, '').split(' ').filter((element) => !this.outputTrainA.some((output) => element === output));

    for (let i = 0; i < bogies.length; i++) {
      // Check if the bogie is eligible for arrival at Station A based on conditions
      if (
        (Station_trainA.hasOwnProperty(bogies[i]) && Station_trainA[bogies[i]] >= STATION_AFTER_HYD_TRAIN_A) ||
        (Station_trainB.hasOwnProperty(bogies[i]) && Station_trainB[bogies[i]] >= STATION_AFTER_HYD_TRAIN_B)
      ) {
        this.arrivalA.push(bogies[i]);
      }
    }

    console.log('ARRIVAL ' + this.outputTrainA.join(' ') + ' ' + this.arrivalA.join(' '));
    return `${this.arrivalA.join(' ')}`;
  }

  arrivalTrainB(details) {
    let bogies = details.replace(/\s{2}/, '').split(' ').filter((element) => !this.outputTrainB.some((output) => element === output));

    for (let i = 0; i < bogies.length; i++) {
      // Check if the bogie is eligible for arrival at Station B based on conditions
      if (
        (Station_trainB.hasOwnProperty(bogies[i]) && Station_trainB[bogies[i]] >= STATION_AFTER_HYD_TRAIN_B) ||
        (Station_trainA.hasOwnProperty(bogies[i]) && Station_trainA[bogies[i]] >= STATION_AFTER_HYD_TRAIN_A)
      ) {
        this.arrivalB.push(bogies[i]);
      }
    }

    console.log('ARRIVAL ' + this.outputTrainB.join(' ') + ' ' + this.arrivalB.join(' '));
    return `${this.arrivalB.join(' ')}`;
  }
};

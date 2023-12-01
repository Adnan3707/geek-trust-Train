const fs = require("fs");
const filename = process.argv[2];
const { Station_trainAB } = require('./data');
const train =  require('./train');
const firstElementIndex = 0;
const removeBogie = 'HYB';

class Vehicles {
    constructor() {
        this.bogieDistanceAB = [];
        this.trainAB = ['DEPARTURE', 'TRAIN_AB', 'ENGINE', 'ENGINE'];
    }

    processData(data) {
        let inputLines = data.split("\n");

        for (let i = 0; i < inputLines.length; i++) {
            const lineParts = inputLines[i].split(' ');
            switch (lineParts[firstElementIndex]) {
                case 'TRAIN_A':
                    Train.arrivalTrainA(inputLines[i]).split(' ').forEach((bogie) => {
                        if (bogie !== removeBogie) {
                            this.bogieDistanceAB.push({ bogiee: bogie, distance: Station_trainAB[bogie] });
                        }
                    });
                    break;
                case 'TRAIN_B':
                    Train.arrivalTrainB(inputLines[i]).split(' ').forEach((bogie) => {
                        if (bogie !== removeBogie) {
                            this.bogieDistanceAB.push({ bogiee: bogie, distance: Station_trainAB[bogie] });
                        }
                    });
                    break;
            }
        }

        this.bogieDistanceAB.sort((a, b) => b.distance - a.distance);
        const journeyStatus = this.bogieDistanceAB.length < 1 ? 'JOURNEY_ENDED' : this.bogieDistanceAB.map((ele) => ele.bogiee).join(' ');
        console.log(`${this.trainAB.join(' ')} ${journeyStatus}`);
    }
}

const vehicles = new Vehicles();
const Train = new train()

try {
    const data = fs.readFileSync(filename, 'utf-8').replace(/\r/g, "");
    vehicles.processData(data);
} catch (err) {
    console.error("Error reading the file:", err);
}

const fs = require("fs")
const filename = process.argv[2]
const {Station_trainA,Station_trainB,Station_trainAB} = require('./data')
const train = require('./train')
const Train = new train ;

const first_element = 0;
const remove_bogie = 'HYB'

class Vehicles {
    constructor(data){
        // this.train_A_bogiee = [ ]
        // this.train_B_bogiee = [ ]
        this.bogiee_distanceAB = []
        this.trainAB = ['DEPARTURE', 'TRAIN_AB', 'ENGINE', 'ENGINE' ]
    }
    main(data){
        let inputLine = data.split("\n")
        // console.log(input[0].split(' ')[0])
        for(let i =0 ;i<inputLine.length;i++){
            switch(inputLine[i].split(' ')[first_element]){
                case 'TRAIN_A':
                    Train.arrivalTrainA(inputLine[i]).forEach((bogi)=>bogi == remove_bogie ? '' :this.bogiee_distanceAB.push({bogiee:bogi,distance:Station_trainAB[bogi]}))
                    break;
                case 'TRAIN_B':
                    Train.arrivalTrainB(inputLine[i]).forEach((bogi)=>bogi == remove_bogie ? '' :this.bogiee_distanceAB.push({bogiee:bogi,distance:Station_trainAB[bogi]}))
                    break;
            }
        }
        this.bogiee_distanceAB.sort((a, b) => b.distance - a.distance);
        this.bogiee_distanceAB.length<1 ? console.log(this.trainAB.join(' ')+' '+'JOURNEY_ENDED') :  console.log(this.trainAB.join(' ')+' '+this.bogiee_distanceAB.map((ele)=>ele.bogiee).join(' '))
       
    //   if(){
    //     switch
    //   }
    //    Train.arrivalTrainA('TRAIN_A ENGINE SLM BLR AGA BLR HYB ITJ BPL').forEach((bogi)=>bogi == 'HYB' ? '' :this.bogiee_distance.push({bogiee:bogi,distance:Station_trainA[bogi]}))
    //     Train.arrivalTrainB('TRAIN_B ENGINE PTA HYB BPL ITJ SRR NJP').forEach((bogi)=>bogi == 'HYB' ? '' :this.bogiee_distance.push({bogiee:bogi,distance:Station_trainB[bogi]}))
    //     this.bogiee_distance.sort((a, b) => b.distance - a.distance);

    //     console.log(this.trainAB.join(' ')+' '+this.bogiee_distance.map((ele)=>ele.bogiee).join(' '))
        
    }
}

let vechiles = new Vehicles() ;


const data = fs.readFileSync(process.argv[2],'utf-8').replace(/\r/g, "")
vechiles.main(data)

// console.log(data)
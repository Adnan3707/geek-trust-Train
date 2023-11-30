// const fs = require('node:fs');
// const {Station_trainA,Station_trainB} = require('./data')
// const train = require('./train')
// const Train = new train ;

// class Vehicles {
//     constructor(data){
//         // this.train_A_bogiee = [ ]
//         // this.train_B_bogiee = [ ]
//         this.bogiee_distance = []
//         this.trainAB = ['DEPARTURE', 'TRAIN_AB', 'ENGINE', 'ENGINE' ]
//     }
//     main(data){

//        Train.arrivalTrainA('TRAIN_A ENGINE SLM BLR AGA BLR HYB ITJ BPL').forEach((bogi)=>bogi == 'HYB' ? '' :this.bogiee_distance.push({bogiee:bogi,distance:Station_trainA[bogi]}))
//         Train.arrivalTrainB('TRAIN_B ENGINE PTA HYB BPL ITJ SRR NJP').forEach((bogi)=>bogi == 'HYB' ? '' :this.bogiee_distance.push({bogiee:bogi,distance:Station_trainB[bogi]}))
//         this.bogiee_distance.sort((a, b) => b.distance - a.distance);

//         console.log(this.trainAB.join(' ')+' '+this.bogiee_distance.map((ele)=>ele.bogiee).join(' '))
        
//     }
// }

// let vechiles = new Vehicles() ;
// let file = process.args[2]
// console.log(file)
// fs.readFileSync()
// // vechiles.main()

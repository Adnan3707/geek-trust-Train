const{Station_trainA,Station_trainB} = require('./data')
const Station_After_HYD_Train_A = 1200;
const Station_After_HYD_Train_B = 2000;
module.exports=class VechileTrain{
    constructor(data){
        this.data = data;
        this.output_train_A =[`TRAIN_A`, `ENGINE`]
        this.output_train_B =[`TRAIN_B`, `ENGINE`]
        this.arrival_A = []
        this.arrival_B = []
    }
    arrivalTrainA(details){
      let bogiee =details.replace(/\s{2}/, '').split(' ').filter((ele1)=>!this.output_train_A.some(ele2 => ele1 === ele2) )
      // console.log(bogiee)
      for(let i=0;i<bogiee.length ; i++){
        // console.log(Station_trainA[bogiee[i]])
        // console.log(bogiee[i])
        if(Station_trainA.hasOwnProperty(bogiee[i]) && Station_trainA[bogiee[i]] >= Station_After_HYD_Train_A || (Station_trainB.hasOwnProperty(bogiee[i]) && Station_trainB[bogiee[i]] >= Station_After_HYD_Train_B )){
            this.arrival_A.push(bogiee[i])
        }
      }
      console.log('ARRIVAL ' + this.output_train_A.join(' ') + ' ' +this.arrival_A.join(' '))
      return this.arrival_A
    }
    arrivalTrainB(details){
      let bogiee =details.replace(/\s{2}/, '').split(' ').filter((ele1)=>!this.output_train_B.some(ele2 => ele1 === ele2) )
      for(let i=0;i<bogiee.length ; i++){
        if(Station_trainB.hasOwnProperty(bogiee[i]) && Station_trainB[bogiee[i]] >= Station_After_HYD_Train_B || (Station_trainA.hasOwnProperty(bogiee[i]) && Station_trainA[bogiee[i]] >= Station_After_HYD_Train_A)){
          // console.log(bogiee[i])
            this.arrival_B.push(bogiee[i])
        }
      }
      console.log('ARRIVAL ' + this.output_train_B.join(' ') + ' ' +this.arrival_B.join(' '))
      return this.arrival_B
    }
}
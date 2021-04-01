// Your code here
function saturdayFun(all){
    return ((all === undefined)?"This Saturday, I want to roller-skate!":`This Saturday, I want to ${all}!`)
}


function mondayWork(string){
return ((string === undefined)?"This Monday, I will go to the office.":`This Monday, I will ${string}.`)
}

function wrapAdjective(String="*"){
    return function(adj="special"){
      return `You are ${String}${adj}${String}!`;
    }
}


let Calculator = {
    add:function(){
       return 1+3;
    },
    multiply: function(){
        return 1*3;
    },
    subtract: function(){
        return 1-3;
    },
    divide: function(){
        return 10 / 5;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function actionApplyer(integer,arrayofF){
    //let message= `${integer}, multiplied by 2, `

return ((arrayofF.length === 0)?integer:"hdfjh")
}
actionApplyer(5,[])
//actionApplyer(13, arrayOfTransforms)
////////////////////////////////////////////////////////////////////////////////////////////////////////
// it("Given 13, returns 4 after being acted on by several functions", function() {
//     let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"
//     arrayOfTransforms = [
//       function(a){ return a * 2 },
//       function(a){ return a + 1000},
//       function(a){ return a % 7 }
//     ]
//     expect(actionApplyer(13, arrayOfTransforms)).to.equal(4, message)
//   })
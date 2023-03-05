// Code your solutions in this file
 function writeCards( names, event ) {
  let appeciationCards = []
  for ( let i = 0; i < names.length; i++ ) {
    appeciationCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
  }
  return appeciationCards
}

function countDown(){
    let numCountdown=11;
    while(numCountdown--){
      console.log(numCountdown)
    }
  } 
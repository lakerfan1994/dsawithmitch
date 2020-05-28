

const smallestAngle = (dateString) => {
  let hour = parseInt(dateString.slice(0,2));
  let minute = parseInt(dateString.slice(3));
  let hourAngle;
  let minuteAngle = minute * 6;
  let answer;
  if(hour == 12){
  	hourAngle = 0;
  }
  else {
  	hourAngle = hour * 30;
  }

  if(hourAngle > minuteAngle){
  	answer = hourAngle - minuteAngle;
  }
  else{
  	answer = minuteAngle - hourAngle;
  }

  if(answer > 180){
  	answer = 360 - answer;
  }
  console.log(answer);	
  return answer;
}

smallestAngle('11:00');


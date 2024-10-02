let user_win = 0;
let cpu_win = 0;

function userInput(input) {
  console.log(input);
  cpu_input = Math.ceil(Math.random()*3);
  console.log(cpu_input);
  const cpuImg = document.getElementById('CPU_img');
  cpuImg.src = `image/${cpu_input}.jpg`;
  const userImg = document.getElementById('user_img');
  userImg.src = `image/${input}.jpg`;
  let result;
  if (input === cpu_input){
    console.log("Draw");
    result = "Draw";
  }
  else if (input === (cpu_input +1) % 3 ){
    user_win += 1;
    console.log("Win");
    result = "Win";
  }
  else { 
    cpu_win +=1;
    console.log("Lose");
    result = "Lose";

  }
  const outcome = document.getElementById('result');
  outcome.innerText = result;
}

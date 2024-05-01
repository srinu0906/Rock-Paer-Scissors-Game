function game(choice)
{
       var rps_choice = ["rock","paper","scissors"];
       var user = choice;
       var computer = rps_choice[Math.floor(Math.random()*4)];
       const paragraph = document.getElementById("result");
       var link ;
       if (computer =='rock')
       {
            link = "https://cdn1.iconfinder.com/data/icons/gesture-21/384/Fist-512.png" 
       }
       else if(computer == 'paper')
       {
            link = "https://cdn2.iconfinder.com/data/icons/hand-gestures-1-1/128/Five-Fingers-Expression-Five-Gesture-Hand-512.png";
       }
       else
       {
            link = "https://cdn2.iconfinder.com/data/icons/hand-gestures-2-1/128/Scissor-Hand-Finger-Gesture-Gesture-Scissors-256.png";
       }
       if (user == computer)
       {
            display_result(0);
       }
       else if ( (user == 'rock' && computer == 'scissors')||(user == 'scissors'&& computer == 'paper')||(user == 'paper'&& computer == 'rock') )
       {
            display_result(1);
       }
       else
       {
            display_result(-1);
       }
       paragraph.src = link;
     }

function display_result( res )
     {
      const para = document.getElementById("display");
      var result;
      if(res == -1)
      {
            result = "Computer won";
      }
      else if(res == 1)
      {
            result = "You won";
      }
      else
      {
            result = "Draw";
      }
      para.textContent= result;
     }
function reset()
    {
      const clear = document.getElementById("result");
      clear.src = "https://th.bing.com/th/id/OIP.H7-Yl9Tv_945VKcsdlUvrAHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
      const clear1 = document.getElementById("display");
      clear1.textContent="Result appears here";
    }
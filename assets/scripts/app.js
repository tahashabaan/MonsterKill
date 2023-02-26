// global varibal

const ATTACK_VAL = 10;
const STRONG_ATTACK_VAL = 17;
const NORSE_VAL = 14;
const HEALTH_VAL = 20;

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL= 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';




let enteredValue =parseInt( prompt('enter maxium value...'));
let maxLife = isNaN(enteredValue) || enteredValue<=0? 
         100: enteredValue;

let currentChoseMonsterHealthBar = maxLife;
let currentChoseplayerHealthBar = maxLife;
let hasBonusLife = true;
let battleLog = [];


 adjustHealthBar(maxLife);

 1
2
3
4
5
6
function foo() {
  var x = 1;
}
 

const writeToLog =(event, value, monsterHealth, playerHealth) =>  {

  let logEntry;

  if(event === LOG_EVENT_PLAYER_ATTACK) {
    logEntry = {
      event,
      value,
      monsterHealth,
      playerHealth
    } 
    battleLog.push(logEntry);
   }


   else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
      logEntry = {
        event,
        value,
        monsterHealth,
        playerHealth
      }
      battleLog.push(logEntry);
    }

      else if (event === LOG_EVENT_MONSTER_ATTACK) {
        logEntry = {
          event,
          value,
          monsterHealth,
          playerHealth
        }
        battleLog.push(logEntry);
       }
        else if (event === LOG_EVENT_PLAYER_HEAL) {
          logEntry = {
            event,
            value,
            monsterHealth,
            playerHealth
          }   
          battleLog.push(logEntry);
        }

          // else if (event === LOG_EVENT_GAME_OVER) {
          //   logEntry = {
          //     event,
          //     value,
          //     monsterHealth,
          //     playerHealth
          //   }

            battleLog.push(logEntry);
  }
 
 

 const reset= () => {
  currentChoseMonsterHealthBar = maxLife;
  currentChoseplayerHealthBar = maxLife;
  resetGame(maxLife);

 }

 const endRound =(attackVal) => {

  let intialPlayerHealth = currentChoseplayerHealthBar;

  const playerDamage = dealPlayerHealthBar(attackVal);
  currentChoseplayerHealthBar -=playerDamage;

  if( currentChoseplayerHealthBar <=0 && hasBonusLife) {

    hasBonusLife=false;
    removeBonusLife();
    currentChoseplayerHealthBar = intialPlayerHealth;
    setPlayerHealth(intialPlayerHealth);
    alert('you would be dead but bonus life saved you!')
  }

  if (currentChoseMonsterHealthBar <=0 && currentChoseplayerHealthBar >0) {
       alert('you win');
  }

  else if (currentChoseMonsterHealthBar >0 && currentChoseplayerHealthBar <=0) {
      alert('you lose');
  }

    else if (currentChoseMonsterHealthBar <=0 && currentChoseplayerHealthBar <=0) {
      alert('you have draw');
    
             }


             if ( currentChoseMonsterHealthBar <=0 || currentChoseplayerHealthBar <=0 ) {
              reset();
             }
 }

 const attackMonstarHandler = (mode) => {

   let attackVal;
  if (mode == 'ATTACK_VAL')  attackVal = ATTACK_VAL;
  else  attackVal = STRONG_ATTACK_VAL;
   

  const damage = dealMonsterHealthBar(attackVal);
  currentChoseMonsterHealthBar -= damage;
   endRound(attackVal);

 }


 const attackHandler = () => {
  attackMonstarHandler('ATTACK_VAL');
}

 const strongAttackHandler = () => {
  attackMonstarHandler('STRONG_ATTACK_VAL')
}




const healPlayerHandler = () => {
  let healthValue = HEALTH_VAL;
  increasePlayerHealthBar(healthValue);

  if(currentChoseplayerHealthBar >= maxLife - HEALTH_VAL ){
    alert("you can't heal to more initial health...");
    healthValue= maxLife - currentChoseplayerHealthBar;
  } else {
    healthValue = HEALTH_VAL
  }
  currentChoseplayerHealthBar += healthValue;
  endRound();
}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
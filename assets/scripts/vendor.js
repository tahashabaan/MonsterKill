const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

const adjustHealthBar = (maxlife) => {
  monsterHealthBar.value = maxlife;
  monsterHealthBar.max = maxlife;
  playerHealthBar.value = maxlife;
  playerHealthBar.max = maxlife;
}

const dealMonsterHealthBar = (damage) => {
   const dealDamege = Math.random() * damage;
  //  console.log(typeof(monsterHealthBar.value))
   monsterHealthBar.value -= dealDamege;
   return dealDamege;
}

const dealPlayerHealthBar = (damage) => {
  const dealDamege = Math.random() * damage;
  playerHealthBar.value -= dealDamege;
  return dealDamege;
}

const increasePlayerHealthBar = (healthLife) => {
      playerHealthBar.value += healthLife;   
  }

  
  const resetGame = (value) => { 
    monsterHealthBar.value=value;
    playerHealthBar.value=value;
  }

  function removeBonusLife() {
    bonusLifeEl.parentNode.removeChild(bonusLifeEl);
  }

  function setPlayerHealth(health) {
    playerHealthBar.value = health;
  }
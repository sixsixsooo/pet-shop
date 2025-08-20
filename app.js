"use strict";

class Stats {
  constructor(hp, baseDamage) {
    this.hp = hp;
    this.baseDamage = baseDamage;
  }

  takeDamage(amount) {
    this.hp -= amount;
    console.log(`take ${amount} dmg`);
  }

  attack(enemy) {
    enemy.takeDamage(this.baseDamage);
    console.log(`attack has take ${this.baseDamage}!`);
  }
}

class Weapon {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
  }
}

class Orc extends Stats {
  constructor() {
    super(250, 50);
    this.weapon = new Weapon("Mace", 50);
  }

  takeDamage(amount) {
    if (Math.random() >= 0.5) {
      console.log("Ork was doged your attack");
    } else {
      super.takeDamage(amount);
    }
    if (this.hp <= 0) {
      this.hp = 0;
      console.log("Orc has defited");
    }
  }

  attack(player) {
    if (this.hp <= 0) {
      console.log("Already dead!!");
      return;
    } else {
      if (Math.random() < 0.2) {
        const superDamage = this.weapon.damage * 2;
        console.log("Orc has taken spec ability!");
        player.takeDamage(superDamage + this.baseDamage);
        console.log(`Damage taken ${superDamage + this.baseDamage}`);
      } else {
        player.takeDamage(this.weapon.damage);
      }
    }
  }
}

class Player extends Stats {
  constructor() {
    super(150, 20);
    this.weapon = null;
  }
  equipWeapon(weapon) {
    this.weapon = weapon;
    console.log(`Plyer equip ${weapon.name}`);
  }

  attackEnemy(enemy) {
    if (this.hp <= 0) {
      console.log("You dead, pls restart!");
      return;
    } else {
      if (this.weapon) {
        if (Math.random() > 0.7) {
          const superAbility = this.baseDamage + 100;
          console.log("proc super abillity!!");
          enemy.takeDamage(superAbility + this.weapon.damage);
          console.log(`You take ${superAbility + this.weapon.damage} damage!`);
        } else {
          enemy.takeDamage(this.baseDamage + this.weapon.damage);
          console.log(
            `You take ${this.baseDamage + this.weapon.damage} damage!`
          );
        }
      }
    }
    if (this.weapon === null) {
      enemy.takeDamage(this.baseDamage);
      console.log(`You take ${this.baseDamage} damage!`);
    }
  }
  takeDamage(amount) {
    if (Math.random() > 0.9) {
      console.log("You has doged attack!!");
    } else {
      super.takeDamage(amount);
    }
    if (this.hp <= 0) {
      this.hp = 0;
      console.log("You die!");
    }
  }
}

const player = new Player();
const orc = new Orc();

player.attack(orc);

player.equipWeapon(new Weapon("Excallibur", 60));
player.attack(orc);

orc.attack(player);

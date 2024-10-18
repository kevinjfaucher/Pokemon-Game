"use strict";
class Pokemon {
    constructor(userName, health) {
        this.userName = userName;
        this.health = health;
    }
    attack(target) {
        console.log(`${this.userName} attacks ${target.userName}!`);
        target.takeDamage(10);
    }
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.userName} takes ${amount} damage! Health is now ${this.health}`);
    }
    roar() {
        console.log(`${this.userName} roars with intensity!!!!!!!`);
    }
}
class FirePokemon extends Pokemon {
    constructor(userName, health, firePower) {
        super(userName, health);
        this.firePower = firePower;
    }
    attack(target) {
        console.log(`${this.userName} breathes fire at ${target.userName}`);
        const damage = 15 + this.firePower;
        target.takeDamage(damage);
    }
    ignite() {
        console.log(`${this.userName} ignites itself, boosting fire power!!!`);
        this.firePower += 5;
    }
}
class WaterPokemon extends Pokemon {
    constructor(userName, health, waterLevel) {
        super(userName, health);
        this.waterLevel = waterLevel;
    }
    attack(target) {
        console.log(`${this.userName} blasts water at ${target.userName}`);
        const damage = 10 + this.waterLevel;
        target.takeDamage(damage);
    }
    heal() {
        console.log(`${this.userName} uses water to heal itself!!!!`);
        this.health += 20;
        console.log(`${this.userName}'s health is now ${this.health}`);
    }
}
const charizard = new FirePokemon('Charizard', 100, 20);
const squirtle = new WaterPokemon('Squirtle', 100, 15);
charizard.attack(squirtle);
squirtle.heal();
squirtle.attack(charizard);
charizard.ignite();
charizard.roar();

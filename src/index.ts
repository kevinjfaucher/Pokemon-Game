class Pokemon {
    userName: string;
    health: number;

    constructor(userName: string, health: number){
        this.userName = userName;
        this.health = health;
    }

    attack(target: Pokemon): void {
        console.log(`${this.userName} attacks ${target.userName}!`)
        target.takeDamage(10);
    }

    takeDamage(amount: number): void {
        this.health -= amount;
        console.log(`${this.userName} takes ${amount} damage! Health is now ${this.health}`);
    }

    roar(): void {
        console.log(`${this.userName} roars with intensity!!!!!!!`);
    }
}

class FirePokemon extends Pokemon {
    firePower: number;

    constructor(userName: string, health: number, firePower: number) {
        super(userName, health);
        this.firePower = firePower;
    }

   attack(target: Pokemon): void {
       console.log(`${this.userName} breathes fire at ${target.userName}`)
       const damage = 15 + this.firePower;
       target.takeDamage(damage);
   }

   ignite(): void {
    console.log(`${this.userName} ignites itself, boosting fire power!!!`);
    this.firePower += 5;
   }

}


class WaterPokemon extends Pokemon {
    waterLevel: number;

    constructor(userName: string, health: number, waterLevel: number){
        super(userName, health);
        this.waterLevel = waterLevel;
    }

    attack(target: Pokemon): void {
        console.log(`${this.userName} blasts water at ${target.userName}`);
        const damage = 10 + this.waterLevel;
        target.takeDamage(damage);
    }

    heal(): void {
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

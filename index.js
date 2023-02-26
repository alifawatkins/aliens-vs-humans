// Create a class Ship
class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    // All ships have the action 'attack'
    attack(enemy) {
        console.log(`${this.name} is attacking!`);
        if (Math.random() < this.accuracy) {
            enemy.hull -= this.firepower
            console.log(`${enemy.name} takes ${this.firepower} damage!`)
        } else {
            console.log(`${this.name} missed!`)
        }
        console.log(`${enemy.name} has ${enemy.hull} hp left.`)
    }
}
// Create Human Ship Subclass
class humanShip extends Ship {
    constructor() {
        super('USS Assembly', 20, 5, 0.7);
    }
    // USS Assembly has the option to retreat after destroying an alien ship]
    retreat() {
        console.log('USS Assembly attempts to retreat')
    }
};
 
// Create Alien Ship Subclass
class alienShip extends Ship {
    constructor(name) {
        super(name)
    }
        hull = Math.floor(Math.random() * 4) + 3;
        firepower = Math.floor(Math.random() * 3) + 2;
        accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }

// Create a game object

class Game {
    static checkWin(ship) {
        if (ship.hull <= 0) {
            console.log(`${ship.name} has been defeated.`)
        } else {
            console.log(`${ship.name} is still in the game.`)
        }
    }

    static playGame(humanPlayer, alienPlayers)
    
}
// Instance(s) of each subclass

const ussAssShip = new humanShip();
console.log(ussAssShip);

const alienShip1 = new alienShip('Iczols');
console.log(alienShip1);

const alienShip2 = new alienShip('Troncins');
console.log(alienShip2);

const alienShip3 = new alienShip('Vrelkods');
console.log(alienShip3);

const alienShip4 = new alienShip('Oncids');
console.log(alienShip4);

const alienShip5 = new alienShip('Bhiegnons');
console.log(alienShip5);

const alienShip6 = new alienShip('Razun');
console.log(alienShip6);

ussAssShip.attack(alienShip1)
Game.checkWin(alienShip1)
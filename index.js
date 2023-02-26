// Assignment Link: https://perscholas.instructure.com/courses/1297/pages/week-5-day-4-lecture-slash-mini-project-slash-sba-save-the-universe?module_item_id=776654

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
        console.log(`${enemy.name} has ${enemy.hull} hp left. ${this.name} has ${this.hull} hp left.`)
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

    static playGame(humanPlayer, alienPlayers) {
        for (let i = 0; i < alienPlayers.length; i++) {
            while (humanPlayer.hull > 0 && alienPlayers[i].hull > 0) {
                humanPlayer.attack(alienPlayers[i]); 
                this.checkWin(alienPlayers[i]);
                if (alienPlayers[i].hull <= 0) {
                    break
                }
                alienPlayers[i].attack(humanPlayer);
                this.checkWin(humanPlayer);
            };
            if (humanPlayer.hull <= 0) {
                alert(`The USS Assembly has been defeated. GAME OVER.`)
                break
            }
            if (i === alienPlayers.length - 1) {
                alert(`USS Assembly has defeated all the aliens. Earth wins!`)
                break
            }
            if(!this.promptPlayer()){
                break
            }

        };
    }

    static promptPlayer () {
        let answer = prompt(`USS Assembly has defeated the alien ship. Do you want to continue to battle or retreat? Yes = Battle No = Retreat`);
        if (answer.toLowerCase() === 'yes') {
            console.log(`Onwards to victory!`)
            return true
        } else if (answer.toLowerCase() === 'no') {
            alert(`USS Assembly has retreated!`)
            return false
        } else {
            alert(`This is a yes or no question. You answered ${answer.toLowerCase()}. How did you not get that? ANSWER YES OR NO.`)
            return this.promptPlayer();
        }
    }
}

// Instance(s) of each subclass
const alienShips = []
const alienName = ['Iczols', 'Troncins', 'Vrelkods', 'Oncids', 'Bhiegnons', 'Razun']

for (let i = 0; i < 6; i++) {
    alienShips.push(new alienShip(alienName[i]));
}
console.log(alienShips);

const ussAssShip = new humanShip();
console.log(ussAssShip);

Game.playGame(ussAssShip,alienShips);
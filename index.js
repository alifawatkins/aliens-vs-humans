// Create a class Ship
class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    // All ships have the action 'attack'
    attack() {
        console.log(`${this.name} is attacking!`);
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
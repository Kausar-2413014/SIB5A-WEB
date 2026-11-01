// Ini Tugas

class Enemy {
    name: string;
    health: number;
    physicalAttack: number;
    magicalAttack: number;
    physicalDefense: number;
    magicalDefense: number;

    constructor(
        name: string,
        health: number,
        physicalAttack: number,
        magicalAttack: number,
        physicalDefense: number,
        magicalDefense: number
    ) {
        this.name = name;
        this.health = health;
        this.physicalAttack = physicalAttack;
        this.magicalAttack = magicalAttack;
        this.physicalDefense = physicalDefense;
        this.magicalDefense = magicalDefense;
    }

    tampilkanStat(): void {
        console.log(`[STAT] ${this.name} | HP: ${this.health} | P.Atk: ${this.physicalAttack} | M.Atk: ${this.magicalAttack} | P.Def: ${this.physicalDefense} | M.Def: ${this.magicalDefense}`);
    }

    serang(): void {
        console.log(`\nAction: ${this.name} menyerang target! (Physical: ${this.physicalAttack} | Magical: ${this.magicalAttack})`);
    }
}



class Minions extends Enemy {
    constructor() {
        super("Basic Minion", 1000, 50, 0, 10, 10);
    }

    
    upgradeHealth(): number {
        this.health += 30;
        console.log(`\nAction: Waktu pertandingan bertambah! Max HP ${this.name} naik menjadi ${this.health}`);
        return this.health;
    }
}

class MinionFighter extends Enemy {
    constructor() {
        super("Minion Fighter", 1500, 100, 0, 40, 20);
    }
}

class MinionArcher extends Enemy {
    constructor() {
        super("Minion Archer", 1000, 150, 0, 20, 20);
    }
}

class MinionMage extends Enemy {
    constructor() {
        super("Minion Mage", 1000, 0, 150, 20, 50);
    }
}

class SuperMinion extends Enemy {
    constructor() {
        super("Super Minion", 3000, 300, 0, 100, 80);
    }
}

class Lord extends Enemy {
    constructor() {
        super("Sanctuary Lord", 50000, 1000, 500, 200, 200);
    }
}

class Turtle extends Enemy {
    constructor() {
        super("Cryoturtle", 25000, 400, 0, 300, 300);
    }
}

class RedDragon extends Enemy {
    constructor() {
        super("Fiend (Red Buff)", 8000, 350, 0, 80, 50);
    }
}

class BlueWolf extends Enemy {
    constructor() {
        super("Serpent (Blue Buff)", 7500, 300, 100, 60, 80);
    }
}



console.log("MEMUAT MONSTER JUNGLE DAN MINION");

const minionFighter = new MinionFighter();
const mageMinion = new MinionMage();
const lord = new Lord();

minionFighter.tampilkanStat();
mageMinion.tampilkanStat();
lord.tampilkanStat();


minionFighter.serang();
mageMinion.serang();
lord.serang();
class NPC {
  name: string;
  health: number;
  speed: number;
  defense: number;
  attack: number;
  npcType: "walk" | "fly";

  constructor(
    name: string,
    health: number,
    speed: number,
    defense: number,
    attack: number,
    npcType: "walk" | "fly"
  ) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.defense = defense;
    this.attack = attack;
    this.npcType = npcType;
  }


  walking(): void {
    this.speed += 2;
    console.log(`${this.name} is walking. Speed is now ${this.speed}`);
  }

  
  attacking(): void {
    this.attack += 2;
    console.log(`${this.name} is attacking. Attack is now ${this.attack}`);
  }

  
  sprint(): void {
    this.speed += 4;
    console.log(`${this.name} is sprinting. Speed is now ${this.speed}`);
  }

  ultimateSkill(): void {
    this.attack += 10;
    console.log(`${this.name} used Ultimate Skill! Attack is now ${this.attack}`);
  }
}
class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }

  print() {
    console.log(`Card ${this.name}, $${this.cost}`);
  }
}

class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);

    this.power = power;
    this.resilience = resilience;
  }

  attack(target) {
    if (target instanceof Unit) {
      // Reduce the target's resilience by this Unit's power.
      target.resilience -= this.power;
      console.log(
        `${this.name} attacked ${target.name} for ${this.power} damage. ${target.name}'s resilience is now ${target.resilience}`
      );
    } else {
      throw new TypeError("Target must be an instance of Unit");
    }
  }
}

class Effect extends Card {
  // An effect will change a stat by a magnitude number.
  constructor(name, cost, magnitude, stat) {
    super(name, cost);

    this.magnitude = magnitude;
    this.stat = stat;
  }

  play(target) {
    if (target instanceof Unit) {
      // implement card text here
      const magnitudeDirection = this.magnitude < 0 ? "lowered" : "raised";
      target[this.stat] += this.magnitude;

      console.log(
        `${this.name} ${magnitudeDirection} ${target.name}'s ${this.stat} by ${
          this.magnitude
        }. ${target.name}'s ${this.stat} is now ${target[this.stat]}.`
      );
    } else {
      throw new TypeError("Target must be a Unit!");
    }
  }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 5);

const hardAlgorithm = new Effect("Hard Algorithm", 2, 3, "resilience");
const unhandledPromiseRejection = new Effect(
  "Unhandled Promise Rejection",
  1,
  -2,
  "resilience"
);
const pairProgramming = new Effect("Pair Programming", 3, 2, "power");

redBeltNinja.attack(blackBeltNinja);
blackBeltNinja.attack(redBeltNinja);

hardAlgorithm.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);

class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  };

  set name(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Неверное имя')
    } else {
      this._name = name;
    }
  };

  get name() {
    return this._name;
  }
}

class Bowerman extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = "Bowerman";
    this.attack = 25;
    this.defence = 25;
  };
};


class Swordsman extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = "Swordsman";
    this.attack = 40;
    this.defence = 10;
  };
};

class Magician extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = "Magician";
    this.attack = 10;
    this.defence = 10;
  };
};

class Daemon extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = "Daemon";
    this.attack = 10;
    this.defence = 40;
  };
};

class Undead extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = "Undead";
    this.attack = 25;
    this.defence = 25;
  };
};

class Zombie extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = "Zombie";
    this.attack = 40;
    this.defence = 10;
  };
}
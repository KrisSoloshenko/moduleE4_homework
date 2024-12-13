class ElectricalDevices{

    constructor(name) {
    this.name = name;
    this.risk = 'может ударить током';
    }

    getPower(amperage) {
        console.log(`Мощность прибора ${amperage * 220} Вт`);
      }

    turnOn () {
        console.log(`Прибор ${this.name} включен в розетку`);
      }
}

class DigitalDevices extends ElectricalDevices {
    constructor(name, memory) {
        super(name);
        this.memory = memory
    }
}

class LightingDevices extends ElectricalDevices { 
    constructor(name, lampType) { 
        super(name);
        this.lampType = lampType
    }
    
    getPosition(location) {
    console.log(`${this.name} установили на ${location}`);
  }  
}

const computer = new DigitalDevices('компьютер', 16);

const tableLamp = new LightingDevices('настольная лампа', 'лампа накаливания');

const hairdryer = new ElectricalDevices('фен');
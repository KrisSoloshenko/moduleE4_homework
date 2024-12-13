function ElectricalDevices(name){
    this.name = name
    this.risk = 'может ударить током'
  }

ElectricalDevices.prototype.getPower = function(amperage){
      console.log(`Мощность прибора ${amperage * 220} Вт`);
    }

ElectricalDevices.prototype.turnOn = function() {
  console.log(`Прибор ${this.name} включен в розетку`);
}


function DigitalDevices(name, memory) {
  this.name = name
  this.memorySize = memory  
}

DigitalDevices.prototype = new ElectricalDevices()


function LightingDevices(name, lampType) {
  this.name = name
  this.lampType = lampType
  this.getPosition = function(location) {
    console.log(`${this.name} установили на ${location}`);
  }  
}

LightingDevices.prototype = new ElectricalDevices()

const computer = new DigitalDevices('компьютер', 16)

const tableLamp = new LightingDevices('настольная лампа', 'лампа накаливания')

const hairdryer = new ElectricalDevices('фен')
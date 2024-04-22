export class Player {
  constructor(name, level) {
    this.name = name
    this.level = level
  }
  subirNivel(){
    return this.name, +" has ascendido al nivel: ", this.level  
  }
  }
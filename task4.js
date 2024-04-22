export class Player {
  constructor(name, level) {
    this.name = name
    this.level = level
  }
  actualNivel(){
    return this.name, +" tu nivel es: ", this.level  
  }
  info(){
    console.log(`${this.name} has reached Level ${this.level}!`)
   }
   levelUp(){
     this.level = this.level +1
   }
  }

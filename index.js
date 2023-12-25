class hero{
    constructor(name, age, tipe, skill){
        this.name = name,
        this.age = age,
        this.tipe = tipe,
        this.skill = skill
    }
    characterInformation(){
        console.log("\n"+`Choice name: ${this.name}, age: ${this.age}, class: ${this.tipe}`)
    }
    chooseClass(){
        console.log(`The hero choosen: ${this.tipe}!`)
    }
    attack(){
        console.log(`The ${this.tipe} attacked using the attack: ${this.skill}!` + "\n\n")
    }
}

//Enter Hero information! and choose the hero: (Mage, Warrior, Monk, Ninja or Archer).
let character = new hero("Zion", 35 ,"Mage!","")
//Insert hero class and Skills: (Mage: Fire Ball/ Warrior: Fatal blow/ Monk: triple punch/ Ninja: shadow strike/ Archer: Flurry of arrow)
let info = new hero("","", "Mage", "Fire ball")

character.characterInformation()
info.chooseClass()
info.attack()
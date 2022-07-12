const tamagotchi = {

    name: 'Egg',
    meal: 1,
    energy: 2,
    mood: 4,

    getStatus : function () {

        let eated = `Еда: Я голоден (${this.meal}), `
        let sleeped = `Энергия: Я хочу спать (${this.energy}), `
        let played = `Настроение: Мне скучно (${this.mood}).`

        if(this.meal > 2){
            eated = ` Еда: Я не голоден (${this.meal}), `
        }

        if(this.energy > 2){
            sleeped = ` Энергия: Я не хочу спать (${this.energy}), `
        }

        if(this.mood > 2){
            gamed = ` Настроение: Мне весело (${this.mood}).`
        }

        if(this.mood < 0 || this.energy < 0 || this.meal < 0){
            return `${this.name} умер :)`
        }

        return `Имя: ${this.name}, ` + eated + sleeped + played
    },

    setName: function (newName) {
        this.name = newName
    },

    goSleep: function () {
        if (this.energy < 5){
            this.energy += 1
            this.meal -= 1
        }
    },

    goPlay: function () {
        if (this.mood < 5){
            this.mood += 1
            this.energy -= 1
        }

    },
    
    goEat: function () {
        if (this.meal < 5) // ?
        this.meal += 1
        this.mood -= 1
    },

}



let kcalc = {
    form: function(){
       return document.getElementById('form')
    },

    gender: function(){
        return this.getSelectValue('gender')
    },

    age: function(){
        return this.getImputNumberValue('age')
    },

    weight: function(){
        return this.getImputNumberValue('weight')
    },

    height: function(){
        return this.getImputNumberValue('height')
    },

    activityLevel: function(){
       return this.getSelectValue('activityLevel')
    },

    getImputNumberValue: function(id){
        return Number(document.getElementById(id).value)
    },

    getSelectValue: function(id){
        return document.getElementById(id).value
    },

    tmb: function(){
       if(this.gender() === 'fem'){
           return Math.round(655 + (9.6 * this.weight()) + (1.8 * this.height()) - (4.7 * this.age()))
       }else{
           return Math.round(66 + (13.7 * this.weight()) + (5 * this.height()) - (6.8 * this.age()))
       }
    },

    maintence: function(){
        return Math.round(this.tmb() * Number(this.activityLevel()))
    },

    loseWeight: function(){
        return this.maintence() - 450
    },

    gainWeight: function(){
        return this.maintence() + 450
    },

    displayCalc: function(event){
        event.preventDefault()
        const result = document.querySelector('.result-content')
        result.innerHTML = `
        <ul>
            <li>Seu metabolismo basal é de <strong>${this.tmb()} calorias.</strong></li>
            <li>Para manter o seu peso você precisa consumir em média <strong>${this.maintence()} calorias.</strong></li>
            <li>Para perder peso você precisa consumir em média <strong>${this.loseWeight()} calorias.</strong></li>
            <li>Para ganhar peso você precisa consumir em média <strong>${this.gainWeight()} calorias.</strong></li>
        </ul>`
    },

}

kcalc.form().addEventListener('submit',(event) => {
    kcalc.displayCalc(event)
})






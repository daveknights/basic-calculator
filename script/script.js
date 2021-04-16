const Calculator = {
    data() {
        return {
            calculation: 0,
            output: 0,
            buttonSet: [
                {id: 'seven', text: 7},
                {id: 'eight', text: 8},
                {id: 'nine', text: 9},
                {id: 'divide', text: '÷'},
                {id: 'multiply', text: 'x'},
                {id: 'four', text: 4},
                {id: 'five', text: 5},
                {id: 'six', text: 6},
                {id: 'subtract', text: '-'},
                {id: 'plus', text: '+'},
                {id: 'one', text: 1},
                {id: 'two', text: 2},
                {id: 'three', text: 3},
                {id: 'zero', text: 0},
                {id: 'decimal', text: '.'},
            ],
            clear: {id: 'clear', text: 'C'},
            equals: {id: 'equals', text: '='},
            keyInputAttempt: false,
        }
    },
    mounted() {
        window.addEventListener('keydown', () => this.keyInputAttempt = true);
    },
    methods: {
        addToCalculation(event) {
            let value = '';

            switch (event.target.value) {
                case '÷':
                    value = '/';
                    break;
                case 'x':
                    value = '*';
                    break;
                default:
                    value = event.target.value;
            }

            if (this.output === 0) {
                this.output = '';
                this.calculation = ';'
            }

            this.output += event.target.value;
            this.calculation += value;
        },
        calculate() {
            this.output = eval(this.calculation);
        },
        clearCalculation() {
            console.log('Clear');
            this.calculation = 0;
            this.output = 0;
        },
        noKeyInput(event) {
            console.log(event.which);
            this.keyInputAttempt = true;
        }
    }
}

const app = Vue.createApp(Calculator)

app.component('output-screen', {
    props: {output: String},
    template: `<output id="output-screen">{{ output }}</output>`
})

app.component('calculator-btn', {
    props: {btn: Object},
    template: `<input type="button" :id="btn.id" class="btn" :value="btn.text">`
})

app.component('error-msg', {
    props: {message: String},
    template: `<p class="error-msg">{{ message }}</p>`
})

app.mount('#calculator')

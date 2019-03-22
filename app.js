
//1)
// scope from 2 to max


let max = 30;

class GetRandomScope {

    constructor(max) {
        let rand = Math.floor(Math.random() * (max - 1)) + 2;
        let rand1 = Math.floor(Math.random() * (rand)) + 1;
        this.rand = rand;
        this.rand1 = rand1;
    }
};

class GetScopeNumbers {

    constructor(min, max) {
        this.getNumbers = [];
        for (let i = min; i <= max; i++) {
            this.getNumbers.push(i);
        }
    }
};

class GetPrimaryNumbers {
    constructor(num) {
        this.getPrimNumbers = [];
        this.getPrimNumbers1 = [];
        num.forEach(n => {
            for (let k = 1; k <= n; k++) {
                if ((n % k) === 0) {
                    this.getPrimNumbers1.push(n);
                };
            }
            if (this.getPrimNumbers1.length > 2 || n === 1) { this.getPrimNumbers1 = []; } else {
                this.getPrimNumbers.push(n);
                this.getPrimNumbers1 = [];
            }
        })
    }
}

let { rand, rand1 } = new GetRandomScope(max);
let { getNumbers } = new GetScopeNumbers(rand1, rand);
let { getPrimNumbers } = new GetPrimaryNumbers(getNumbers);
console.log(...getNumbers);
console.log('liczby pierwsze:', ...getPrimNumbers);

//2)

let [paragraphScope] = document.getElementsByClassName("paragraphScope-checkNumber");
let [paragraph] = document.getElementsByClassName("paragraph-checkNumber");
let [paragraphStep] = document.getElementsByClassName("paragraphStep-checkNumber");
let [button] = document.getElementsByClassName("button-checkNumber");
let [input] = document.getElementsByClassName("input-checkNumber");
input.value = '';
let max2 = 1000;
paragraphScope.innerHTML = "  Scope number:  0  -  " + max2;
let wynik;
let counter = 0;

class GuessingGame extends GetRandomScope {

    constructor(max) {
        let { rand } = super(max);
        this.rand = rand;
        this.value = null;
        this.minWynik = 0;
        this.maxWynik = max2;
    }
}
let guess = new GuessingGame(max2);

class Guessingnumber {

    guesNumber() {
        let { value } = input;
        value = parseInt(value);
        console.log("2)", guess.rand);

        if (value && !isNaN(value) && value !== guess.value) {
            counter++;
            paragraph.style.color = "rgb(42, 110, 165)";
            button.textContent = "Check Number"
            paragraphStep.textContent = "Step: " + counter;

            if (guess.rand === value) {
                paragraph.style.color = "red";
                button.textContent = "New Game"
                wynik = "gratulacje your number:  " + value;
                guess = new GuessingGame(max2);
                input.value = '';
                counter = 0;
                paragraphScope.innerHTML = "  Scope number:  0  -  " + max2;
            } else if (
                guess.rand > value) {
                wynik = "za mało";
                value > guess.minWynik ? guess.minWynik = value : guess.minWynik;
            } else {
                wynik = "za dużo";
                value < max2 && value < guess.maxWynik ? guess.maxWynik = value : max2;
            };
            paragraphScope.innerHTML = "  Scope number:  " + guess.minWynik + "  -  " + guess.maxWynik;
            guess.value = value;
            paragraph.textContent = wynik;
        }

    }

}

let GN = new Guessingnumber(max2);

button.addEventListener("click", GN.guesNumber);

//3)rotate list
class RotateList {
    constructor(k, list) {
        this.k = k - Math.floor(k / list.length) * list.length
        this.list = list.slice(this.k).concat(list.slice(0, this.k));
    }
}
let list = [1, 2, 3, 4, 5];
let RL = new RotateList(102, list);
console.log(RL.list);


//4) fibonacci

let scopeFibonnacci = 10;
let randFibonacci = new GetRandomScope(scopeFibonnacci).rand;
let randFibonacci1 = new GetRandomScope(scopeFibonnacci).rand1;

class Fibonacci {

    constructor(min, max) {
        this.fib = [0, 1];
        this.fib1 = [];
        for (let f = 0; f <= max; f++) {
            this.fib.push(this.fib[this.fib.length - 2] + this.fib[this.fib.length - 1])
        }
        for (let t = min; t < this.fib.length; t++) {
            this.fib1.push(this.fib[t]);
        }
    }
}

let { fib1, fib } = new Fibonacci(randFibonacci1, randFibonacci - 3);
console.log('randFibonacci', randFibonacci);
console.log(...fib);
console.log(...fib1);

//5) 

class TArray {
    constructor(wordBefore) {
        wordBefore = wordBefore + "";
        let wordAfter = [];
        for (let i = 0; i < wordBefore.length; i++) {
            wordAfter.push(wordBefore[i]);
        }
        return wordAfter;
    }
}

let nToArray = new TArray(12345678);
console.log(nToArray);


//6) PigLatin

class PigLatin {
    constructor(textBefore) {
        return textBefore.split(" ").map(item => {
            let i0 = item[0].toLowerCase();
            if (item[item.length - 1] !== ',') {
                if (i0 !== item[item.length - 1].toLowerCase()) {
                    if (i0 !== "a") { item += i0 };
                }
                item += "ay";
            } else if (item.length > 1) {
                let iEnd = item[item.length - 1];
                item = item.slice(0, item.length - 1);
                if (i0 !== "a") { item += i0 };
                item += "ay" + iEnd;
            }
            return item.slice(1);
        });
    }
}

let textAfter = new PigLatin("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua");
console.log(...textAfter);



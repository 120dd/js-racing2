import { $ } from './utils/dom.js';
import { SELECTOR } from "./constants.js";
import { Car } from "./car.js";
import { isNotMinusNum } from "./validator.js";
import { RESULT_TEMPLATE } from "./templates.js";


class App {
    constructor() {
        this.cars = [];
        this.registerCarNameSubmitEvent();
        this.registerCountSubmitButtonEvent();
    }
    
    registerCarNameSubmitEvent() {
        $(SELECTOR.CAR_NAMES_SUBMIT_BUTTON).addEventListener("click", (e) => {
            e.preventDefault();
            const inputValue = $(SELECTOR.CAR_NAMES_INPUT).value;
            const carNameArr = inputValue.split(",");
            const newCars = []
            carNameArr.forEach(v => {
                newCars.push(new Car(v));
            });
            this.cars = newCars;
        });
    }
    
    registerCountSubmitButtonEvent() {
        $(SELECTOR.RACING_COUNT_SUBMIT_BUTTON).addEventListener("click", (e) => {
            e.preventDefault();
            const inputValue = Number($(SELECTOR.RACING_COUNT_INPUT).value);
            if (!this.validateGameOption(inputValue)) {
                return;
            }
            this.play(inputValue);
            const winners = this.getWinner(this.cars);
            this.renderWinners(winners);
        });
    }
    
    validateGameOption(inputValue) {
        if (this.cars.length < 2) {
            alert("자동차를 2개 이상 입력해주세요");
            return false;
        }
        if (!isNotMinusNum(inputValue)) {
            alert("1 이상 숫자를 입력하세요");
            return false;
        }
        if (!isNotMinusNum(inputValue)) {
            alert("1 이상 숫자를 입력하세요");
            return false;
        }
        return true
    }
    
    play(inputValue) {
        this.renderResultArea();
        for (let i = 0 ; i < inputValue ; i ++) {
            this.cars.forEach(car => {
                car.go();
            });
            this.renderResult(this.cars);
        }
    }
    
    renderResultArea() {
        $(SELECTOR.RACING_RESULT).insertAdjacentHTML("afterend", `<div id="result-area"></div>`)
    }
    
    renderResult(carsInfo) {
        $(SELECTOR.RESULT_AREA).insertAdjacentHTML("beforeend", RESULT_TEMPLATE(carsInfo));
    }
    
    getWinner(carsInfo) {
        const scores = [];
        carsInfo.forEach(car => {
            scores.push(car.position);
        });
        const maxScore = Math.max(...scores);
        return carsInfo.filter(car => car.position === maxScore);
    }
    
    renderWinners(winners) {
        const winnerNames = [];
        winners.forEach(winner => {
            winnerNames.push(winner.name);
        })
        $(SELECTOR.WINNERS).innerHTML = winnerNames.join(",");
    }
}

new App();


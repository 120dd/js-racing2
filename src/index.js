import { $ } from './utils/dom.js';
import { SELECTOR } from "./constants.js";
import { Car } from "./car.js";

const RESULT_CONTENTS = (carsInfo) => carsInfo.map(car => `
<div>
${car.name}: ${RESULT_SCORE(car.position)}
</div>
`).join("")

const RESULT_SCORE = (_score) => {
    let score = ""
    for (let i = 0 ; i < _score ; i ++) {
        score += "-"
    }
    return score;
}

const RESULT_TEMPLATE = (carsInfo) => `
<br/>
<div>
${RESULT_CONTENTS(carsInfo)}
</div>
`

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
            carNameArr.forEach(v => {
                this.cars.push(new Car(v));
            });
        });
    }
    
    registerCountSubmitButtonEvent() {
        $(SELECTOR.RACING_COUNT_SUBMIT_BUTTON).addEventListener("click", (e) => {
            e.preventDefault();
            const inputValue = Number($(SELECTOR.RACING_COUNT_INPUT).value);
            for (let i = 0 ; i < inputValue ; i ++) {
                this.cars.forEach(car => {
                    car.go();
                });
                this.renderResult(this.cars);
            }
        });
    }
    
    renderResult(carsInfo) {
        $(SELECTOR.RACING_RESULT).insertAdjacentHTML("beforeend", RESULT_TEMPLATE(carsInfo));
    }
}

new App();


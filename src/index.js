import { $ } from './utils/dom.js';
import { SELECTOR } from "./constants.js";
import { Car } from "./car.js";

class App {
    constructor() {
        this.cars = [];
        $(SELECTOR.CAR_NAMES_SUBMIT_BUTTON).addEventListener("click", (e) => {
            e.preventDefault();
            const inputValue = $(SELECTOR.CAR_NAMES_INPUT).value;
            const carNameArr = inputValue.split(",");
            carNameArr.forEach(v => {
                this.cars.push(new Car(v));
            });
        });
        $(SELECTOR.RACING_COUNT_SUBMIT_BUTTON).addEventListener("click", (e) => {
            e.preventDefault();
            const inputValue = Number($(SELECTOR.RACING_COUNT_INPUT).value);
            this.cars.forEach(car => {
                car.go();
            })
        });
    }
}

new App();


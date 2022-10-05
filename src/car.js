export class Car {
    constructor(_name) {
        this.name = _name;
        this.position = 0;
    }
    
    go() {
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
            this.position += 1;
        }
    }
    
    getName() {
        return this.name;
    }
}
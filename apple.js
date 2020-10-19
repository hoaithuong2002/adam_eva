class Apple {
    constructor(weight) {
        this.weight = weight;
    }
    decrease(){
        this.weight --;
    }

    isEmpty() {
        return this.weight === 0;
    }
}
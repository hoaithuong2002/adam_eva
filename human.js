class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    eat(apple) {
        if (apple.isEmpty()) {
            this.speak('ăn hết rồi , ăn lắm thế!')
        } else {
            if (this.weight >= 1) {
                this.speak(' thôi không ăn nữa đâu . Béo !')
            } else {
                this.weight += 1;
                apple.decrease();
            }
        }
    }

    getMaxWeight() {
        if (this.weight >= 1) {
            this.speak('tao no roi!')
        }
    }

    speak(message) {
        alert(message)
    }

    getWeight() {
        return this.weight;
    }

    getName() {
        return this.name;
    }
}

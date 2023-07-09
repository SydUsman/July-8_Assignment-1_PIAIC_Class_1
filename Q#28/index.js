/**
 * Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
 */
var age = [2, 4, 13, 20, 65];
for (var index = 0; index < age.length; index++) {
    if (age[index] < 2) {
        console.log("Person is a Baby");
    }
    else if (age[index] == 2 || age[index] < 4) {
        console.log("Person is a Toddler");
    }
    else if (age[index] == 4 || age[index] < 13) {
        console.log("Person is a Kid");
    }
    else if (age[index] == 13 || age[index] < 20) {
        console.log("Person is a Teenager");
    }
    else if (age[index] == 20 || age[index] < 65) {
        console.log("Person is an Adult");
    }
    else if (age[index] > 65) {
        console.log("Person is an Elder");
    }
}
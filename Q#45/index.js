/**
 * Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
 */
function carInfo(manufacturer, modelName) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var CAR = {
        manufacturer: manufacturer,
        modelName: modelName,
        year: args
    };
    console.log(CAR);
}
carInfo("Tesla", "Model Z", "2023");

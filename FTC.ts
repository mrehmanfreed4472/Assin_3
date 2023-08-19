function CelsiusToFahrenheit(celsius:number[]) {
    var fahrenheitTemperature = [];

    for (var index = 0; index < celsius.length; index++) {
        var fahrenheit = (celsius[index] * 9 / 5) + 32;
        fahrenheitTemperature.push(fahrenheit);
    }

    return fahrenheitTemperature;
}

console.log(CelsiusToFahrenheit([0, 37, 100]));
console.log("==========================================");
console.log(CelsiusToFahrenheit([0, 37, 100, 1000]));

module.exports = function toReadable(number) {
    const singleDigits = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teensDigits = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tensDigits = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 10) return singleDigits[number];
    if (number < 20) return teensDigits[number - 10];
    if (number < 100) {
        return (
            tensDigits[Math.floor(number / 10)] +
            (number % 10 !== 0 ? " " + singleDigits[number % 10] : "")
        );
    }
    if (number < 1000) {
        return (
            singleDigits[Math.floor(number / 100)] +
            " hundred" +
            (number % 100 !== 0 ? " " + toReadable(number % 100) : "")
        );
    }
};

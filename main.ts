function parseCommmand (command: string, data: string) {
    if (command == "sY") {
        DS3231.dateTime(
        parseFloat(data),
        DS3231.month(),
        DS3231.date(),
        DS3231.day(),
        DS3231.hour(),
        DS3231.minute(),
        0
        )
    } else if (command == "sM") {
        DS3231.dateTime(
        DS3231.year(),
        parseFloat(data),
        DS3231.date(),
        DS3231.day(),
        DS3231.hour(),
        DS3231.minute(),
        0
        )
    } else if (command == "sD") {
        DS3231.dateTime(
        DS3231.year(),
        DS3231.month(),
        parseFloat(data),
        DS3231.day(),
        DS3231.hour(),
        DS3231.minute(),
        0
        )
    } else if (command == "sh") {
        DS3231.dateTime(
        DS3231.year(),
        DS3231.month(),
        DS3231.date(),
        DS3231.day(),
        parseFloat(data),
        DS3231.minute(),
        0
        )
    } else if (command == "sm") {
        DS3231.dateTime(
        DS3231.year(),
        DS3231.month(),
        DS3231.date(),
        DS3231.day(),
        0,
        parseFloat(data),
        0
        )
    } else if (command == "dt") {
        serial.writeLine("" + DS3231.date() + "/" + DS3231.month() + "/" + DS3231.year() + "" + DS3231.hour() + ":" + DS3231.minute())
    } else {
        serial.writeLine("Invalid command")
    }
}
let data = ""
let stringIn = ""
let command = ""
basic.forever(function () {
    stringIn = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (stringIn.length >= 2) {
        command = stringIn.substr(0, 2)
        data = stringIn.substr(2, stringIn.length - 2)
        parseCommmand(command, "abc")
    }
})

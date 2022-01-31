function parseCommmand (string: string) {
    if (string == "sY") {
        DS3231.dateTime(
        parseFloat(string),
        DS3231.month(),
        DS3231.date(),
        DS3231.day(),
        DS3231.hour(),
        DS3231.minute(),
        0
        )
    } else if (string == "sM") {
        DS3231.dateTime(
        DS3231.year(),
        parseFloat(string),
        DS3231.date(),
        DS3231.day(),
        DS3231.hour(),
        DS3231.minute(),
        0
        )
    } else if (string == "sD") {
        DS3231.dateTime(
        DS3231.year(),
        DS3231.month(),
        parseFloat(string),
        DS3231.day(),
        DS3231.hour(),
        DS3231.minute(),
        0
        )
    } else if (string == "sh") {
        DS3231.dateTime(
        DS3231.year(),
        DS3231.month(),
        DS3231.date(),
        DS3231.day(),
        parseFloat(string),
        DS3231.minute(),
        0
        )
    } else if (string == "sm") {
        DS3231.dateTime(
        DS3231.year(),
        DS3231.month(),
        DS3231.date(),
        DS3231.day(),
        0,
        parseFloat(string),
        0
        )
    } else if (string == "dt") {
        serial.writeLine("" + DS3231.date() + "/" + DS3231.month() + "/" + DS3231.year() + "" + DS3231.hour() + ":" + DS3231.minute())
    } else {
        serial.writeLine("Invalid command")
    }
}
let stringIn = ""
let command = ""
basic.forever(function () {
    stringIn = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (stringIn.length >= 2) {
        command = stringIn.substr(0, 2)
        parseCommmand(command)
    }
})

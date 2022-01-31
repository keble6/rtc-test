function parseCommmand (string: string) {
    if (string == "sy") {
        serial.writeLine("got sy")
    } else {
        serial.writeLine("something else")
    }
}
let stringIn = ""
let command = ""
basic.forever(function () {
    stringIn = serial.readUntil(serial.delimiters(Delimiters.Comma))
    command = stringIn.substr(0, 2)
    parseCommmand(command)
})

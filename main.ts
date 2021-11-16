input.onButtonPressed(Button.A, function () {
    serial.writeNumber(Random.generate())
    serial.writeLine("")
})
input.onButtonPressed(Button.B, function () {
    serial.writeNumber(Random.next())
    serial.writeLine("")
})
basic.forever(function () {
	
})

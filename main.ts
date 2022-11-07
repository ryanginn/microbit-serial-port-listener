/**
 * If you do not know how to set this up, please follow the tutorial linked here:
 * 
 * https://makecode.microbit.org/device/serial
 */
serial.writeLine("Serial Port Reader is listening.")
basic.forever(function () {
    basic.showString(serial.readLine())
})

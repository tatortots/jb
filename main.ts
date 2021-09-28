let bp1 = 0
let H = 0
basic.forever(function () {
    bp1 = pins.digitalReadPin(DigitalPin.P1)
    H = pins.digitalReadPin(DigitalPin.P2)
    if (bp1 > (0 == 0)) {
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
    } else if (H > 0) {
        music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
    } else {
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
})

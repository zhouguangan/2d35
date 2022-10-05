input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.OnceInBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # #
        # # # # .
        . # # # #
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        # # # # .
        . # # # #
        # # # # .
        . . # . .
        `)
    basic.showLeds(`
        # . # . #
        # # . # #
        . . # . .
        # # . # #
        # . # . #
        `)
})
basic.showString("2d35")

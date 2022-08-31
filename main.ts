basic.showLeds(`
    . . # . .
    # # # # #
    . . # . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.No)
})

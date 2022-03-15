input.onPinPressed(TouchPin.P2, function () {
    if (Som <= 65) {
        Som = 260
    }
    Som = Som - 35
    music.playTone(Som, music.beat(BeatFraction.Half))
})
input.onPinPressed(TouchPin.P1, function () {
    if (Som >= 2093) {
        Som = 260
    }
    Som = Som + 110
    music.playTone(Som, music.beat(BeatFraction.Half))
})
let Som = 0
Som = 260

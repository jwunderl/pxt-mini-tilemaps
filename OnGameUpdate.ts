let cany = 0
let canx = 0
let repeat = 0
let cury = 0
let curx = 0
let TileCollisionArrayY = [0]
let TileCollisionArrayX = [0]
TileCollisionArrayY = []
TileCollisionArrayX = []
MiniTilemaps.onMapUnloaded(function () {
    TileCollisionArrayY = []
    TileCollisionArrayX = []
})
MiniTilemaps.onMapLoaded(function () {
    TileCollisionArrayY = []
    TileCollisionArrayX = []
})

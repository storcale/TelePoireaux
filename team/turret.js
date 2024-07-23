
var enemy = getNearestEnemy()

while(getLife() < getTotalLife() * 0.75 || getLife(getNearestAlly()) < getTotalLife(getNearestAlly()) * 0.75){
 useChip(CHIP_CURE)
}
useChip(CHIP_WALL)
useChip(CHIP_SHIELD)
useChip(CHIP_VENOM,enemy)
useChip(CHIP_THORN,enemy)


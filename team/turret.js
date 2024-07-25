
/**
 * 
 * We get the nearest Leek entity
 * 
**/
function customGetNearestEnemy() {
	
	var nearestEnemy = [null, null]
	
	for(var id = 0; id <= count(getEnemies()); id++) {
		if (getType(getEnemies()[id]) == ENTITY_LEEK) {
			
			var enemy = getEnemies()[id]
			var distance = getCellDistance(getCell(), getCell(enemy))

			//If no enemy is set, set the first one//
			if (nearestEnemy[0] == null) {
				nearestEnemy[0] = enemy
				nearestEnemy[1] = distance
			} else if ( nearestEnemy[1] >  distance) {
				nearestEnemy[0] = enemy
				nearestEnemy[1] = distance
			}
		}
	}
	return nearestEnemy[0]
}

var enemy = customGetNearestEnemy()
var ally = getNearestAlly()

while(getLife() < getTotalLife() * 0.75 || getLife(getNearestAlly()) < getTotalLife(getNearestAlly()) * 0.75 ){
	
 	useChip(CHIP_CURE)
}

/** Attack **/
useChip(CHIP_VENOM,enemy)
useChip(CHIP_THORN,enemy)

/** Protect a player or the turret if the turret pourcent of life is lower than 50% **/
if (100 * getLife() / getTotalLife() < 50) {
	useChip(CHIP_WALL)
	useChip(CHIP_SHIELD)
} else {

	useChip(CHIP_WALL, ally)
	useChip(CHIP_SHIELD, ally)

}

/** Attack **/
useChip(CHIP_VENOM,enemy)
useChip(CHIP_THORN,enemy)

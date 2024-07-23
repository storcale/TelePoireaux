/**
 * 
 * We get the nearest Leek entity
 * 
**/
function getNearestEnemy() {
	
	var nearestEnemy = [null, null]
	
	for(var id = 0; id <= count(getEnemies()); id++) {
		if (getType(getEnemies()[id]) == ENTITY_LEEK) {
			
			enemy = getEnemies()[id]
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

/**
 * 
 * We get the nearest Leek entity (enemy)
 * 
**/
function getEnemy() {
	for(var id = 0; id <= count(getEnemies()); id++) {
		if (getType(getEnemies()[id]) == ENTITY_LEEK) {
			return getEnemies()[id]	
		}
	}
	return getNearestEnemy()
}

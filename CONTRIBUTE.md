# Contribué a la tourelle/ ajouter des snippets

## 1 - Faire un fork du repo 
Cliquer ici : [faire un fork](https://github.com/storcale/TelePoireaux/fork)

## 2 - Faire une pull request
Cette dernière doit expliquer les ajouts au code ou une description du snippet. Le code doit être commenté.
```ls
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
```

/**
 * 
 * Two AI Types : The Healer and the Fighter
 * Before summoning the bulb, make sure to choose the right bulbMode : isBulbHealer = false/true
*/
global isBulbHealer = false


function bulbAi() {
	var bulb = getSummons(moi)[0]
	
	if (isBulbHealer) {
		var leekToHeal = moi /** It's a variable that get the current leek ( getEntity() ) **/
		if (getFightType() == FIGHT_TYPE_TEAM) leekToHeal = getLowAlly() /** See the snippet getAllyWithTheLowestPourcentOfLife **/

		useChip(CHIP_BANDAGE, leekToHeal)
		useChip(CHIP_CURE, leekToHeal)

		useChip(CHIP_HELMET, leekToHeal)
		moveToward(leekToHeal)
	} else {
		useChip(CHIP_ROCK, enemy)
		useChip(CHIP_PROTEIN, moi)
		useChip(CHIP_FLAME, enemy)
		useChip(CHIP_SPARK, enemy)
	}
}


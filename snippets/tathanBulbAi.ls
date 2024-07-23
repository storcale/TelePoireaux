/**
 * 
 * Two AI Types : The Healer and the Fighter
 * Before summoning the bulb, make sure to choose the right bulbMode : isBulbHealer = false/true
*/
global isBulbHealer = false


function bulbAi() {
	var bulb = getSummons(moi)[0]
	
	if (isBulbHealer) {
		var leekToHeal = moi
		if (getFightType() == FIGHT_TYPE_TEAM) leekToHeal = getLowAlly()
		
		useAChip(CHIP_BANDAGE, leekToHeal)
		useAChip(CHIP_CURE, leekToHeal)

		useAChip(CHIP_HELMET, leekToHeal)
		moveToward(leekToHeal)
	} else {
		useAChip(CHIP_ROCK, enemy)
		useAChip(CHIP_PROTEIN, moi)
		useAChip(CHIP_FLAME, enemy)
		useAChip(CHIP_SPARK, enemy)
	}
}


/**
 * 
 * Get the ally with the less pourcent of PV
 * Made by : TATHAN
**/
function getLowAlly() {
	var lowestPVLeek = null
	
	for (var ally in getAllies()) {
		if (lowestPVLeek == null) {
			lowestPVLeek = ally
		} else {
			
			if (100 * getLife(ally)/getTotalLife(ally) <  100 * getLife(lowestPVLeek)/getTotalLife(lowestPVLeek)) lowestPVLeek = ally
		}
	}
	return lowestPVLeek
}

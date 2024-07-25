/*
Fait par Florent, XRAY
Mettre dans un fichier a part puis faire include("fine_name") et utiliser les fonctions données

Permet de calculer certaines choses des tours a l'avance:
La fonction getSafeCells(enemy) donne les cases ou l'ennemie ne pourra pas vous tirer dessus au prochain tour
la fonction getAttackingCells(enemy) donne les cases ou vous pouvez attaquer l'ennemie au prochain tour
la fonction findOptimal(enemy) permet de trouver une case permettant d'attaquer et de revenir a une cellule safe apres
*/

//var enemy=getNearestEnemy()

function abs(x){if(x<0){return -x}else{return x}}

function cases(cell,n){
	var tab=[cell]
	var x=getCellX(cell)
	var y=getCellY(cell)
	for(var i=x-n;i<=x+n;i++){
	for(var j=y-n;j<=y+n;j++){
	if(abs(x-i)+abs(y-j)<=n and isEmptyCell(getCellFromXY(i,j)) && getCellFromXY(i,j) != null){
	var l=getPathLength(getCellFromXY(i,j),cell,[getCell()])
	if(l<=n and l>0){
	insert(tab,getCellFromXY(i,j),-1)
	}
	}
	}
	}
	return tab
	}

function safe(cell,tab){for(var i=0;i<count(tab);i++){if(getCellDistance(cell,tab[i])<=7 and lineOfSight(cell,tab[i]) or getCellDistance(cell,tab[i])<0){return false}}return true}

function getSafeCells(enemyS,s_cell,self_MP){
var e_cell=getCell(enemyS)
var self_cells=cases(s_cell,self_MP)//attention
var enemy_cells=cases(e_cell,getMP(enemyS))
var safe_cells=[]
for(var i=0;i<count(self_cells);i++){
if(safe(self_cells[i],enemy_cells)){insert(safe_cells,self_cells[i],0)}
}
return safe_cells
}

function getAttackingCells(enemyA){
var s_cell=getCell()
var e_cell=getCell(enemyA)
var self_cells=cases(s_cell,getMP())//attention
var attacking_cells=[]
for(var i=0;i<count(self_cells);i++){
if(lineOfSight(e_cell,self_cells[i]) and getCellDistance(e_cell,self_cells[i])<=7){insert(attacking_cells,self_cells[i],0)}
}
return attacking_cells
}

function findOptimal(enemyO){//ATTENTION NON FINI ??? j'ai écris ça moi ? il m'a l'air fini...
var s_cell=getCell()
var self_MP=getMP()//attention
var attacking_cells=getAttackingCells(enemyO)
var optimal=[]
for(var i=0;i<count(attacking_cells);i++){
var l=getPathLength(s_cell,attacking_cells[i])
if(count(getSafeCells(enemyO,attacking_cells[i],self_MP-l))>0){insert(optimal,attacking_cells[i],0)}
}
return optimal
}

function moveTowardOutpost(enemyM){
//var safe_cells=sc
//if(sc=0){
var safe_cells=getSafeCells(enemyM,getCell(),getMP())//}
var min=100
var best_cell=-1
for(var i=1;i<count(safe_cells);i++){if(getCellDistance(getCell(enemyM),safe_cells[i])<min){min=getCellDistance(getCell(enemyM),safe_cells[i])best_cell=safe_cells[i]}}
if(min!=100){moveTowardCell(best_cell)
}
}

function getBestAttackingCell(attacking_cells,enemy){
var e_cell=getCell(enemy)
for(var i=0;i<count(attacking_cells);i++){
if(isOnSameLine(attacking_cells[i],e_cell) and getCellDistance(attacking_cells[i],e_cell)<=5){
return attacking_cells[i]
}
}
return attacking_cells[0]
}

var cellulesvivantes=getSafeCells(enemy,getCell(),getMP())
var cellulesmortes=getAttackingCells(enemy)
//debug("self_cell: "+getCell())
//debug("safe_cells: "+cellulesvivantes)
mark(cellulesvivantes,COLOR_GREEN)
mark(cellulesmortes,COLOR_RED)

var optimal=findOptimal(enemy)
mark(optimal,COLOR_BLUE)
//debug(optimal)

//if(count(optimal)>0){
//moveTowardCell(optimal[0])useWeapon(enemy)
//}

//moveTowardOutpost(enemy,cellulesvivantes)

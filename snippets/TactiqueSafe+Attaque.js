/*
Fait par Florent, XRAY
Mettre dans un fichier a part puis faire include("fine_name") et utiliser les fonctions données

Permet de calculer certaines choses des tours a l'avance:
La fonction getSafeCells(enemy) donne les cases ou l'ennemie ne pourra pas vous tirer dessus au prochain tour
la fonctions getAttackingCells(enemy) donne les cases ou vous pouvez attaquer l'ennemie au prochain tour
*/

var enemy=getNearestEnemy()



function abs(x){if(x<0){return -x}else{return x}}

function cases(cell,n){
	var tab=[cell]
	var x=getCellX(cell)
	var y=getCellY(cell)
	for(var i=x-n;i<=x+n;i++){
	for(var j=y-n;j<=y+n;j++){
	if(abs(x-i)+abs(y-j)<=n and isEmptyCell(getCellFromXY(i,j))){
	var l=getPathLength(getCellFromXY(i,j),cell)
	if(l<=3 and l>=0){
	insert(tab,getCellFromXY(i,j),-1)
	}
	}
	}
	}
	return tab
	}


function safe(cell,tab){for(var i=0;i<count(tab);i++){if(getCellDistance(cell,tab[i])<=7 and lineOfSight(cell,tab[i])==true){return false}};return true}

function getSafeCells(enmy){
var s_cell=getCell()
var e_cell=getCell(enmy)
var self_cells=cases(s_cell,getMP())//attention
var enemy_cells=cases(e_cell,getMP(enmy))
var safe_cells=[]
for(var i=0;i<count(self_cells);i++){
if(safe(self_cells[i],enemy_cells)){insert(safe_cells,self_cells[i],count(safe_cells))}
}
return safe_cells
}

function getAttackingCells(enmy){
var s_cell=getCell()
var e_cell=getCell(enmy)
var self_cells=cases(s_cell,getMP())//attention
var attacking_cells=[]
for(var i=0;i<count(self_cells);i++){
if(lineOfSight(e_cell,self_cells[i]) and getCellDistance(e_cell,self_cells[i])<=7){insert(attacking_cells,self_cells[i],0)}
}
return attacking_cells
}


var cellulesvivantes=getSafeCells(enemy)
var cellulesmortes=getAttackingCells(enemy)
mark(cellulesvivantes,COLOR_GREEN)
mark(cellulesmortes,COLOR_RED)

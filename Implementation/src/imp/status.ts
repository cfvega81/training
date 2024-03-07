
//Class
import { Archer } from "../classes/archer";


//Weapons
import { Magic } from "../imp/weapons/magic"; 
import { Sword } from "./weapons/sword";
import { Bow } from "./weapons/bow";

import { Player } from "./Player";
import { Boss_Goblin } from "./npc/boss_goblin";
import { Weapon } from "./weapons/weapon";
import { Mage } from "../classes/mage";


// Se crea una instancia de Player pasando el nombre como argumento al constructor
const player = new Player("Ricardo");
console.log("Player Name:", player.name);

// Se crea una instancia de la clase del personaje
const actual_class = new Archer(new Sword);
actual_class.class_Name();

// Obtener y mostrar los datos de daño
const damageInfo = actual_class.dataDamage();
console.log("Total Damage:", damageInfo.total_damage);
console.log("Damage Type:", damageInfo.damage_type);

// Crear una instancia de Boss_Goblin
const goblinBoss = new Boss_Goblin();
goblinBoss.dataBoss();
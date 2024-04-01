
//Class
import { Archer } from "./classes/archer";
import { Mage } from "./classes/mage";
import { Paladin } from "./classes/paladin";
import { Warrior } from "./classes/warrior";

//Weapons
import { Magic } from "../imp/weapons/magic"; 
import { Sword } from "./weapons/sword";
import { Bow, FireArrow, IceArrow, LongBow, NormalArrow, PoisonArrow, ShortBow, SlingShot } from "./weapons/bow";

import { Player } from "./Player";
import { Boss_Goblin } from "./npc/boss_goblin";
import { Weapon } from "./weapons/weapon";




// Se crea una instancia de Player pasando el nombre como argumento al constructor
const player = new Player("Ricardo");
console.log("Player Name:", player.name);

// Se crea una instancia de la clase del personaje
const actual_class = new Archer(new LongBow());
actual_class.class_Name();

console.log(`${actual_class}`);

// Obtener y mostrar los datos de daño
const damageInfo = actual_class.dataDamage();
console.log("Total Damage:", damageInfo.total_damage);
console.log("Damage Type:", damageInfo.damage_type);

// Crear una instancia de Boss_Goblin
const goblinBoss = new Boss_Goblin();
goblinBoss.dataBoss();

actual_class.weapon.attack(player);

actual_class.weapon.addArrow(new FireArrow());
actual_class.weapon.addArrow(new IceArrow());
actual_class.weapon.addArrow(new PoisonArrow());
actual_class.weapon.addArrow(new NormalArrow());

actual_class.weapon.attack(goblinBoss);
actual_class.weapon.attack(goblinBoss);
actual_class.weapon.attack(goblinBoss);
actual_class.weapon.attack(goblinBoss);
actual_class.weapon.attack(goblinBoss);

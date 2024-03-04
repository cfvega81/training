//#region 
export class Concantenator<T> {
    concat(a: T, b: T): string {
        return `${a} ${b}`
    }
}

const concantenator = new Concantenator<string>();
console.log(concantenator.concat('Hola', 'Mundo')); // Hola Mundo

const concantenator2 = new Concantenator<number>();
console.log(concantenator2.concat(1, 2)); // 1 2

const concantenator3 = new Concantenator<Date>();
console.log(concantenator3.concat(new Date(), new Date())); // Tue Dec 15 2020 09:10:57 GMT-0600 (Central Standard Time) Tue Dec 15 2020 09:10:57 GMT-0600 (Central Standard Time)

//#endregion














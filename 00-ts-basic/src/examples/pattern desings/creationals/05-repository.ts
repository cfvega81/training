const { DOMParser, XMLSerializer } = require('@xmldom/xmldom')

{
    abstract class Repository<T> {
        private data: T[] = [];
    
        abstract add(item: T);
    
        abstract remove(item: T);
    
        abstract getAll(): T[];
    }
    
    interface Record {
        id: number;
    }

    interface Student extends Record {
        id: number;
        name: string;
        group_id: number;
    }

    interface Group extends Record {
        id: number;
        name: string;
    }

    class TextRepository extends Repository<Student> {
        private text: string = "";
        private fieldDelimiter: string = ",";
        private recordDelimiter: string = "\n";

        add(item: Student) {
            this.text += `${item.id}${this.fieldDelimiter}${item.name}${this.fieldDelimiter}${item.group_id}${this.recordDelimiter}`;
        }
        remove(item: Student) {
            this.text = this.text.replace(`${item.id}${this.fieldDelimiter}${item.name}${this.fieldDelimiter}${item.group_id}${this.recordDelimiter}`, "");
        }
        getAll(): Student[] {
            return this.text.split(this.recordDelimiter).map((record) => {
                let [id, name, group_id] = record.split(this.fieldDelimiter);
                return {
                    id: parseInt(id),
                    name,
                    group_id: parseInt(group_id)
                }
            }).filter((student) => !isNaN(student.id));
        }

        toString() {
            return this.text;   
        }
    }

    class XmlRepository extends Repository<Student> {
        private xml: string = "";
        add(item: Student) {
            this.xml += `<student><id>${item.id}</id><name>${item.name}</name><group_id>${item.group_id}</group_id></student>`;
        }
        remove(item: Student) {
            this.xml = this.xml.replace(`<student><id>${item.id}</id><name>${item.name}</name><group_id>${item.group_id}</group_id></student>`, "");
        }

        getAll(): Student[] {
            let parser = new DOMParser();
            let doc = parser.parseFromString(this.toString(), "text/xml");
            let students = doc.getElementsByTagName("student");
            let result: Student[] = [];
            for (let i = 0; i < students.length; i++) {
                let student = students.item(i);
                result.push({
                    id: parseInt(this.getValue("id", student)),
                    name: this.getValue("name", student),
                    group_id: parseInt(this.getValue("group_id", student))
                });
            }
            return result;
        }
        toString() {
            return `<students>${this.xml}</students>`;
        }

        getValue(tag: string, node: any) {
            return node.getElementsByTagName(tag).item(0).textContent;
        }
    }   

    console.log("TextRepository");
    let repo: Repository<Student> = new TextRepository();
    console.log(repo.getAll());
    repo.add({id: 1, name: "Juan", group_id: 1});
    repo.add({id: 2, name: "Pedro", group_id: 1});
    repo.add({id: 3, name: "Maria", group_id: 2});
    console.log(repo.getAll());
    console.log(`${repo}`);

    console.log("XmlRepository");
    repo = new XmlRepository(); 

    console.log(repo.getAll());
    repo.add({id: 1, name: "Juan", group_id: 1});
    repo.add({id: 2, name: "Pedro", group_id: 1});
    repo.add({id: 3, name: "Maria", group_id: 2});
    console.log(repo.getAll());
    console.log(`${repo}`);   


    interface DbDriver {
        execute(sql: string): any;
    }

    class SqlDbDriver implements DbDriver {
        students: Student[] = [];
        groups: Group[] = [];

        private connection: any;
        constructor() {
            console.log(`Connecting to  ${this.constructor.name}`);
            this.connection = {
                query: (sql: string): any[] => {
                    console.log(`Executing: ${sql}`);
                    return [];
                }
            }
        }
        execute(sql: string):any {
            return this.connection.query(sql);
        }
    }

    class OracleDbDriver implements DbDriver {
        students: Student[] = [];
        groups: Group[] = [];

        private connection: any;
        constructor() {
            console.log(`Connecting to  ${this.constructor.name}`);
            this.connection = {
                execute: (sql: string): any[] => {
                    console.log(`Executing: ${sql}`);
                    return [];
                }
            }
        }

        execute(sql: string) {
            return this.connection.execute(sql);
        }
    }

    abstract class RepositoryV2 {
        protected driver: DbDriver;
        protected constructor(driver: DbDriver) {
            this.driver = driver;
        }
        abstract add<T extends Record>(item: T);
        abstract remove<T extends Record>(item: T);
        abstract getAll<T extends Record>(where: (item: T) => boolean): T[];
    }
    
    class SqlRepository extends RepositoryV2 {
        constructor() {
            super(new SqlDbDriver());
        }

        add<T extends Record>(item: T) {
            this.driver.execute(`INSERT INTO ${item.constructor.name} VALUES (${item})`);
        }
        remove<T extends Record>(item: T) {
            this.driver.execute(`DELETE FROM ${item.constructor.name} WHERE id = ${item.id}`);
        }
        getAll<T extends Record>(where: (item: T) => boolean): T[] {
            return this.driver.execute(`SELECT * FROM ${where.name}`).map((record: any) => {
                let [id, name, group_id] = record.split(this.driver.execute(`SELECT * FROM ${where.name}`));
                return {
                    id: parseInt(id),
                    name,
                    group_id: parseInt(group_id)
                }
            }).filter(where);
        }
    }   

    class OracleRepository extends RepositoryV2 {
        constructor() {
            super(new OracleDbDriver());
        }

        add<T extends Record>(item: T) {
            this.driver.execute(`INSERT ${item.constructor.name} VALUES (${item})`);
        }
        remove<T extends Record>(item: T) {
            this.driver.execute(`DELETE FROM ${item.constructor.name} WHERE id = ${item.id}`);
        }
        getAll<T extends Record>(where: (item: T) => boolean): T[] {
            return this.driver.execute(`SELECT * FROM $db.${where.name}`).map((record: any) => {
                let [id, name, group_id] = record.split(this.driver.execute(`SELECT * FROM ${where.name}`));
                return {
                    id: parseInt(id),
                    name,
                    group_id: parseInt(group_id)
                }
            }).filter(where);
        }
    }

    let group1: Group = {id: 1, name: "Group 1"}
    let group2: Group = {id: 2, name: "Group 2"}

    let student1: Student = {id: 1, name: "Juan", group_id: 1}
    let student2: Student = {id: 2, name: "Pedro", group_id: 1}
    let student3: Student = {id: 3, name: "Maria", group_id: 2}


    let repo2: RepositoryV2 = new SqlRepository();
    repo2.add(group1);
    repo2.add(group2);
    repo2.add(student1);
    repo2.add(student2);
    repo2.add(student3);
    console.log(repo2.getAll<Student>((student) => student.group_id === 1));

    repo2 = new OracleRepository();
    repo2.add(group1);
    repo2.add(group2);
    repo2.add(student1);
    repo2.add(student2);
    repo2.add(student3);
    console.log(repo2.getAll<Student>((student) => student.group_id === 1));

}
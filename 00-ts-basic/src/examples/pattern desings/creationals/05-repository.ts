const { DOMParser, XMLSerializer } = require('@xmldom/xmldom')

{
    abstract class Repository<T> {
        private data: T[] = [];
    
        abstract add(item: T);
    
        abstract remove(item: T);
    
        abstract getAll(): T[];
    }
    
    interface Student {
        id: number;
        name: string;
        group_id: number;
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
            return `<students>${this.xml}</students>}`;
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
}
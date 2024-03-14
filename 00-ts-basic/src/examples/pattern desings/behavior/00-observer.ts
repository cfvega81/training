{
    interface Subscriptor {
        update(publisher: Publisher): void;
    }

    abstract class Publisher {
        state: string = '';
        private observers: { subscriptor: Subscriptor, callback: (publisher: Publisher) => void }[] = [];

        public attach(
            subscriptor: Subscriptor //subscriptor
            , callback: (publisher: Publisher) => void = () => {} //una funcion si no recibo funcion, le asigno una funcion vacia
        ): void {
            this.observers.push({ subscriptor, callback });
        }

        public detach(observer: Subscriptor): void {
            this.observers = this.observers.filter((item) => item.subscriptor !== observer);
        }

        public notify(): void {
            this.observers.forEach((observer) => {
                observer.subscriptor.update(this)
                observer.callback(this);
            });
        }
    }

    class NintendoPublisher extends Publisher {
        public state: string = 'Nintendo is on';
    }   

    class PSPublisher extends Publisher {
        public state: string = 'PS is on';
    }

    class Subscriber implements Subscriptor {
        constructor(private name: string = 'Persona') {}   
        public update(publisher: Publisher): void {
            console.log( `${this.name} - ${publisher.state}`);
        }
    }

    let persona1 = new Subscriber('Cesar');
    let persona2 = new Subscriber('David');
    let persona3 = new Subscriber('Ricardo');

    let nintendo = new NintendoPublisher();
    nintendo.attach(persona1, (publisher) => {
        console.log(`Persona 1 esta revisando los secretos de Nintendo`);
    });
    nintendo.attach(persona3);

    let ps = new PSPublisher();
    ps.attach(persona1);
    ps.attach(persona2, (publisher) => {    
        console.log(`Persona 2 se puso a jugar PS`);
    });

    const intervalKey = setInterval(() => {
        let publisher = Math.random() > 0.5 ? nintendo : ps;
        publisher.notify();
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalKey);
    }, 20000);

}
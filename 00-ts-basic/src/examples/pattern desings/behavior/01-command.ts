{

    interface Command {
        canExecute(): boolean;
        execute(): void;
    }

    class CopyCommand implements Command {
        canExecute(): boolean {
            return true;
        }
        execute(): void {
            console.log('Copying...');
        }
    }

    class PasteCommand implements Command {
        canExecute(): boolean {
            return true;
        }
        execute(): void {
            console.log('Pasting...');
        }
    }

    class Button {
        constructor(private command: Command) { }
        public click(): void {
            if (this.command.canExecute()) {
                this.command.execute();
            }
        }
    }

    class SubMenuItem {
        constructor(private command: Command) { }
        public click(): void {
            if (this.command.canExecute()) {
                this.command.execute();
            }
        }
    }

    class KeyDown {
        constructor(private command: Command) { }
        public press(): void {
            if (this.command.canExecute()) {
                this.command.execute();
            }
        }
    }

    class Event {
        constructor(private command: Command) { }
        public trigger(): void {
            if (this.command.canExecute()) {
                this.command.execute();
            }
        }
    }

    let copyCommand = new CopyCommand();
    let pasteCommand = new PasteCommand();

    let copyButton = new Button(copyCommand);
    let pasteButton = new Button(pasteCommand);

    let copySubMenuItem = new SubMenuItem(copyCommand);
    let pasteSubMenuItem = new SubMenuItem(pasteCommand);

    let copyKeyDown = new KeyDown(copyCommand);
    let pasteKeyDown = new KeyDown(pasteCommand);

    let copyEvent = new Event(copyCommand);
    let pasteEvent = new Event(pasteCommand);

    //Boton de la pantalla
    copyButton.click();

    //Submenu de la pantalla
    copySubMenuItem.click();

    //Combinacion de teclado CTRL + C
    copyKeyDown.press();

    //Lectura de API
    copyEvent.trigger();

    interface CommandGeneric<T> {
        canExecute(element: T): boolean;
        execute(element: T): void;
    }

    interface User {
        id: number;
        name: string;
    }

    interface GetListUser {
        users: User[];
    }

    class GetListUserCommand implements CommandGeneric<GetListUser> {
        canExecute(element: GetListUser): boolean {
            console.log('Validating if can execute GetListUserCommand...');
            return element?.users?.length >= 0;
        }
        execute(element: GetListUser): void {
            console.log('Getting list of users...');
            element.users = [
                { id: 1, name: 'Cesar' },
                { id: 2, name: 'David' },
                { id: 3, name: 'Ricardo' },
                { id: 4, name: 'Javier' },
                { id: 5, name: 'Javier' },
                { id: 6, name: 'Javier' },
                { id: 7, name: 'Javier' },
            ]
        }
    }

    interface AddUser {
        users: User[];
    }

    class AddUserCommand implements CommandGeneric<AddUser> {

        canExecute(element: AddUser): boolean {
            console.log('Validating if can execute AddUserCommand...');
            return element?.users?.length >= 0;
        }

        execute(element: AddUser): void {
            console.log('Adding a new user...');
            const index = element.users.map(e => e.id).reduce((a, b) => Math.max(a, b), 0);
            element.users.push({ id: (index + 1), name: 'Luis' });
            console.log('User added');
        }
    }

    interface RemoveUser {
        selectedUser: User;
        users: User[];
    }

    class RemoveUserCommand implements CommandGeneric<RemoveUser> {
        canExecute(element: RemoveUser): boolean {
            console.log('Validating if can execute RemoveUserCommand...');
            return element.selectedUser && element?.users?.length > 0;
        }

        execute(element: RemoveUser): void {
            console.log('Removing a user...');
            element.users = element.users.filter(user => user.id !== element.selectedUser.id);
            console.log('User removed');
        }
    }

    class UsersService implements GetListUser, AddUser, RemoveUser {
        selectedUser: User;
        users: User[];

        private getListUserCommand: GetListUserCommand = new GetListUserCommand();
        private addUserCommand: AddUserCommand = new AddUserCommand();
        private removeUserCommand: RemoveUserCommand = new RemoveUserCommand();

        public getUsers(): User[] {
            if (this.getListUserCommand.canExecute(this)) {
                this.getListUserCommand.execute(this);
            }
            return this.users;
        }

        public addUser(): void {
            if (this.addUserCommand.canExecute(this)) {
                this.addUserCommand.execute(this);
            }
        }

        public removeUser(): void {
            if (this.removeUserCommand.canExecute(this)) {
                this.removeUserCommand.execute(this);
            }
        }
    }

    let usersModel = new UsersService();
    usersModel.addUser();
    console.log(usersModel.getUsers());
    usersModel.users = [];
    console.log(usersModel.getUsers());
    usersModel.addUser();
    usersModel.addUser();
    usersModel.addUser();
    usersModel.addUser();
    console.log(usersModel.users);

    usersModel.removeUser();
    usersModel.selectedUser = usersModel.users[0];
    usersModel.removeUser();
    console.log(usersModel.users);


    class RemoveRepeatUsersService implements GetListUser, RemoveUser {
        selectedUser: User;
        users: User[];

        private getListUserCommand: GetListUserCommand = new GetListUserCommand();
        private removeUserCommand: RemoveUserCommand = new RemoveUserCommand();

        public execute(): void {
            this.users = [];
            if (this.getListUserCommand.canExecute(this)) {
                this.getListUserCommand.execute(this);

                let repeaters: { [key: string]: number } = {};
                this.users.forEach(user => {
                    repeaters[user.name] = (repeaters[user.name] || 0) + 1;
                })

                let users2remove = [];
                this.users.filter(user => repeaters[user.name] > 1).forEach(user => {
                    users2remove.push(user);
                });

                users2remove.forEach(user => {
                    this.selectedUser = user;
                    if (this.removeUserCommand.canExecute(this)) {
                        this.removeUserCommand.execute(this);
                    }
                });
            }
        }
    }

    console.log("Removing duplicates...");
    let removeRepeatUsersModel = new RemoveRepeatUsersService();
    removeRepeatUsersModel.execute();
    console.log(removeRepeatUsersModel.users);


}
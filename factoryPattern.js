function Developer(name) {
    this.name= name;
    this.type= "Developer";
}

function Tester(name) {
    this.name= name;
    this.type= "Tester";
}

function Factory() {
    this.create= (name, type) => {
        switch(type) {
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
                break;
        }
    }
}

const factory= new Factory();
const emplyee1= factory.create("John", 1);

console.log(emplyee1);
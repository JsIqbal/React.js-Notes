class Arif {
    constructor(x,y) {
        this.name = x;
        this.age = y;
    }

    print( ) {
        console.log(this.name," ", this.age);
    }
}

const Arif_class_er_object = new Arif("Arif",30);
Arif_class_er_object.print();

class Arekta {
    constructor(z) {
        this.ami = z;
    }
    print() {
        console.log(this.ami);
    }
}
const arekta_object = new Arekta("Ami arekta object onno class er");
arekta_object.print();
function Entity(name, delay) {
    this.name = name;
    this.delay = delay;
}

Entity.prototype.greet = function () {
    setTimeout(() => {
        console.log('Xin Chao, ten toi la', this.name);
    }, this.delay);
};

const java = new Entity('Java', 5000);
const cpp = new Entity('C++', 30);

java.greet();
cpp.greet();
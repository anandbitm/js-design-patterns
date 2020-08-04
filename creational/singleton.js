const Singleton = (function () {
    let instance;

    function Logger() {
    };

    Logger.prototype.log = function (message) {
        console.log(message);
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = new Logger();
            }
            return instance;
        }
    }
})();

var obj1 = Singleton.getInstance();
var obj2 = Singleton.getInstance();

console.log(obj1 === obj2);

obj1.log(`Date time - ${new Date()}`);
obj2.log('Yoo!! both instance are same.');
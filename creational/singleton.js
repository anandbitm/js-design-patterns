// Single Instance
// Example - redux store, user context, app settings, theme

const Singleton = (function () {
    let instance;

    function ReduxStore() {
        var _users = ['rajiv', 'anand'];
        var _setings = ['dark theme'];

        Object.defineProperties(this, {
            "users": {
                get: function () {
                    return _users;
                },
                set: function (value) {
                    _users.push(value);
                }
            }
        });
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = new ReduxStore();
            }
            return instance;
        }
    }
})();

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

console.log(instance1 === instance2);

instance1.users = 'admin';

console.log(instance1.users);
console.log(instance2.users);
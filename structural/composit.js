// Composit

function Node(data) {
    this.data = data;
    this.childrens = [];
}

function Hierarchy() {
    this.add = function () {

    }

    this.traverse = function () {

    }
}

const ascena = new Hierarchy('Garry');
const n1 = ascena.add('Megan');
const n2 = ascena.add('Justin');

const d1 = ascena.add('David');
const b1 = ascena.add('Bineet');

ascena.add(n1);
ascena.add(n2);

n1.add(d1);

ascena.traverse();
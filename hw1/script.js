// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(number) {
    let counter = number;
    return {
        increment: function() {
            counter++;
            return counter;
        },
        decrement: function () {
            counter--;
            return counter;
        }
    };
};

const result = createCounter(8);

console.log(result.decrement());
console.log(result.increment());

// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(element, className) {
    if (element.classList.contains(className)) {
       return console.log(element); 
    }
    else if (element.hasChildNodes()){
        for (let iterator of element.children) {
            findElementByClass(iterator, className);
        };
    } else {
        console.log(`Элемент с классом ${className} не найден`);
    };
};

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'class');


const rootElement1 = document.getElementById('root1');
const targetElement1 = findElementByClass(rootElement1, 'class7');


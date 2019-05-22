/*a*/

/*Создать свою реализацию функции map для массивов*/


Array.prototype.map = function(projectionFunction) {
    const arr = [];
    for (let i = 0; i < this.length; i++){
        arr.push(projectionFunction(this[i], i, this));
    }
    return arr;
    };

console.log(JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]');

/*б*/

/*Переделайте массив так, чтобы объекты были следующего вида { id: …, title: … }.
Использовать функцию map */

var newReleases = [{
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': []
    }, {
    'id': 654356453,
    'title': 'Bad Boys',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id: 432534, time: 65876586 }]
    }, {
    'id': 65432445,
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': []
    }, {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    
    'rating': [5.0],
    'bookmark': [{ id: 432534, time: 65876586 }]
    }];


function transformArray(arr){
    return arr.map(function({id,title}){
        return {id, title}
    });       
}

console.log(transformArray(newReleases));


/*в*/

/* Создать свою реализацию функции filter для массивов*/

Array.prototype.filter = function(predicateFunction) {
    let filteredArray = [];

    for (let i = 0; i < this.length; i++){
        if (predicateFunction(this[i], i, this)){
            filteredArray.push(this[i]);
        }      
    }
    return filteredArray;
}

console.log(JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]");



/*г*/
/* Выведите массив ids для видео у которых рейтинг 5.0. В качестве входных данных
используйте newReleases из предыдущих заданий. */

// [675465, …]

console.log(newReleases.filter(obj => obj.rating == 5).map(obj => obj.id));


/*д*/
/* Привести данные к указанному виду, boxarts преобразовать в boxart где значение
это ссылка на видео размером 150х200. Используйте следующие функции filter, map,
concat. */

var movieLists = [
    {
    name: 'Instant Queue',
    videos : [{
        'id': 70111470,
        'title': 'Die Hard',
        'boxarts': [{
            width: 150,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg'
            }, 
            {
            width: 200,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg'
            }],
        'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating': 4.0,
        'bookmark': []
        }, 
        {
        'id': 654356453,
        'title': 'Bad Boys',
        'boxarts': [{
            width: 200,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg'
            }, 
            {
            width: 150,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg'
            }],
        'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating': 5.0,
        'bookmark': [{ id: 432534, time: 65876586 }]
        }]
    }, 
    {
    name: 'New Releases',
    videos: [{
        'id': 65432445,
        'title': 'The Chamber',
        'boxarts': [{
            width: 150,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg'
            }, 
            {
            width: 200,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg'
            }],
        'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating': 4.0,
        'bookmark': []
        }, 
        {
        'id': 675465,
        'title': 'Fracture',
        'boxarts': [{
            width: 200,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg'
            }, 
            {
            width: 150,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg'
            }, 
            {
            width: 300,
            height: 200,
            url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg'
            }],
        'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating': 5.0,
        'bookmark': [{ id: 432534, time: 65876586 }]
        }]
    }];

/* ожидаемый результат
[
{"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
{"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
{"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
{"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" }
];

*/

var x = movieLists
    .map(val => val.videos)
    .reduce((pre, cur) => pre.concat(cur))
    .map((e) =>
    ({id:e.id, title:e.title, boxart: e.boxarts
        .filter((obj) => obj.height == 200 & obj.width == 150)
        .map(({url}) => url)[0]       
    })
    );

console.log(x);


/*д*/

/* Создать свою реализацию функции reduce для массивов
Array.prototype.reduce = function(combiner, initialValue) {
}
// [1,2,3].reduce(function(memo, item) { return memo + item; }); === [6];
// [1,2,3].reduce(function(memo, item) { return memo + item; }, 10); === [16];*/

Array.prototype.reduce = function(combiner, initialValue) {
    let sum = initialValue === undefined ? 0: initialValue

    for (let i of this){
        sum = combiner(sum, i)
    }
    return sum;
}

console.log([1,2,3].reduce(function(memo, item) { return memo + item; }));
console.log([1,2,3].reduce(function(memo, item) { return memo + item; }, 10));

/*е*/

/*С помощью функции reduce получить максимальное значение в массиве
var ratings = [2,3,1,4,5]; */

var ratings = [2,3,1,4,5];

function findGreatest(arr){
    return arr.reduce((acc, val) => 
    {
        acc = (acc === undefined || val > acc) ? val : acc
        return acc;
    })
}

console.log(findGreatest(ratings));


/*ж*/
/*С помощью функций map, reduce, вывести url у которого самая большая площадь*/

var boxarts = [{
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
    }, {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
    }, {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
    }, {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
    }];


const arr = boxarts
    .map(({width, height, url}) => ({square: width*height, url}))
    .reduce((acc,val) =>
    {
        if (acc === undefined || val.square > acc.square){
            acc = val;
        }
        return acc.url;
    }
)

console.log(arr);

/*з*/

/*Преобразуйте массив в объект используя функцию reduce. Используйте начальное
значение (второй параметр)

Expecting this output...
{
    "65432445": "The Chamber",
    "675465": "Fracture",
    "70111470": "Die Hard",
    "654356453": "Bad Boys"
}
*/

    var videos = [{
        "id": 65432445,
        "title": "The Chamber"
        }, {
        "id": 675465,
        "title": "Fracture"
        }, {
        "id": 70111470,
        "title": "Die Hard"
        }, {
        "id": 654356453,
        "title": "Bad Boys"
        }];

function newObj(arr){
    return arr.reduce(function(acc, curr){
        acc[curr['id']] = curr['title'];
        return acc;
    }, {});
};

console.log(newObj(videos));

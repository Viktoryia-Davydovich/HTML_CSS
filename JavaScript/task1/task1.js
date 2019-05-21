/*a*/

/*Создать свою реализацию функции map для массивов*/

Array.prototype.map = function(projectionFunction) {
    const arr = [];
    for (let i =0; i < this.length; i++){
        arr.push(projectionFunction(this[i], i, this));
    }
    return arr;
    };

JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]';


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

JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]";



/*г*/
/* Выведите массив ids для видео у которых рейтинг 5.0. В качестве входных данных
используйте newReleases из предыдущих заданий. */

// [675465, …]

function ratingFilter(arr){
    let filteredArray = [];

    arr
    .filter(function(obj){
        if (obj['rating'][0] == 5.0){
        filteredArray.push(obj['id']);
        }
    })

    return filteredArray;
}

console.log(ratingFilter(newReleases));


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

function movieFilter(arr){
    let filteredArray = [];
    let movieArray = [];

    arr
    .filter(function(obj){
        obj['videos'].filter(function(obj_lev2){
            obj_lev2['boxarts'].filter(function(obj_lev3){
                if (obj_lev3['width'] == 150 & obj_lev3['height'] == 200 )
                filteredArray.push( Object.assign({}, obj_lev2, obj_lev3));
            })
        })       
    })
  
    movieArray = filteredArray.map(function({id,title, url}){
        let boxart = url;
        return {id, title, boxart}
    })

    return movieArray;
}

console.log(movieFilter(movieLists));


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

alert([1,2,3].reduce(function(memo, item) { return memo + item; }));
alert([1,2,3].reduce(function(memo, item) { return memo + item; }, 10));
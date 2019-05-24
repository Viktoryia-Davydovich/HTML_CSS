// Что не так с этим кодом? Предложить исправленную версию.
//1) 

var promise1 = loadVideosAsync();
var promise2 = loadMetaAsync();
Promise.all([promise1, promise2]).then(function([videos, meta]){
    DoSomething([videos, meta])
}) 

//2)

function anAsyncCall() {
    return doSomethingAsync().then(function() {
        somethingComplicated();
    });
}
// 3)

db.getAllDocs()
    .then(function (result) {
        return new Promise.all(result.rows.forEach((row) => db.remove(row.doc)));
        }
    )
    .then(function () {
// All docs must be removed!
});


// 4)

doAsync()
    .then(function () {
        throw new Error('nope');
    })
    .catch(function (err) { console.error(err); });
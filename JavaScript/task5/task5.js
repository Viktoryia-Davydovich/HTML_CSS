//Что не так с этим кодом? Предложить исправленную версию.

// 1) 

function loadVideosAsync(){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("loaded videos");
            var videos = ["v1", "v2"];
            return resolve(videos);
        }, 1000);
    })
}


function loadMetaAsync(videos){
    return new Promise((resolve, reject) => {
        setTimeout(() => console.log("loaded meta"), 3000);
        var meta = [{"v1": 1}, {"v2": 2}];
        var data = [];
        data.push(videos);
        data.push(meta);
        return resolve(data);
    })
}

function DoSomething(v, m){
    console.log(`videos: ${v} and meta: ${m}`);
}

// corrected

loadVideosAsync()
    .then(function (videos) {
        return loadMetaAsync()
    }
    )
    .then(function(data) {
        DoSomething(data[0], data[1]);
    });
    
// 2) 

function anAsyncCall() {
    var promise = doSomethingAsync();
    promise
        .then(function() {
        somethingComplicated();
        });
    return promise;
};

// 3) 

db.getAllDocs()
    .then(function (result) {
        result.rows.forEach(function (row) {
        db.remove(row.doc);
        });
    })
    .then(function () {
    // All docs must be removed!
    });


// 4)

doAsync()
    .then(function () {
    throw new Error('nope');
    },
    function (err) {
    // I didn't catch your error! :(
    });
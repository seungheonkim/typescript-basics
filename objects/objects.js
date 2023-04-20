var dog = {
    name: "who",
    breed: "inu",
    age: 4,
};
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "bill", last: "steph" });
var coordinate = { x: 34, y: 22 };
function makeRandomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
console.log(makeRandomCoordinate());
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Hello",
    artist: "steve",
    numStreams: 222222,
    credits: {
        producer: "mack",
        writer: "bts"
    }
};
console.log(calculatePayout(mySong));
printSong(mySong);

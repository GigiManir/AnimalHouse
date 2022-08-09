var client = require('mongodb').MongoClient;
client.connect("mongodb://site212216:[aXa6soht]@mongosite212216?writeConcern=majority",
async function(error, db) {
if(!error) {
var people = db.collection("people");
await people.insert(
{ nome: "Fabio", cognome: "Vitali" });

//db.close();


}
let vari=db.people.find().pretty();
console.log(vari);
}
);


var cn = {
  host: 'localhost', // server name or IP address;
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'tonywangsz'
};
var pgp = require("pg-promise")(/*options*/);
global.db = pgp(cn);




db.none("drop table if exists People;")
.then(function(){
	console.log("Reset All");
	




	// db.none("CREATE TABLE IF NOT EXISTS People (ID Serial, Name Text, Age Integer, owned_prod Text, last_emotion Integer,status Integer, type Integer, ad1 Text, ad2 Text, MAC_ID Text, Oxford_ID Text, Last_Location1 Integer, Last_Location2 Integer, role Text)").then(function(){
	// 	console.log("created People");


	//     db.none("INSERT into people (name, age, status, ad1, ad2, Oxford_ID, owned_prod, type, role, MAC_ID) Values ( $1, $2, $3, $4, $5, $6, $7, $8, $9 , $10)", ["David",19,0,"aventura1", "everyday2", "5e5e187c-417e-40f6-a6b6-f6dec5f50f81", "Student Loan", 4, "Innovation Engineer Coop", "FC64BA56B9DA"]).then(function(){
	// 		console.log("added David");
	//     }).catch(function(error){console.log(error)});

	   

	// }).catch(function(error){
	//   console.log(error);
	// });

	
}).catch(function(error){
	console.log(error);
});
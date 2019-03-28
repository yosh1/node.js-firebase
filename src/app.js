const admin = require('firebase-admin');
const serviceAccount = require('./js-firebase-tutorial-firebase-adminsdk-xy8c8-ff5d2a7d6d.json');

admin.initializeApp( {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://js-firebase-tutorial.firebaseio.com" 
} );

const db = admin.database();
const ref = db.ref("room1"); // room1

// for room1
ref.on('value', function(snapshot) {
  // 処理
  console.log(snapshot.val());
},
function(errorObject) {
  console.log("error - read failed: " + errorObject.code);
} );

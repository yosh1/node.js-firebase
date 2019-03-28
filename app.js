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

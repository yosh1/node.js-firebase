const admin = require('firebase-admin');
const serviceAccount = require('js-firebase-tutorial-firebase-adminsdk-xy8c8-ff5d2a7d6d.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://js-firebase-tutorial.firebaseio.com'
});

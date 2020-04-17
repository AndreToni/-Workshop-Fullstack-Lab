const admin = require('firebase-admin');
const secret = require('../firebase-secret.json');
const { GeoFirestore } = require('geofirestore');

if(!admin.apps.length){
    admin.initializeApp({
        credential: admin.credential.cert(secret)
    })
}


const fireStore = admin.firestore();
const db = new GeoFirestore(fireStore);

module.exports ={
    db: db
}
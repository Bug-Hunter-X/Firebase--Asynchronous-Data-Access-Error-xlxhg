The solution is to always handle Firebase data retrieval asynchronously using promises or async/await. This ensures that the data is available before you try to access it.

**Using promises:**
```javascript
db.collection('yourCollection').doc('yourDoc').get().then(doc => {
  if (doc.exists) {
    const data = doc.data();
    console.log('Data:', data.yourProperty); // Access data here
  } else {
    console.log('Document does not exist!');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});
```

**Using async/await:**
```javascript
async function getData() {
  try {
    const docRef = db.collection('yourCollection').doc('yourDoc');
    const doc = await docRef.get();
    if (doc.exists) {
      const data = doc.data();
      console.log('Data:', data.yourProperty); // Access data here
    } else {
      console.log('Document does not exist!');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}

getData();
```
The Firebase SDK might throw an error if you try to access a property of a document snapshot before the promise returned by `get()` or similar methods resolves.  This typically happens when you attempt to read data from a document synchronously, rather than asynchronously, as Firebase operations are fundamentally asynchronous.
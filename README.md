# Firebase Asynchronous Data Access Error

This repository demonstrates a common error when working with Firebase: attempting to access data before the asynchronous operation completes.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version using promises or async/await.

## Problem

Firebase data retrieval is asynchronous.  Accessing data before the promise resolves results in undefined values or errors.  The `bug.js` example illustrates this issue, causing a potential `TypeError: Cannot read properties of undefined (reading 'property')`.

## Solution

The `bugSolution.js` file shows how to correctly handle this using `.then()` or `async/await`. Always wait for the promise to resolve to safely access document data.
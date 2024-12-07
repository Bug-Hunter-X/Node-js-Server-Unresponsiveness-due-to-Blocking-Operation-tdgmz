# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where a long-running synchronous operation in the request handler can block the event loop, causing the server to become unresponsive.  The `bug.js` file contains the problematic code, while `bugSolution.js` demonstrates how to fix it using asynchronous operations.

## Bug Description

The server hangs because the `while` loop is a synchronous operation that blocks the event loop.  While the loop is running, Node.js cannot process any other requests or events.  This leads to unresponsiveness and a poor user experience.

## Solution

The solution involves refactoring the code to use asynchronous operations.  This allows the event loop to continue processing other events while the long-running operation is underway.  This maintains the server's responsiveness.
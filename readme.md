
# Node & Backend Notes

This repository contains my personal notes and example files while learning Node.js and general backend development.

Purpose
- A small, hands-on workspace for experimenting with Node's core modules and async patterns.

What you'll find here
- `fs-sync.js` — examples using synchronous file APIs.
- `fs-async.js` — examples using asynchronous file APIs (callbacks / promises).
- `http.js` — minimal HTTP server examples.
- `packages.js` — notes/examples related to package usage.
- `path_module.js` — examples for the `path` module.
- `eventLoop.js` — notes/demo for understanding the Node event loop.
- `asyncBlocking.js` — experiments showing blocking vs non-blocking async code.
- `asyncPattern.js` — various asynchronous patterns and utilities.
- `asyncPromise.js` — promise-based examples.
- `asyncAwait.js` — examples using async/await syntax.
- `httpAndStream.js` — HTTP server demonstration using streams.
- `createBigfile.js` — utility to generate a large text file for testing.
- `content/` — sample files used by the examples (first.txt, second.txt, subfolder/text.txt, big.txt, result-*.txt).

How to use
- Read the examples and run them with Node (e.g., `node http.js` or `node httpAndStream.js`).
- Modify files in `content/`, generate a large file with `node createBigfile.js`, and observe how the scripts read/write them.

Notes
- This is a learning repo — expect small, focused demos rather than production code.
- Use this as a playground to practice callbacks, promises, streams, basic HTTP handling, event-loop behavior, and async patterns.

If you'd like, I can add a few runnable examples or npm scripts to make testing easier.

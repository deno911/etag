/// <reference no-default-lib="true" />
/// <reference lib="deno.window" />
/// <reference lib="deno.ns" />

/**
 * Extends the Deno runtime global scope with various testing tools.
 *  - [x] std/testing/asserts.ts
 *  - [x] std/testing/bdd.ts
 *  - [x] std/testing/mock.ts
 *  - [x] std/testing/snapshot.ts
 *
 * Also exposes global variables `fc` ({@link [fast-check](https://github.com/dubzzz/fast-check)}) and `chai` ({@link [chai.js](https://github.com/chaijs/chai)}).
 *
 * To use in your project, just import this `deps.ts` file **once** and all of
 * your favorite testing tools will be immediately available in the program.
 * @example ```ts
 * import "./deps.ts";
 *
 * describe("chai.js test suite", () =>
 *   it("should exist in the global scope", () =>
 *     assertEquals(typeof chai, "object")));
 *
 * describe("bdd testing works", () =>
 *   it("should be really awesome", () =>
 *     chai.assert.notInstanceOf(chai, fc.anything)));
 * ```
 * @module
 */
import "https://deno.land/x/this@0.160.1/testing.ts";
// add chai support
import "https://deno.land/x/this@0.160.1/testing/chai.ts";

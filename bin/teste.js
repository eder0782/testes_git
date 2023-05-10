"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const world = "world";
const idade = 40;
function hello(who = world, old = idade) {
    return `Hello ${who}!, você tem ${old} `;
}
exports.hello = hello;

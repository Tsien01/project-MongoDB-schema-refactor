import { describe, it, expect, beforeEach, afterAll } from "@jest/globals";
import mongoose from "mongoose";
import { seed } from "../db/seeds/seed";
// const request = require("supertest");
// const app = require("../app");
// // import {app} from "../app"

afterAll(() => {
  return mongoose.disconnect();
});

beforeEach(() => {
  return seed();
});

describe('Name of the group', () => {
  it('should ', () => {
    expect(1).toBe(1)
  });
});
import * as tape from "tape";
import { State } from "./State";
import { StringInput } from "./Input";

tape("Input.readCount", (assert: tape.Test) => {
  const source = "uno\ndos\ntres",
    input = new StringInput(source),
    state = new State();

  assert.equal(input.readCount(state, source.length + 1), source.length);
  assert.true(input.isDone(state));

  assert.end();
});

tape("Input.skipWhitespace", (assert: tape.Test) => {
  const source = "\r\n uno",
    input = new StringInput(source),
    state = new State();

  input.skipWhitespace(state);
  assert.equals(input.readLine(state).unwrap(), "uno");

  assert.end();
});

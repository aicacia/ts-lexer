import * as tape from "tape";
import { State } from "./State";
import { StringInput } from "./Input";

tape("Lines", (assert: tape.Test) => {
  const input = new StringInput("uno\ndos\ntres"),
    state = new State(),
    lines = input.lines(state);

  assert.equal(lines.peekLine().unwrap(), "uno");
  lines.skipLine();
  assert.equal(lines.next().unwrap(), "dos");
  assert.equal(lines.next().unwrap(), "tres");
  assert.true(lines.next().isNone());

  assert.end();
});

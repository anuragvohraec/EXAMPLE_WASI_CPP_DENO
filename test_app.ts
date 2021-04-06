import Context from "https://deno.land/std@0.92.0/wasi/snapshot_preview1.ts";

const context = new Context({
  args: Deno.args,
  env: Deno.env.toObject(),
  preopens: {"./":"./"}
});

const binary = await Deno.readFile("app.wasm");
const module = await WebAssembly.compile(binary);
const instance = await WebAssembly.instantiate(module, {
  "wasi_snapshot_preview1": context.exports,
});

context.start(instance);
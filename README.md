# Using WASI
1. Download WAI tar and extract at a location
* For C:
`${WASI_SDK_HOME}/bin/clang app.c --sysroot=${WASI_SDK_HOME}/share/wasi-sysroot -o app.wasm`
* For C++
`${WASI_SDK_HOME}/bin/clang++ app.cpp --sysroot=${WASI_SDK_HOME}/share/wasi-sysroot -o app.wasm`

2. Run the code
`deno --unstable run -A test_app.ts  app.wasm  README.md cr.md`
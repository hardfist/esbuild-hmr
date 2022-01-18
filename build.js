const esbuild = require('esbuild')
const rollup = require('rollup');
const webpack = require('webpack');
const util = require('util');
const { exec } = require('child_process');
async function build_esbuild(){
  await esbuild.build({
    entryPoints: {
      index: './src/index.js'
    },
    format: 'esm',
    bundle:true,
    outdir: 'dist/esbuild'
  }) 
}
async function build_rollup_no_bundle(){
  const bundler = await rollup.rollup({
    input: {
      index: './src/index.js'
    }
  })
  await bundler.write({
    output: {
      dir: 'dist/rollup_no_bundle',
      format: 'systemjs',
      preserveModules:true
    }
  });
}
async function build_rollup_bundle(){
   const bundler = await rollup.rollup({
    input: {
      index: './src/index.js'
    }
  })
  await bundler.write({
    output: {
      dir: 'dist/rollup_bundle',
    }
  });
}
async function build_webpack_scope_hoist(){
  exec('npx webpack -c webpack.config.js');
}
async function build_webpack_no_scope_hoist(){

}

async function main(){
  await build_esbuild();
  await build_rollup_bundle();
  await build_rollup_no_bundle();
  
}
main()
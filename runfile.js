var run = require('runjs').run;

export function test(){
    exports.echo(1,2,3);
    run('jasmine');
}

export function echo(){
    console.log('echo ' + Array.prototype.slice.call(arguments, 0).join(' '))
}

export function build(){
    run('babel --modules common src/index.js -o lib/index.js');
}

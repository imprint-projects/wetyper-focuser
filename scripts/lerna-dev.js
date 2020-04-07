const spawn = require('cross-spawn')
const aliasFor = require('./package-aliases')

let target = aliasFor(process.argv[2])
let extraArgs = target ? ['--scope', target] : [];

spawn('yarn', ['lerna', 'run', 'dev', '--stream', ...extraArgs], { stdio: 'inherit' })

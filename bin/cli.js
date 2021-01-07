#!/usr/bin/env node
'use strict';
const program = require('commander');
const pkg = require('../package.json'); 
program
  .version(pkg.version)

program
  .command('create <name>')
  .alias('c')
  .description('创建新项目')
  .action((name, options) => {
    require('../lib/create')(name, options);
  });

program.parse(process.argv);
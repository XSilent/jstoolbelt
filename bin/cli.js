#!/usr/bin/env node
/** *****************************************************************************
 * Project: jstoolbelt    
 * Like a Swiss-Army-Knife CLI tool written in JavaScript using Commander.js 
 ***************************************************************************** */
import { Command } from 'commander';
const program = new Command();

program
  .name('jstoolbelt')
  .description('Like a Swiss Army Knife CLI for your daily dev needs')
  .version('1.0.0');

program
  .command('docker-info <container-name> [path]')     // <must-have> and [is-optional]  
  .description('Show docker container environment, no path will print the entire JSON. \n'
            +  'If you want the env, specify the path eg. with Config.Env \n' 
            +  'or with NetworkSettings.')
  .action(async (containerName, path) => {
    const mod = await import('../commands/docker-info.js');
    mod.default(containerName, path);
  });

program
  .command('port-check <port>')
  .description('Check if a port is available')
  .action(async (port) => {
    const mod = await import('../commands/port-check.js');
    mod.default(port);
  });

program.parse();
#!/usr/bin/env node
import { Command } from 'commander';
const cli = new Command();

// Kick it off
cli.description('CLI Name').command('subcommand', 'Do some things.').parse();

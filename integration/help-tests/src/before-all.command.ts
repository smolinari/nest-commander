import { Command, CommandRunner, Help } from 'nest-commander';

@Command({ name: 'before-all', description: 'before-all' })
export class BeforeAllCommand implements CommandRunner {
  async run() {
    /* no op */
  }

  @Help('beforeAll')
  beforeAllHelp() {
    return 'before all help';
  }
}

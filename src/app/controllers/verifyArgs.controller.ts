import { ParsedArgs } from 'minimist';

class VerifyArgsController {
  initialize(command: ParsedArgs): boolean {
    if (
      command.project ||
      command.p ||
      command.help ||
      command.h ||
      command.version ||
      command.v
    ) {
      return true;
    }
    return false;
  }
}

export default new VerifyArgsController();

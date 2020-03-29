import { copy } from 'fs-extra';
import { resolve } from 'path';

class CopyTemplateController {
  async initialize(nameProject: string): Promise<boolean> {
    try {
      const pathTemplate = resolve(__dirname, '..', '..', '..', 'template');
      const destination = resolve(process.cwd(), nameProject);

      await copy(pathTemplate, destination);

      return true;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new CopyTemplateController();

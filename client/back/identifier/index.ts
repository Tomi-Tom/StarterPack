import Handler from '../utils/meta/Handler';
import * as os from 'os';

export default class Identifier {
    @Handler()
    static async identify(): Promise<'windows' | 'linux' | 'darwin'> {
        if (os.type() == 'Windows_NT') return 'windows';
        else if (os.type() == 'Linux') return 'linux';
        else if (os.type() == 'Darwin') return 'darwin';
        else throw new Error('Unknown OS');
    }
}

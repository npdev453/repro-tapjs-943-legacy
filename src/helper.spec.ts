import t from 'tap';

import { mergeString } from './helper';

void t.test('TSCoder encode ', (t) => {
    const input = ['a' ,' b'] as const;

    const result = mergeString(...input);
    
    t.equal(result, input.join(''));
    t.end();
});
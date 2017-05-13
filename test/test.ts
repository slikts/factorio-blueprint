import { Blueprint } from '..';
import * as fs from 'fs';

import * as test from 'tape';

test('basic import', (t) => {
  t.plan(1);
  const bps = fs.readFileSync('test/balancer.bp', 'utf8');

  const bp = new Blueprint(bps);

  const json = JSON.stringify(bp.toObject());
  t.equals(json, JSON.stringify(JSON.parse(fs.readFileSync('test/balancer.json', 'utf8'))));
});

import { connect } from 'mongoose';

const path = process.env['TS_JEST'] ? '.env.tests' : '.env';

require('dotenv').config({ path });

export const doConnect = () => connect(process.env.APP_MONGODB_URL || '');

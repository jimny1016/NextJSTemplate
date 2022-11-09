import redisConfig from './redis-config';

const redis = require('ioredis');

const client = new redis(redisConfig);
module.exports = { client };

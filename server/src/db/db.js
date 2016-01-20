import Seraph from 'seraph';
import Promise from 'bluebird';
import config from '../../../src/shared/config/config';

let DATABASE_URI = process.env.GRAPHSTORY_URL || config.DATABASE_URI;

console.log('this is database', DATABASE_URI);

export default Promise.promisifyAll(Seraph());

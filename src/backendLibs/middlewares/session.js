import { getMongoClient } from '../../backendLibs/mongodb';
import MongoStore from 'connect-mongo';
import nextSession from 'next-session';
import { promisifyStore } from 'next-session/lib/compat';

const mongoStore = MongoStore.create({
  clientPromise: getMongoClient(),
  stringify: false,
});

const getSession = nextSession({
  store: promisifyStore(mongoStore),
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60, // 24 h,
    path: '/',
    sameSite: 'strict',
  },
  touchAfter: 24 * 60 * 60, 
});

export default async function session(req, res, next) {
  await getSession(req, res);
  next();
}

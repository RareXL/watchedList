import { passport } from '../../backendLibs/auth';
import { auths } from '../../backendLibs/middlewares';
import { ncOpts } from '../../backendLibs/nc';
import nc from 'next-connect';

const handler = nc(ncOpts);

handler.use(...auths);

handler.post(passport.authenticate('local'), (req, res) => {
  res.json({ user: req.user });
});

handler.delete(async (req, res) => {
  await req.session.destroy();
  res.status(204).end();
});

export default handler;

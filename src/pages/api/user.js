import { auths } from '../../backendLibs/middlewares';
import { ncOpts } from '../../backendLibs/nc';
import nc from 'next-connect';

const handler = nc(ncOpts);

handler.use(...auths);

handler.get(async (req, res) => {
  if (!req.user) return res.json({ user: null });
  return res.json({ user: req.user });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;

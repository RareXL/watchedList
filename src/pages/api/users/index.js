import { findUserByEmail, insertUser } from '../../../backendLibs/db';
import { auths} from '../../../backendLibs/middlewares';
import { getMongoDb } from '../../../backendLibs/mongodb';
import { ncOpts } from '../../../backendLibs/nc';
import nc from 'next-connect';

const handler = nc(ncOpts);

handler.post(
  ...auths,
  async (req, res) => {
    const db = await getMongoDb();

    let {name, email, password } = req.body;

    if (await findUserByEmail(db, email)) {
      res
        .status(403)
        .json({ error: { message: 'The email has already been used.' } });
      return;
    }
    const user = await insertUser(db, {
      email,
      originalPassword: password,
      name,
    });
    req.logIn(user, (err) => {
      if (err) throw err;
      res.status(201).json({
        user,
      });
    });
  }
);

export default handler;

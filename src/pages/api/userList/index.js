//insertOrUpdateUserList(db,{ user, movie})

import { insertOrUpdateUserList } from '../../../backendLibs/db';
import { auths} from '../../../backendLibs/middlewares';
import { getMongoDb } from '../../../backendLibs/mongodb';
import { ncOpts } from '../../../backendLibs/nc';
import nc from 'next-connect';
const handler = nc(ncOpts);

handler.post(
  ...auths,
  async (req, res) => {
    const db = await getMongoDb();

    let {user, movie } = req.body;

    const userList = await insertOrUpdateUserList(db, {
        user,
        movie
    });

    if(userList){

        res.status(200).json({userList:userList._id});
    }
    else{
        res.status(500).json({userList:null});
    }
   
   
  }
);

export default handler;
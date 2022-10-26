import { ObjectId } from 'mongodb';
import {findUserByEmail } from './user'


export async function insertOrUpdateUserList(db,{ user, movie}) {

    let dbUser = await findUserByEmail(db, user.email);
    let dbUserList = await findUserListByUserId(db, dbUser._id);
    if (dbUserList) {
      let currentMovies = dbUserList.movies;
      let currentMovieIds = currentMovies.map(item => item.id)
      if (!currentMovieIds.includes(movie.id)) {
        dbUserList.movies.push(movie);
        dbUserList = await updateUserListById(db, dbUserList._id, dbUserList);
      }
    } else {
      let movies = [movie];
      const userList = {
        user: new ObjectId(dbUser._id),
        movies,
      };
      dbUserList = await insertUserList(db, userList);
    }

    return dbUserList

  }

  export async function findUserListByUserId(db, userListId) {
    return db
    .collection('userLists')
      .findOne({ user: new ObjectId(userListId) })
      .then((userList) => userList || null);
  }

  export async function updateUserListById(db, id, data) {
    return db
      .collection('userLists')
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: data },
        { returnDocument: 'after'}
      )
      .then(({ value }) => value);
  }

  export async function insertUserList(db,userList) {
    const { insertedId } = await db
      .collection('userLists')
      .insertOne(userList);
      userList = insertedId;
    return userList;
  }

  
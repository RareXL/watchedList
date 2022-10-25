import { MongoClient } from 'mongodb';

let indexesCreated = false;
async function createIndexes(client) {
  if (indexesCreated) return client;
  const db = client.db();
  await Promise.all([
    db.collection('userLists').createIndex({ expireAt: -1 }, { expireAfterSeconds: 0 }),
    db.collection('users').createIndexes([
      { key: { email: 1 }, unique: true },
    ]),
  ]);
  indexesCreated = true;
  return client;
}

export async function getMongoClient() {
  if (!global.mongoClientPromise) {
    console.log("mongo",process.env.MONGODB_URI)
    const client = new MongoClient(process.env.MONGODB_URI);
     client.connect()
     console.log(client)
    global.mongoClientPromise = client
      .connect()
      .then((client) => createIndexes(client));
  }
  return global.mongoClientPromise;
}

export async function getMongoDb() {
  const mongoClient = await getMongoClient();
  return mongoClient.db();
}

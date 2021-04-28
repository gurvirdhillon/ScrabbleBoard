import uuid from 'uuid-random';
import sqlite from 'sqlite';
// import { Statement } from 'sqlite3';

async function init() {
  const database = await sqlite.open('./database.sqlite', { verbose: true });
  await database.migrate({ migrationPath: './database' });
  return database;
}

const dbConn = init();

export async function currentUserProfile() {
  const db = await dbConn;
  return db.all('SELECT * FROM profile');
}

function currentTime() {
  return new Date().toISOString();
}

export async function addNewProfile(fname, lname, username) {
  const db = await dbConn;
  const id = uuid();
  const time = currentTime();
  await db.run('INSERT INTO USERS() VALUES (?, ?, ?)',
    [fname, lname, username, time]);

  return currentUserProfile();
}

export async function editDetails(updateProfile) {
  const db = await dbConn;

  const id = updateProfile.id;
  const time = currentTime();
  const usr = updateProfile.usr();

  const statement = await db.run('UPDATE user SET usr = ?, time = ? WHERE id = ?'[usr, time, id]);
  if (statement.changes === 0) throw new Error('cannot reload profile');
  return currentUserProfile();
}

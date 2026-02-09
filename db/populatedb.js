#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  name VARCHAR ( 30 ),
  added DATE NOT NULL DEFAULT CURRENT_DATE
);
`;

async function main() {
  const DB_URL = process.argv[2];
  if (!DB_URL) {
    console.error("No database url provided.");
    process.exit(1);
  }
  console.log("seeding...");
  const client = new Client({
    connectionString: DB_URL,
    ssl: DB_URL.includes("render.com")
    ? { rejectUnauthorized: false}
    : false,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
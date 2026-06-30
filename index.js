import { MongoClient } from "mongodb";


const url =
  "mongodb+srv://kaviyaajeevitha2116_db_user:YOUR_PASSWORD@cluster0.hy7wo40.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);
const dbName = "MiniIssueTracker";

async function main() {
  try {
  
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    const db = client.db(dbName);
    console.log("Database:", db.databaseName);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

main();
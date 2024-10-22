// lib/db.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://pragatitripathi:wUKH2EiYezO5hopb@genicminds.jbdgr.mongodb.net/?retryWrites=true&w=majority&appName=GenicMinds'; // Replace with your actual connection string

let client;
let clientPromise;

// Check if running in development or production
if (process.env.NODE_ENV === 'development') {
    // Create a new MongoClient for development
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // Create a new MongoClient for production
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

export default clientPromise;

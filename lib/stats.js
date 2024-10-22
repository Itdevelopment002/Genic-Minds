import { ObjectId } from 'mongodb'; // Import ObjectId
import clientPromise from './db';

export const fetchStats = async () => {
    try {
        const client = await clientPromise;
        const db = client.db('GenicMindsDB'); // Use your database name
        
        // Replace with the correct ObjectId of the document you want to fetch
        const idToFetch = new ObjectId("6704d3e7a6b781c4608ee6d6");
        
        // Fetch the document by its ObjectId
        const stats = await db.collection('stats').findOne({ _id: idToFetch });
        
        return stats;
    } catch (error) {
        console.error('Failed to fetch stats:', error);
        throw new Error('Failed to fetch stats');
    }
};

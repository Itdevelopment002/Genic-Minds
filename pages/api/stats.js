import { fetchStats } from '../../lib/stats';

export default async function handler(req, res) {
    try {
        const stats = await fetchStats();
        console.log('Stats fetched from DB:', stats); // Log the stats here
        res.status(200).json(stats);
    } catch (error) {
        console.error('Failed to fetch stats:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

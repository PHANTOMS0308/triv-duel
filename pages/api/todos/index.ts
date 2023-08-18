import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";


export default async(req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db('test');

    if (req.method === 'POST') {
      await db.collection('todo').insertOne(req.body);
      const todos = await db
      .collection('todo')
      .find({})
      .toArray();
      
      res.status(201).json(todos);
    } else if (req.method === 'GET') {
      const todos = await db
        .collection('todo')
        .find({})
        .toArray();
        
      res.json(todos);
    } else {
      res.status(400).json({ error: 'Invalid Request Method for route /api/todos'})
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error'});
  }
}
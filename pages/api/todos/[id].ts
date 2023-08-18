import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";


export default async(req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;

  try {
    const client = await clientPromise;
    const db = client.db('test');

    if (req.method === 'DELETE') {
      await db.collection('todo').deleteOne({ _id: new ObjectId(id) });

      const todos = await db
      .collection('todo')
      .find({})
      .toArray();
      
      res.json(todos);
    } else if (req.method === 'PUT') {
      console.log('PUT route is accessed')

      await db.collection('todo').updateOne({ _id: new ObjectId(id)}, { $set: req.body });

      const todos = await db
      .collection('todo')
      .find({})
      .toArray();
      
      res.json(todos);
    } else {
      res.status(400).json({ error: 'Invalid Request Method for route /api/todos/:id'})
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error'});
  }
}
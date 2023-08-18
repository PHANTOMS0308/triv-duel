import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

type UserData = {
  _id: ObjectId;
  name: string;
  age: number;
} 

type ErrorData = {
  error: string;
}

export default async (req: NextApiRequest, res: NextApiResponse<UserData | ErrorData>) => {
  const id = req.query.id;

  if (typeof id !== 'string') {
    res.status(400).json({ error: "Invalid ID provided" });
    return;
  }

  try {
    const client = await clientPromise;
    const db = client.db('test');

    const movie = await db
      .collection("User")
      .findOne({ _id: new ObjectId(id) }) as UserData;

    if (!movie) {
      res.status(404).json({ error: "Movie not found." });
      return;
    }

    res.json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from 'mongodb';

type UserData = {
  _id: ObjectId;
  name: string;
  age: number;
} 

type ErrorData = {
  error: string;
}

export default async (req: NextApiRequest, res: NextApiResponse<UserData[] | ErrorData>) => {
  console.log({ body: req.body, cookies: req.cookies, query: req.query });

  try {
    const client = await clientPromise;
    const db = client.db('test');

    const movies = await db
      .collection("User")
      .find({})
      .toArray() as UserData[];

    console.log(movies[0]._id);

    res.json(movies);
  } catch (err) {
    console.error(err);
  }
}
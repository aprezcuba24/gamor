// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { doConnect } from '../../entity';
import { Category } from '../../entity/category'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await doConnect();
  const data = await Category.find({});
  res.status(200).json(data.map((item) => item.toJSON()))
}

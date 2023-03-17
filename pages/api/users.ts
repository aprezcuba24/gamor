// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createUser } from '../../services/user.service'

type Data = {
  name?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(404).json({ error: 'Not foud' })
  }
  const { email, password } = req.body;
  const user = await createUser(email, password)
  res.status(200).json(user.toJSON())
}

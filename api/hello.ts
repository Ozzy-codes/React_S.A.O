import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler (_: VercelRequest, res: VercelResponse) {
  return res.send(`hello world`)
}
/**
 * @code-with-ashish
 */

import { WorkOS } from '@workos-inc/node';
import * as jose from 'jose';
import { NextApiRequest, NextApiResponse } from 'next';


// Initialize WorkOS SDK
const workos = new WorkOS(process.env.REACT_APP_WORKOS_API_KEY);

// Function to verify the JWT token
async function verifyJwtToken(token: string): Promise<any> {
    const decoded = jose.decodeJwt(token);
    let userId: string = decoded.sub || '';
    const payload = await workos.userManagement.getUser(userId);
    return payload
}

// API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const token = req.body.token || req.body.auth0IdToken || Object.values(req.body)[0];

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    const decoded = await verifyJwtToken(token);
    return res.status(200).json(decoded);
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({ message: 'Invalid token' });
  }
}

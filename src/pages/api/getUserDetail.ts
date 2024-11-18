// pages/api/getUserDetail.ts

import { WorkOS } from '@workos-inc/node';
import { WORKOS_API_KEY } from '@/workos.cred';
import type { NextApiRequest, NextApiResponse } from 'next';

// Initialize WorkOS SDK
const workos = new WorkOS(WORKOS_API_KEY);

// Function to fetch user details
async function getUserDetail(userId: string) {
  try {
    const user = await workos.userManagement.getUser(userId);
    console.log(user);
    return user;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw new Error('Failed to fetch user details');
  }
}

// CORS Middleware
const cors = (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS'); // Allow GET and OPTIONS methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

  // Handle OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Apply CORS middleware
  cors(req, res, async () => {
    // Check for GET method
    if (req.method === 'GET') {
      const { userId } = req.query; // Extract userId from query params

      if (!userId || Array.isArray(userId)) {
        // If no userId is provided or if userId is an array, return an error response
        return res.status(400).json({ error: 'userId query parameter is required and must be a single value' });
      }

      try {
        // Fetch the user details using the userId
        const user = await getUserDetail(userId);
        res.status(200).json(user); // Return the user details
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user details' });
      }
    } else {
      // Handle invalid HTTP methods
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  });
}

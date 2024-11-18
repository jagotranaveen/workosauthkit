'use server';

import { WorkOS } from '@workos-inc/node';
import { WORKOS_API_KEY, WORKOS_CLIENT_ID } from './workos.cred';

const workos = new WorkOS(WORKOS_API_KEY);

export async function signIn(prevState: any, formData: FormData) {
  try {
    // For the sake of simplicity, we directly return the user here.
    // In a real application, you would probably store the user in a token (JWT)
    // and store that token in your DB or use cookies.
    return await workos.userManagement.authenticateWithPassword({
      clientId: WORKOS_CLIENT_ID || '',
      email: String(formData.get('email')),
      password: String(formData.get('password')),
    });
  } catch (error) {
    return { error: JSON.parse(JSON.stringify(error)) };
  }
}
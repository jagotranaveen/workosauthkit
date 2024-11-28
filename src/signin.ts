'use server';

import { WorkOS } from '@workos-inc/node';


const workos = process.env.REACT_APP_WORKOS_API_KEY;
const workos_client = process.env.REACT_APP_WORKOS_CLIENT_ID;

export async function signIn(prevState: any, formData: FormData) {
  try {
    // For the sake of simplicity, we directly return the user here.
    // In a real application, you would probably store the user in a token (JWT)
    // and store that token in your DB or use cookies.
    return await workos.userManagement.authenticateWithPassword({
      clientId: workos_client || '',
      email: String(formData.get('email')),
      password: String(formData.get('password')),
    });
  } catch (error) {
    return { error: JSON.parse(JSON.stringify(error)) };
  }
}

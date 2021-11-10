import { USERS_DISCORD } from '../data/Users'

export interface Embed {
  title?: string;
  description?: string;
  timestamp?: string | number;
  color?: string | number;
}


export const getUser = (user: string) => {
  let userData = null;
  
  for (const a of USERS_DISCORD) {
    if (a.user_id == user) {
      userData = a;
    }
    if (a.id == user) {
      userData = a;
    }
    if (a.discord_id == user) {
      userData = a;
    }
  }

  return {
    returns: userData
  };
}
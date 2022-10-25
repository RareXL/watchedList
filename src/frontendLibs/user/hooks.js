import { fetcher } from '../fetch';
import useSWR from 'swr';

export function useCurrentUser() {
  console.log("fire swr")
  return useSWR('/api/user', fetcher);
}

export function useUser(id) {
  return useSWR(`/api/users/${id}`, fetcher);
}

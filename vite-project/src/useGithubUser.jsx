
import useSWR from "swr";



export function useGithubUser(username) {

    const {data, error, mutate} = useSWR(
    username ? `https://api.github.com/users/${username}` : null
  );

  function userRefetch(){
    mutate()
    }

  return { user: data, error, isLoading: !data && !error, refetch: userRefetch, };
}
import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Post } from '../backend';

export function usePosts() {
  const { actor, isFetching } = useActor();

  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      if (!actor) return [];
      const posts = await actor.getPosts();
      return posts;
    },
    enabled: !!actor && !isFetching,
  });
}

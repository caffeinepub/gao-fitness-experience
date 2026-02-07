import { usePosts } from '../hooks/useQueries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Loader2, FileText } from 'lucide-react';

export default function PostFeed() {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-destructive">Failed to load posts. Please try again later.</p>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
        <h2 className="text-2xl font-semibold mb-2">No posts yet</h2>
        <p className="text-muted-foreground">
          Check back soon for fitness experiences and insights.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <article key={`${post.title}-${index}`}>
          <Card className="border-2 hover:border-accent/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </p>
              </div>
            </CardContent>
          </Card>
        </article>
      ))}
    </div>
  );
}

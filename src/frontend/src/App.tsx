import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import SiteLayout from './components/SiteLayout';
import PostFeed from './components/PostFeed';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function AppContent() {
  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Gao Fitness Experience
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing my journey through fitness, one experience at a time.
          </p>
        </div>
        <PostFeed />
      </div>
    </SiteLayout>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <AppContent />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

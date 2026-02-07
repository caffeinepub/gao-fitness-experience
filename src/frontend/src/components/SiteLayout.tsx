import { type ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
      
      <Separator className="mt-16" />
      
      <footer className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 Gao Fitness Experience. All rights reserved. Built with{' '}
            <Heart className="inline-block w-4 h-4 text-accent fill-accent" />{' '}
            using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}

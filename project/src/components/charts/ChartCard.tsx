import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FullscreenButton } from '@/components/ui/fullscreen-button';
import { ReactNode } from 'react';

interface ChartCardProps {
  title: string;
  children: ReactNode;
  id: string;
}

export function ChartCard({ title, children, id }: ChartCardProps) {
  return (
    <Card id={id} className="relative">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <FullscreenButton elementId={id} />
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
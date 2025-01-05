import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  trend?: number;
  className?: string;
}

export function KPICard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  className,
}: KPICardProps) {
  return (
    <Card className={cn('', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || trend !== undefined) && (
          <p className="text-xs text-muted-foreground">
            {description}
            {trend !== undefined && (
              <span
                className={cn(
                  'ml-1',
                  trend > 0 && 'text-green-500',
                  trend < 0 && 'text-red-500'
                )}
              >
                {trend > 0 ? '+' : ''}
                {trend}%
              </span>
            )}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  Home,
  Settings,
  FileText,
  HelpCircle,
  Menu,
  X,
  Leaf,
  LineChart,
  Target,
  AlertCircle,
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: BarChart3, label: 'Portfolio', href: '/portfolio' },
  { icon: Leaf, label: 'ESG Analysis', href: '/esg' },
  { icon: LineChart, label: 'Performance', href: '/performance' },
  { icon: Target, label: 'Scenarios', href: '/scenarios' },
  { icon: AlertCircle, label: 'Risk Analysis', href: '/risk' },
  { icon: FileText, label: 'Reports', href: '/reports' },
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: HelpCircle, label: 'Help', href: '/help' },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'flex flex-col h-screen bg-card border-r transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2
          className={cn(
            'font-bold text-xl transition-opacity duration-300',
            collapsed && 'opacity-0'
          )}
        >
          GreenFin
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </Button>
      </div>
      <NavigationMenu orientation="vertical" className="flex-1 p-2">
        <NavigationMenuList className="flex-col space-y-1">
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                href={item.href}
                className={cn(
                  'flex items-center px-3 py-2 rounded-md text-sm transition-colors',
                  'hover:bg-accent hover:text-accent-foreground',
                  'focus:bg-accent focus:text-accent-foreground'
                )}
              >
                <item.icon className="h-5 w-5" />
                <span
                  className={cn(
                    'ml-3 transition-opacity duration-300',
                    collapsed && 'opacity-0'
                  )}
                >
                  {item.label}
                </span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: string;
  name: string;
  esgScore: number;
  roi: number;
  risk: 'Low' | 'Medium' | 'High';
  status: 'Active' | 'Pending' | 'Completed';
}

const projects: Project[] = [
  {
    id: '1',
    name: 'Solar Farm Initiative',
    esgScore: 92,
    roi: 15.4,
    risk: 'Low',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Wind Energy Park',
    esgScore: 88,
    roi: 12.7,
    risk: 'Medium',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Sustainable Agriculture',
    esgScore: 85,
    roi: 9.3,
    risk: 'Medium',
    status: 'Pending',
  },
  {
    id: '4',
    name: 'Ocean Cleanup Tech',
    esgScore: 95,
    roi: 18.2,
    risk: 'High',
    status: 'Completed',
  },
];

const getRiskColor = (risk: Project['risk']) => {
  switch (risk) {
    case 'Low':
      return 'bg-green-500/10 text-green-500';
    case 'Medium':
      return 'bg-yellow-500/10 text-yellow-500';
    case 'High':
      return 'bg-red-500/10 text-red-500';
  }
};

const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'Active':
      return 'bg-blue-500/10 text-blue-500';
    case 'Pending':
      return 'bg-yellow-500/10 text-yellow-500';
    case 'Completed':
      return 'bg-green-500/10 text-green-500';
  }
};

export function ProjectsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>ESG Score</TableHead>
          <TableHead>ROI</TableHead>
          <TableHead>Risk</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell className="font-medium">{project.name}</TableCell>
            <TableCell>{project.esgScore}</TableCell>
            <TableCell>{project.roi}%</TableCell>
            <TableCell>
              <Badge variant="secondary" className={getRiskColor(project.risk)}>
                {project.risk}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge
                variant="secondary"
                className={getStatusColor(project.status)}
              >
                {project.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
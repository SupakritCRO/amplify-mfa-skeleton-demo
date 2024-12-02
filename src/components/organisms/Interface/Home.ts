import { Option } from '@/Interfaces/Options'; 
import { AssessmentSchema } from '@/client/rmi';
export interface AssessmentTableProps {
  userGroup?: string | undefined;
  assessments: AssessmentSchema[] | undefined;
  isLoading?: boolean;
  companyOptions?: Option[];
  user?: { userId: string; userName: string; userGroup: string } | undefined;
  // isOpen?: boolean
}


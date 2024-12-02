// import { RiskLevelCustomCreate } from '@/client/rmi'
import { defaultNewRiskData, NewRiskItem } from '@/components/organisms/Interface/Modal'
import { Dispatch, SetStateAction } from 'react'
import { UseMutationResult } from '@tanstack/react-query'
import { CauseAnswerSchema, ProcessAnswerSchema, QuestionCreatePayload, QuestionResponseSchema } from '@/client/rmi'

export interface SideBarItemProps {
  href: string
  children: React.ReactNode
}

export interface QuestionSidebarItemProps {
  assessmentStatus: string;
  number: number;
  count: number;
  status: QuestionSidebarItemStatus;
  title?: string;
  selected?: boolean;
  onClick: (n: number) => void;
  isCustom?: boolean;
  questionId: number;
  defaultNewRiskData?: defaultNewRiskData
  userGroup?: string;
  choice?: number;
  setNewRiskItem?: Dispatch<SetStateAction<NewRiskItem>>;
  backQuestion?: () => void;
  createNewRisk?: UseMutationResult<QuestionResponseSchema, Error, QuestionCreatePayload, void>; // Update the type here
  updateNewRisk?: any;
  preflix?: string;
  causeData: CauseAnswerSchema[];
  processData: ProcessAnswerSchema[];
}


export enum QuestionSidebarItemStatus {
  InComplete = 'InComplete',
  Complete = 'Complete',
  Reject = 'reject',
  Override = 'override',
  ReSubmit = 'resubmit',
  Verify = 'verify',
  Issued = 'issued',
  Acceptable = 'Acceptable',
  InReview = 'InReview',
  acceptable = 'acceptable',
}
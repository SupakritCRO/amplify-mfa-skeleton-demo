import { CauseAnswerSchema, ProcessAnswerSchema, QuestionCreatePayload, QuestionResponseSchema, QuestionSchema, RootCauseSchema, SidebarSchema } from "@/client/rmi"
import { UseMutationResult } from "@tanstack/react-query"

export interface SaveDialogProps {
    setDialog: React.Dispatch<React.SetStateAction<boolean>>
    questionsScore?: QuestionSchema[]
    title: string
    iconBgColor: string
    iconTextColor: string
    childDialog: React.ReactNode
    onConfirm?: () => void
    companyId?: number
    isReject?: boolean
    scoreObj?: any
  }
  export interface defaultNewRiskData {
    riskName?: string
    riskDescription?: string
    rootCause?: RootCauseSchema[]
    riskCategory: string | undefined
    subCategory: string | undefined
    riskAssessmentId: number
    companyId: number | undefined
    departmentId: number | undefined
    riskCategoryId: number | undefined
  }
  
  export type NewRiskItem = {
    id: number
  }
  export interface defaultNewRiskData {
    riskName?: string
    riskDescription?: string
    rootCause?: RootCauseSchema[]
    riskCategory: string | undefined
    subCategory: string | undefined
    riskAssessmentId: number
    companyId: number | undefined
    departmentId: number | undefined
    riskCategoryId: number | undefined
    riskGroup: number | undefined
  }
  export interface NewRiskModalProps {
    title: string;
    handleOpenModal: boolean;
    setHandleOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    questionId?: number;
    createNewRisk?: UseMutationResult<QuestionResponseSchema, Error, QuestionCreatePayload, void>;
    updateNewRisk?: any;
    causeData: CauseAnswerSchema[];
    processData: ProcessAnswerSchema[];
    questions?: SidebarSchema[];
    defaultNewRiskData: defaultNewRiskData
  }
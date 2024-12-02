import { QuestionnaireStatus } from "@/Interfaces/Questionnaire"

export interface AssessmentBadgeProps {
  status: QuestionnaireStatus
}

export interface UserBadgeProps {
  username?: string
  date?: string
}

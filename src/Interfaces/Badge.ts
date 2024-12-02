import { questionStatus } from "./QuestionStatus"


export interface AssessmentBadgeProps {
  status: questionStatus
}

export interface UserBadgeProps {
  username?: string
  date?: string
}

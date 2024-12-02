export interface Column {
  columns: string[]
  section: string
}

export enum QuestionnaireStatus {
  in_completed = 'Incomplete',
  in_review = 'In Review',
  completed = 'Completed',
  Reopen = 'Re-open',
  Issued = 'Issued',
  verify = 'Verify approval',
  NotApprove = 'Not approve',
  Resubmit = 'Resubmit',
  NeedMoreInformation = 'Need more information',
  TimeExpired = 'Time expired',
}

export interface QuestionnaireData {
  questionnaire_id: string
  modified_timestamp: string
  columns?: Column[]
  created_timestamp: string
  createUser: {
    userGroup: string[]
    userId: string
    userName: string
  }
  impact: number
  bu?: string
  is_active: number
  status: QuestionnaireStatus
  questionnaire_name: string
  questions?: Question[]
  users: User[]
  users_for_query?: string[]
  n_questions: number
  n_confirm_questions: number
}

export interface Question {
  questions: string[]
  threatType: string
}

export interface User {
  user_id: string
  username: string
}

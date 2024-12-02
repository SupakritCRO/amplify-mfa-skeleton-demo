import { CauseAnswerSchema } from "@/client/rmi";

export interface CustomCauseAnswerSchema extends CauseAnswerSchema {
    isCustom?: boolean
}
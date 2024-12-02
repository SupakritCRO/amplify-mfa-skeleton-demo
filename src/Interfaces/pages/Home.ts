import { MultiValue } from "react-select"
import { Option } from "../Options"
import { DateRange } from "@/components/molecules/Interface/DropDown"

export interface FilterOptions {
    status: MultiValue<Option> | null
    assignee: MultiValue<Option> | null
    assigner: MultiValue<Option> | null
    assignedDate: DateRange | null
    modifiedDate: DateRange | null
}
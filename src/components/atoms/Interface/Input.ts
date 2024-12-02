export interface DatePickerProps {
  selected: Date | null
  dateFormat: string
  startDate?: Date | null
  endDate?: Date | null
  minDate?: Date | null
  maxDate?: Date | null
  showPicker?: boolean
  showIcon?: boolean
  iconColor?: string
  toggleCalendarOnIconClick?: boolean
  onChange: (date: Date | null) => void
  disabled?: boolean
  className?: string
}

export interface TextAreaProps {
  classname?: string
  placeholder?: string
  value?: string
  disabled?: boolean
  setValue?: (note: string) => void
  required?: boolean
}

export interface TextInputProps {
  widthStyle?: string
  placeholder?: string
  value?: string
  setValue?: (value: string) => void
  disabled?: boolean
  required?: boolean
  classname?: string
}
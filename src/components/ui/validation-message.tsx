
import { AlertCircle } from "lucide-react"

interface ValidationMessageProps {
  message: string
}

export function ValidationMessage({ message }: ValidationMessageProps) {
  return (
    <div className=" flex items-center space-x-2 animate-fade-in">
      <AlertCircle className="h-4 w-4 text-red-200 flex-shrink-0" />
      <span className="text-red-500 text-sm font-medium">{message}</span>
    </div>
  )
}

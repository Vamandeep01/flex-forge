
import { AlertCircle } from "lucide-react"

interface ValidationMessageProps {
  message: string
}

export function ValidationMessage({ message }: ValidationMessageProps) {
  return (
    <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 flex items-center space-x-2 animate-fade-in">
      <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
      <span className="text-red-400 text-sm font-medium">{message}</span>
    </div>
  )
}

import { AlertTriangle, Check, Info, Loader, X } from 'lucide-react'

export const toasterIcons = {
  success: (
    <span className="text-green-500">
      <Check className="h-4 w-4" />
    </span>
  ),
  close: (
    <span className="text-gray-500">
      <X className="h-4 w-4" />
    </span>
  ),
  loading: (
    <span className="text-yellow-500">
      <Loader className="h-4 w-4" />
    </span>
  ),
  error: (
    <span className="text-red-500">
      <X className="h-4 w-4" />
    </span>
  ),
  info: (
    <span className="text-blue-500">
      <Info className="h-4 w-4" />
    </span>
  ),
  warning: (
    <span className="text-yellow-500">
      <AlertTriangle className="h-4 w-4" />
    </span>
  ),
}

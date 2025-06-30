import { Bot, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Suggestion {
  id: string
  text: string
}

interface AiAssistantCardProps {
  suggestions?: Suggestion[]
}

const defaultSuggestions: Suggestion[] = [
  { id: '1', text: '3 of your listings need updated photos' },
  { id: '2', text: 'Client follow-up needed for Bukit Jalil condo' },
  { id: '3', text: '2 new WTB requests match your listings' },
]

export function AiAssistantCard({ suggestions = defaultSuggestions }: AiAssistantCardProps) {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary rounded-xl shadow-sm p-6 text-white w-full md:w-80">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">AI Assistant</h3>
        <Bot className="w-5 h-5" />
      </div>
      
      <p className="text-blue-100 text-sm mb-4">
        Your AI assistant has some suggestions for you today:
      </p>
      
      <ul className="space-y-3 mb-4">
        {suggestions.map((suggestion) => (
          <li key={suggestion.id} className="flex items-start">
            <Lightbulb className="text-yellow-300 mt-1 mr-2 w-4 h-4 flex-shrink-0" />
            <span className="text-sm">{suggestion.text}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant="ghost"
        className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 transition rounded-lg py-2 text-sm text-white border-none"
      >
        View All Suggestions
      </Button>
    </div>
  )
} 
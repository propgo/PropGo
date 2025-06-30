'use client'

import { useState } from 'react'
import { MessageSquare, Search, Phone, Video, MoreVertical, Send, Paperclip, Smile, Clock, CheckCheck, User, MapPin, Star, Archive, Trash2, Pin } from 'lucide-react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'

// Placeholder user data
const mockUser = {
  name: 'Sarah Lim',
  email: 'sarah@example.com',
  avatar: '/placeholder-avatar.jpg',
  role: 'Property Seeker'
}

// Mock conversations data
const conversations = [
  {
    id: 1,
    agentName: 'Ahmad Zulkifli',
    agentCompany: 'PropGo Elite Agents',
    agentAvatar: '/placeholder-agent1.jpg',
    propertyTitle: 'The Tropika, Bukit Jalil',
    propertyLocation: 'Bukit Jalil, KL',
    lastMessage: 'The owner is willing to negotiate on the price. Can we schedule a viewing this weekend?',
    lastMessageTime: '2023-06-23T14:30:00Z',
    unreadCount: 2,
    isOnline: true,
    isPinned: true,
    messages: [
      {
        id: 1,
        senderId: 'agent',
        senderName: 'Ahmad Zulkifli',
        content: 'Hello Sarah! Thank you for your interest in The Tropika. I can arrange a viewing for you.',
        timestamp: '2023-06-22T10:00:00Z',
        isRead: true
      },
      {
        id: 2,
        senderId: 'user',
        senderName: 'Sarah Lim',
        content: 'Hi Ahmad! Yes, I\'m very interested. What\'s the earliest viewing slot available?',
        timestamp: '2023-06-22T10:30:00Z',
        isRead: true
      },
      {
        id: 3,
        senderId: 'agent',
        senderName: 'Ahmad Zulkifli',
        content: 'Great! I have slots available this Saturday at 2pm or Sunday at 10am. Which works better for you?',
        timestamp: '2023-06-22T11:00:00Z',
        isRead: true
      },
      {
        id: 4,
        senderId: 'user',
        senderName: 'Sarah Lim',
        content: 'Saturday 2pm works perfectly. Also, is there any room for negotiation on the RM 850,000 asking price?',
        timestamp: '2023-06-23T09:00:00Z',
        isRead: true
      },
      {
        id: 5,
        senderId: 'agent',
        senderName: 'Ahmad Zulkifli',
        content: 'The owner is willing to negotiate on the price. Can we schedule a viewing this weekend?',
        timestamp: '2023-06-23T14:30:00Z',
        isRead: false
      }
    ]
  },
  {
    id: 2,
    agentName: 'Siti Rahman',
    agentCompany: 'KL Premium Properties',
    agentAvatar: '/placeholder-agent2.jpg',
    propertyTitle: 'KLCC Residence',
    propertyLocation: 'KLCC, KL',
    lastMessage: 'The tenancy agreement is ready for signing. When can you come to our office?',
    lastMessageTime: '2023-06-23T11:15:00Z',
    unreadCount: 1,
    isOnline: false,
    isPinned: false,
    messages: [
      {
        id: 1,
        senderId: 'agent',
        senderName: 'Siti Rahman',
        content: 'Hi Sarah! Your rental application for KLCC Residence has been approved!',
        timestamp: '2023-06-23T09:00:00Z',
        isRead: true
      },
      {
        id: 2,
        senderId: 'user',
        senderName: 'Sarah Lim',
        content: 'That\'s wonderful news! What are the next steps?',
        timestamp: '2023-06-23T09:30:00Z',
        isRead: true
      },
      {
        id: 3,
        senderId: 'agent',
        senderName: 'Siti Rahman',
        content: 'The tenancy agreement is ready for signing. When can you come to our office?',
        timestamp: '2023-06-23T11:15:00Z',
        isRead: false
      }
    ]
  },
  {
    id: 3,
    agentName: 'David Tan',
    agentCompany: 'Desa Properties Sdn Bhd',
    agentAvatar: '/placeholder-agent3.jpg',
    propertyTitle: 'Desa ParkCity',
    propertyLocation: 'Kepong, KL',
    lastMessage: 'I have some new landed properties in ParkCity that might interest you.',
    lastMessageTime: '2023-06-22T16:45:00Z',
    unreadCount: 0,
    isOnline: true,
    isPinned: false,
    messages: [
      {
        id: 1,
        senderId: 'agent',
        senderName: 'David Tan',
        content: 'Hello Sarah! I saw your interest in Desa ParkCity. The viewing went well I hope?',
        timestamp: '2023-06-22T15:00:00Z',
        isRead: true
      },
      {
        id: 2,
        senderId: 'user',
        senderName: 'Sarah Lim',
        content: 'Yes, the property is beautiful! However, the price is a bit above my budget.',
        timestamp: '2023-06-22T15:30:00Z',
        isRead: true
      },
      {
        id: 3,
        senderId: 'agent',
        senderName: 'David Tan',
        content: 'I have some new landed properties in ParkCity that might interest you.',
        timestamp: '2023-06-22T16:45:00Z',
        isRead: true
      }
    ]
  }
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [messageText, setMessageText] = useState('')

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString('en-MY', { hour: '2-digit', minute: '2-digit' })
    } else {
      return date.toLocaleDateString('en-MY', { month: 'short', day: 'numeric' })
    }
  }

  const sendMessage = () => {
    if (messageText.trim()) {
      // In real app, this would send the message via API
      console.log('Sending message:', messageText)
      setMessageText('')
    }
  }

  return (
    <DashboardLayout 
      title="Messages" 
      user={mockUser}
      notificationCount={5}
    >
      <div className="h-[calc(100vh-120px)] flex bg-gray-50">
        {/* Conversations List */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search conversations..." 
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div 
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                  selectedConversation.id === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-400" />
                    </div>
                    {conversation.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {conversation.agentName}
                        </h3>
                        {conversation.isPinned && (
                          <Pin className="w-3 h-3 text-gray-400" />
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs text-gray-500">
                          {formatTime(conversation.lastMessageTime)}
                        </span>
                        {conversation.unreadCount > 0 && (
                          <div className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {conversation.unreadCount}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <MapPin className="w-3 h-3 mr-1" />
                      {conversation.propertyTitle}
                    </div>
                    
                    <p className="text-sm text-gray-600 truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="bg-white border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                      {selectedConversation.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{selectedConversation.agentName}</h3>
                      <p className="text-sm text-gray-500">{selectedConversation.agentCompany}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Phone className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Video className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Property Info */}
                <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="font-medium">{selectedConversation.propertyTitle}</span>
                    <span className="mx-2">•</span>
                    <span>{selectedConversation.propertyLocation}</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedConversation.messages.map((message) => (
                  <div 
                    key={message.id}
                    className={`flex ${message.senderId === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-md ${message.senderId === 'user' ? 'order-2' : ''}`}>
                      <div className={`rounded-lg p-3 ${
                        message.senderId === 'user' 
                          ? 'bg-primary text-white' 
                          : 'bg-white border border-gray-200'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                      
                      <div className={`flex items-center mt-1 text-xs text-gray-500 ${
                        message.senderId === 'user' ? 'justify-end' : 'justify-start'
                      }`}>
                        <span>{formatTime(message.timestamp)}</span>
                        {message.senderId === 'user' && (
                          <div className="ml-2">
                            {message.isRead ? (
                              <CheckCheck className="w-3 h-3 text-blue-500" />
                            ) : (
                              <Clock className="w-3 h-3" />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="bg-white border-t border-gray-200 p-4">
                <div className="flex items-center space-x-3">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  
                  <div className="flex-1 relative">
                    <input 
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Type your message..."
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Smile className="w-5 h-5" />
                  </button>
                  
                  <button 
                    onClick={sendMessage}
                    className="bg-primary text-white p-2 rounded-lg hover:bg-secondary transition"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                <p className="text-gray-500">Choose a conversation from the list to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
} 
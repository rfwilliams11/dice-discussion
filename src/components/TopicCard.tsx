interface TopicCardProps {
  title: string
  content: string
  colorClass: string
}

const TopicCard = ({ title, content, colorClass }: TopicCardProps) => {
  const formatContent = (text: string) => {
    // Find text in quotes at the beginning and make it bold
    const quotedTitleMatch = text.match(/^"([^"]+)":(.*)/)
    
    if (quotedTitleMatch) {
      const [, quotedTitle, description] = quotedTitleMatch
      return (
        <>
          <strong>"{quotedTitle}"</strong>:{description}
        </>
      )
    }
    
    return text
  }

  const getColorClasses = (colorClass: string) => {
    switch (colorClass) {
      case 'general':
        return {
          title: 'text-blue-600 border-blue-600',
          card: 'hover:border-blue-200'
        }
      case 'ai-focused':
        return {
          title: 'text-green-600 border-green-600',
          card: 'hover:border-green-200'
        }
      case 'rose-thorn':
        return {
          title: 'text-red-600 border-red-600',
          card: 'hover:border-red-200'
        }
      default:
        return {
          title: 'text-gray-600 border-gray-600',
          card: 'hover:border-gray-200'
        }
    }
  }

  const colors = getColorClasses(colorClass)

  return (
    <div className={`
      bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-300 
      rounded-xl p-5 shadow-md transition-all duration-300 flex-1 
      min-w-72 max-w-sm hover:-translate-y-1 hover:shadow-lg 
      hover:from-white hover:to-gray-50 ${colors.card}
    `}>
      <h4 className={`
        m-0 mb-3 text-xl font-semibold text-center pb-2 
        border-b-2 ${colors.title}
      `}>
        {title}
      </h4>
      <p className="m-0 text-gray-700 leading-relaxed text-sm text-left">
        {formatContent(content)}
      </p>
    </div>
  )
}

export default TopicCard
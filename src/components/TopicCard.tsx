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

  return (
    <div className={`topic-card ${colorClass}`}>
      <h4 className="topic-card-title">{title}</h4>
      <p className="topic-card-content">{formatContent(content)}</p>
    </div>
  )
}

export default TopicCard
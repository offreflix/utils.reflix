interface ContentListProps {
  title: string
  items: string[]
  className?: string
}

export function ContentList({
  title,
  items,
  className = 'list-disc pl-6 my-4',
}: ContentListProps) {
  return (
    <>
      <h3 className="text-xl font-medium mt-6 mb-3">{title}</h3>
      <ul className={className}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

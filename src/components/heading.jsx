
export default function heading({heading}) {
  return (
    <h2 className="relative text-2xl font-bold text-gray-800 pb-2 mb-6">
    {heading}
    <span className="absolute left-0 bottom-0 w-36 h-[2px] bg-blue-600"></span>
  </h2>
  )
}

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return `${text.substring(0, maxLength)}...`
}

export const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}
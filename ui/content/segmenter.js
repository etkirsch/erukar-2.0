export function segmentSuggestions (suggestions) {
  const length = Math.ceil(suggestions.length / 3)
  const segmentedSuggestions = Array.from({ length }, (_, k) => 
    suggestions.slice(k*3, (k+1)*3)
  )
  return segmentedSuggestions
}

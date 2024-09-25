export function brightenColor(hexColor: string, factor = 0.1) {
  // Remove the '#' if present
  hexColor = hexColor.replace(/^#/, '')

  // Parse the hex color
  let r = parseInt(hexColor.substring(0, 2), 16)
  let g = parseInt(hexColor.substring(2, 4), 16)
  let b = parseInt(hexColor.substring(4, 6), 16)

  // Increase brightness
  r = Math.min(Math.round(r + (255 - r) * factor), 255)
  g = Math.min(Math.round(g + (255 - g) * factor), 255)
  b = Math.min(Math.round(b + (255 - b) * factor), 255)

  // Convert back to hex
  const brighterColor = `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`

  return brighterColor
}

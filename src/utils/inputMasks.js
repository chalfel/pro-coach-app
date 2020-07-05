const defaultFormatter = (text) => ({
  applyMask: (text) => text,
  getRawText: (text) => text
})

const formatters = {
  money: {
    applyMask: (text) => {
      const maxPrice = 1000
      const numericValue = parseFloat(text.replace(/[^0-9]/g, ''))
      console.log(`${numericValue} type ${typeof numericValue}`)
      if (isNaN(numericValue)) {
        return 'R$ 0,00'
      }

      return `R$ ${Math.min(maxPrice, numericValue / 100).toFixed(2)}`.replace(
        '.',
        ','
      )
    },
    getRawText: (text) => text.replace(',', '.').slice(3)
  }
}

export default (type) => {
  return formatters[type] || defaultFormatter
}

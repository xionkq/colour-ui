const darken = (color: string, amount = '10%') => {
  return `color-mix(in hsl, ${color}, black ${amount})`
}

const lighten = (color: string, amount: string) => {
  return `color-mix(in hsl, ${color}, white ${amount})`
}

const transparentize = (color: string, amount = '20%') => {
  return `color-mix(in hsl, ${color}, transparent ${amount})`
}

export default {
  darken,
  lighten,
  transparentize,
}

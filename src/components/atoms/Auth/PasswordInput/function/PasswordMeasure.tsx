export const evaluateStrength = (password: string): number => {
  let strength = 0

  if (password.length >= 12) strength++
  if (/[A-Z]/.test(password)) strength++
  if (/[0-9]/.test(password)) strength++
  // eslint-disable-next-line no-useless-escape
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) strength++

  return strength
}

export const getStrengthLabel = (strength: number): string => {
  switch (strength) {
    case 0:
      return ''
    case 1:
      return 'Weak'
    case 2:
      return 'Fair'
    case 3:
      return 'Good'
    case 4:
      return 'Strong'
    default:
      return ''
  }
}

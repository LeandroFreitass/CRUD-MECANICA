import CryptoJS from 'crypto-js'

export function onlyNumbers(value) {
  return value.toString().replace(/\D/g, '')
}

export function onlyNumbersTraceDot(value) {
  // aceita numeros, traço e ponto
  if (!value.match(/^[0-9.-]+$/g)) {
    value = value.replace(value.charAt([value.length - 1]), '')
    return value
  }
  return value
}

export function onlyNumbersCommaAndDot(value) {
  if (!value.match(/^([0-9]{1,6})+([0-9,]{1,3})?$/g)) {
    value = value.replace(value.charAt([value.length - 1]), '')
    return value
  }

  return value
}

export function onlyNumbersAndTrace(value) {
  // aceita numeros e traço
  if (!value.match(/^[0-9-]+$/g)) {
    value = value.replace(value.charAt([value.length - 1]), '')
    return value
  }
  return value
}

export function onlyNumbersAndDot(value) {
  //aceita números e ponto (e substitui vírgula por ponto)
  if (value.includes(',')) {
    value = value.replace(',', '.')
    return value
  }

  if (!value.match(/^[0-9.]+$/g)) {
    value = value
      .replace(value.charAt([value.length - 1]), '')
    return value
  }

  return value
}

export function onlyNumbersLetters(value) {
  // aceita letras e números
  if (!value.match(/^[A-Za-z0-9]+$/g)) {
    value = value.replace(value.charAt([value.length - 1]), '')
    return value
  }
  return value
}

export function maxLength(value, length) {
  return value.substring(0, length)
}

export function onlyLetters(value) {
  if (!value.match(/^[A-Za-z]+$/)) {
    var valueLength = value.length
    value = value.replace(value.charAt([valueLength - 1]), '')
  }
  return value
}
export function dosentAllowSpaces(value) {
  //Não permite espaços em branco
  if (!!value.match(/\s+/g)) {
    let valueLength = value.length
    value = value.replace(value.charAt([valueLength - 1]), '')
  }
  return value
}

export function onlyLettersAndSpace(value) {
  if (!value.match(/^[A-Za-zÀ-ü\s]+$/)) {
    var valueLength = value.length
    value = value.replace(value.charAt([valueLength - 1]), '')
  }
  return value
}

export function alfanumeric(value) {
  if (!!!value) return value
  return value.replace(/[^a-z0-9\s]/gi, '')
}

export function specialChar(value) {
  if (!value.match(/^[a-zA-Z0-9\s]+$/g)) {
    value = value.replace(value.charAt([value.length - 1]), '')
    return value
  }
  return value
}

export function specialChar2(value) {
  //PERMITE BARRA(NORMAL), TRAÇO E ESPAÇO
  if (!value.match(/^[a-zA-Z0-9/\-/-/\s]+$/g)) {
    value = value.replace(value.charAt([value.length - 1]), '')
    return value
  }
  return value
}

export function specialChar3(value) {
  //PERMITE BARRA(NORMAL), TRAÇO, ESPAÇO E PONTO
  if (!value.match(/^[a-zA-Z0-9/\-/-/./\s]+$/g)) {
    value = value.replace(value.charAt([value.length - 1]), '')
    return value
  }
  return value
}

export function specialChar4(value) {
  // ACEITA LETRAS, PONTUAÇÃO, NUMEROS, ESPAÇO
  if (!value.match(/^[a-zA-Z-çÇ-ãÃ-õÕ-àÀ-áÁ-úÚ\s0-9]+$/)) {
    value = value.replace(value.charAt([value.length - 1]), '')
    return value
  }
  return value
}

export function forName(value) {
  if (!value.match(/^[a-zA-Z-çÇ-ãÃ-õÕ-àÀ-áÁ-úÚ\s]+$/)) {
    // Regex antigo, aceita traço
    value = value.replace(value.charAt([value.length - 1]), '')
    return value
  }
  return value
}

export function description(value) {
  if (!value) return value

  if (value.match(/[$%^&*+|~@#%`{}\[\]<>\/]/)) {
    value = value.replace(value.charAt([value.length - 1]), '')
    return value
  }
  return value
}

export function description2(value) {
  if (!value) return value

  if (value.match(/[$%^&*+|~@#%`{}[\]<>]/)) {
    value = value.replace(value.charAt([value.length - 1]), '')
    return value
  }
  return value
}

export function name(value) {
  // Está aceitando ("!¨()´=´\')
  if (!value) return value

  // if (value.match(/[0-9$%^&*+|_~@#%`{}\[\]<>\.,;:?/-]/)) {
  if (!value.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)) {
    // Não aceita traço
    value = value.replace(value.charAt([value.length - 1]), '')
    return value
  }
  return value
}

export function email(value) {
  if (!value) return value

  if (!value.match(/^[a-zA-Z0-9\.\-_@]+$/g)) {
    value = value.replace(value.charAt([value.length - 1]), '')
    return value
  }
  return value
}

export const CFOPMask = (value) => {
  if (!value) {
    return value
  }

  const number = value.replace(/[^\d]/g, '')
  if (!number || number.length < 2) return number
  const cfop = number[0] + '.' + number.substring(1)

  return cfop.substring(0, 5)
}

export const ICMSFCPMask = (value) => {
  if (!value) {
    return value
  }

  const number = value.toString().replace(/[^\d]/g, '')
  if (!number || number.length < 2) return number
  const cfop = number.substring(0, 2) + ',' + number.substring(2, 4)

  return cfop
}

export const chaveDeAcessoMask = (value) => {
  if (!value) {
    return value
  }

  const number = value.replace(/[^\d]/g, '')
  if (!number || number.length < 4) return number
  return (
    number.substring(0, 4) +
    ' ' +
    number.substring(4, 8) +
    ' ' +
    number.substring(8, 12) +
    ' ' +
    number.substring(12, 16) +
    ' ' +
    number.substring(16, 20) +
    ' ' +
    number.substring(20, 24) +
    ' ' +
    number.substring(24, 28) +
    ' ' +
    number.substring(28, 32) +
    ' ' +
    number.substring(32, 36) +
    ' ' +
    number.substring(36, 40)
  )
}

export const phoneMask = (value) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')

  //Máscara para número comercial
  if (onlyNums.charAt([0]) === '0') {
    if (onlyNums.length <= 4) {
      return onlyNums
    }
    if (onlyNums.length === 4) {
      return onlyNums + '-'
    }
    if (onlyNums.length > 4 && onlyNums.length <= 7) {
      return onlyNums.substring(0, 4) + '-' + onlyNums.substring(4, 7)
    }
    if (onlyNums.length > 7) {
      return (
        onlyNums.substring(0, 4) +
        '-' +
        onlyNums.substring(4, 7) +
        '-' +
        onlyNums.substring(7, 11)
      )
    }
  }

  //Máscara para Celular
  if (onlyNums.charAt([2]) === '9') {
    if (onlyNums.length > 1 && onlyNums.length <= 2) {
      return '(' + onlyNums
    }
    if (onlyNums.length > 1 && onlyNums.length <= 3) {
      return '(' + onlyNums.substring(0, 2) + ') ' + onlyNums.substring(2, 3)
    }

    if (onlyNums.length > 3 && onlyNums.length <= 7) {
      return (
        '(' +
        onlyNums.substring(0, 2) +
        ') ' +
        onlyNums.substring(2, 3) +
        ' ' +
        onlyNums.substring(3, 7)
      )
    }

    if (onlyNums.length > 7) {
      return (
        '(' +
        onlyNums.substring(0, 2) +
        ') ' +
        onlyNums.substring(2, 3) +
        ' ' +
        onlyNums.substring(3, 7) +
        '-' +
        onlyNums.substring(7, 11)
      )
    }
    return onlyNums
  }

  //Máscara para Telefone fixo
  if (onlyNums.length >= 1 && onlyNums.length <= 2) {
    return '(' + onlyNums
  }

  if (onlyNums.length > 1 && onlyNums.length <= 3) {
    return '(' + onlyNums.substring(0, 2) + ') ' + onlyNums.substring(2, 3)
  }

  if (onlyNums.length > 3 && onlyNums.length <= 6) {
    return '(' + onlyNums.substring(0, 2) + ') ' + onlyNums.substring(2, 6)
  }

  if (onlyNums.length > 6) {
    return (
      '(' +
      onlyNums.substring(0, 2) +
      ') ' +
      onlyNums.substring(2, 6) +
      '-' +
      onlyNums.substring(6, 10)
    )
  }

  return onlyNums
}

export function cestMask(value) {
  if (!value) {
    return value
  }

  const onlyNums = value

  if (onlyNums.length > 5) {
    return (
      onlyNums.substring(0, 2) +
      '.' +
      onlyNums.substring(2, 5) +
      '.' +
      onlyNums.substring(5, 7)
    )
  }

  return onlyNums
}

export function cepMask(value) {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')

  if (onlyNums.length > 2 && onlyNums.length <= 5) {
    return onlyNums.substring(0, 2) + '.' + onlyNums.substring(2, 5)
  }

  if (onlyNums.length > 5) {
    return (
      onlyNums.substring(0, 2) +
      '.' +
      onlyNums.substring(2, 5) +
      '-' +
      onlyNums.substring(5, 8)
    )
  }

  return onlyNums
}

export function cnpjMask(value) {
  value = value.replace(/[^\d]/g, '')

  if (!value) return value

  if (value.length >= 3 && value.length < 6) {
    return value.substring(0, 2) + '.' + value.substring(2, 5)
  }

  if (value.length >= 6 && value.length < 9) {
    return (
      value.substring(0, 2) +
      '.' +
      value.substring(2, 5) +
      '.' +
      value.substring(5, 8)
    )
  }

  if (value.length >= 9 && value.length < 13) {
    return (
      value.substring(0, 2) +
      '.' +
      value.substring(2, 5) +
      '.' +
      value.substring(5, 8) +
      '/' +
      value.substring(8, 12)
    )
  }

  if (value.length >= 13 && value.length < 15) {
    return (
      value.substring(0, 2) +
      '.' +
      value.substring(2, 5) +
      '.' +
      value.substring(5, 8) +
      '/' +
      value.substring(8, 12) +
      '-' +
      value.substring(12, 15)
    )
  }

  return value
}

export function cpfMask(value) {
  value = value.replace(/[^\d]/g, '')
  if (!value) return value

  if (value.length >= 4 && value.length < 7) {
    return value.substring(0, 3) + '.' + value.substring(3, 6)
  }

  if (value.length >= 7 && value.length < 10) {
    return (
      value.substring(0, 3) +
      '.' +
      value.substring(3, 6) +
      '.' +
      value.substring(6, 9)
    )
  }

  if (value.length >= 10 && value.length <= 12) {
    return (
      value.substring(0, 3) +
      '.' +
      value.substring(3, 6) +
      '.' +
      value.substring(6, 9) +
      '-' +
      value.substring(9, 11)
    )
  }

  return value
}

export function cpfOrCnpjMask(value) {
  value = value.replace(/[^\d]/g, '')

  if (value.length > 11) return cnpjMask(value)
  return cpfMask(value)
}

export function kmMask(value) {
  value = value.replace(/[^\d]/g, '')
  if (!value) return value

  if (value.length > 3) {
    if (value.length >= 4 && value.length < 7) {
      return (
        value.substring(value.length - 6, value.length - 3) +
        '.' +
        value.substring(value.length - 3, value.length)
      )
    }

    if (value.length >= 7 && value.length < 10) {
      return (
        value.substring(value.length - 9, value.length - 6) +
        '.' +
        value.substring(value.length - 6, value.length - 3) +
        '.' +
        value.substring(value.length - 3, value.length)
      )
    }

    if (value.length >= 10 && value.length < 13) {
      return (
        value.substring(value.length - 12, value.length - 9) +
        '.' +
        value.substring(value.length - 9, value.length - 6) +
        '.' +
        value.substring(value.length - 6, value.length - 3) +
        '.' +
        value.substring(value.length - 3, value.length)
      )
    }
  }

  return value
}

export function RgMask(value) {
  value = value.replace(/[^a-zA-Z\d:]/g, '').toUpperCase()
  return value
}

export function milhar(value) {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value)
}

export function currency(value) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value)
}

export function percentage(value) {
  return Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 2,
  }).format(value / 100)
}

export function encrypt(value, key) {
  if (!value) return
  value = value.toString()
  if (!key) return
  key = key.toString()

  let crypto = CryptoJS.AES.encrypt(value, key)
  crypto = crypto.toString()

  while (crypto.includes('/')) {
    crypto = crypto.replace('/', 'Ç')
  }

  return crypto
}

export async function decrypt(value, key) {
  if (!value) return
  value = value.toString()

  while (value.includes('Ç') || value.includes(' ')) {
    value = value.replace('Ç', '/').replace(' ', '+')
  }

  let crypto = await CryptoJS.AES.decrypt(value, key)
  crypto = crypto.toString(CryptoJS.enc.Utf8)

  return crypto
}

export function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return 'n/a'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    if (i === 0) return `${bytes} ${sizes[i]})`
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`
  }
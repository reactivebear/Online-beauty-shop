export const format = (mask, value) => {
	const letters = /[^\sA-zÀ-ú]+/g
    const digits = /[^0-9]+/g
    let digitsValue = value.replace(digits, '')

    switch (mask) {
        case 'alphabet':
            return value.replace(letters, '')
        case 'digits':
            return digitsValue
        case 'date':
            if (digitsValue.length > 8) {
                digitsValue = digitsValue.slice(0, 8)
            }
            if (digitsValue.length >= 5) {
                digitsValue = `${digitsValue.slice(0,2)}/${digitsValue.slice(2,4)}/${digitsValue.slice(4)}`
            } else if (digitsValue.length >= 3) {
                digitsValue = `${digitsValue.slice(0,2)}/${digitsValue.slice(2)}`
            }
            return digitsValue
        case 'cpf':
            if (digitsValue.length > 11) {
                digitsValue = digitsValue.slice(0, 11)
            }
            if (digitsValue.length >= 10) {
                digitsValue = `${digitsValue.slice(0,3)}.${digitsValue.slice(3,6)}.${digitsValue.slice(6,9)}-${digitsValue.slice(9)}`
            } else if (digitsValue.length >= 7) {
                digitsValue = `${digitsValue.slice(0,3)}.${digitsValue.slice(3,6)}.${digitsValue.slice(6)}`
            } else if (digitsValue.length >= 4) {
                digitsValue = `${digitsValue.slice(0,3)}.${digitsValue.slice(3)}`
            }
            return digitsValue
        case 'phone':
            if (digitsValue.length > 10) {
                digitsValue = digitsValue.slice(0, 10)
            }
            if (digitsValue.length >= 7) {
                digitsValue = `(${digitsValue.slice(0,2)})${digitsValue.slice(2,6)}-${digitsValue.slice(6)}`
            } else if (digitsValue.length >= 3) {
                digitsValue = `(${digitsValue.slice(0,2)})${digitsValue.slice(2)}`
            }
            return digitsValue
        case 'cep':
            if (digitsValue.length > 8) {
                digitsValue = digitsValue.slice(0, 8)
            }
            if (digitsValue.length >= 6) {
                digitsValue = `${digitsValue.slice(0,5)}-${digitsValue.slice(5)}`
            }
            return digitsValue
        default:
            return value
    }
}
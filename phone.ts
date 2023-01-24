import { getRandomDigit, getRandomNumber } from './utils.ts'

function fillDigits(string: string) {
	return string
		.split('')
		.map(letter => {
			if (letter === 'D') return getRandomNumber(1, 20) < 20 ? 1 : getRandomNumber(1, 999)
			if (letter === 'd') return getRandomDigit()

			return letter
		})
		.join('')
}

/** Gets a random phone number */
export function getRandomPhoneNumber() {
	return fillDigits('+D(ddd)ddd-dddd')
}

/** Gets a random phone number that is not formatted */
export function getRandomRawPhoneNumber() {
	return fillDigits('Ddddddddddd')
}

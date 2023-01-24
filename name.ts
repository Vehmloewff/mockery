import { getRandomArrayItem, getRandomNumber } from './utils.ts'
import { female, male, surnames } from './raw/names.json' assert { type: 'json' }

/** Gets a random male name */
export function getRandomMaleName() {
	const firstName = getRandomArrayItem(male)
	const lastName = getRandomArrayItem(surnames)

	return { firstName, lastName }
}

/** Gets a random female name */
export function getRandomFemaleName() {
	const firstName = getRandomArrayItem(female)
	const lastName = getRandomArrayItem(surnames)

	return { firstName, lastName }
}

/** Gets a random name (male or female) */
export function getRandomName() {
	const isMale = getRandomNumber(1, 2) === 1

	return isMale ? getRandomMaleName() : getRandomFemaleName()
}

/** Gets a random email address */
export function getRandomEmail() {
	const { firstName, lastName } = getRandomName()

	return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`
}

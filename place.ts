import { ensureNoPeriodsOrCaps, ensureStartsWithCapLetter, getRandomString } from './text.ts'
import { getRandomArrayItem, getRandomNumber, getRandomSwitch } from './utils.ts'
import places from './raw/us_places.json' assert { type: 'json' }

/** Gets a random state */
export function getRandomState() {
	return getRandomArrayItem(Object.keys(places))
}

/** Gets a random city */
export function getRandomCity() {
	return getRandomArrayItem(getRandomArrayItem(Object.values(places)))
}

/** Get random city and state */
export function getRandomCityAndState() {
	const state = getRandomState()
	const city = getRandomArrayItem(places[state as keyof typeof places])

	return { city, state }
}

/** Get a random street */
export function getRandomStreet() {
	const roadTypes = ['Dr', 'St', 'Ct', 'Rd']

	const getRandomSingleName = () => ensureStartsWithCapLetter(ensureNoPeriodsOrCaps(getRandomString(1)))

	const street = getRandomSwitch() ? `${getRandomSingleName()} ${getRandomSingleName()}` : getRandomSingleName()

	return `${street} ${getRandomArrayItem(roadTypes)}`
}

/** Get a random zip code */
export function getRandomZipCode() {
	return `${getRandomNumber(10000, 99999)}`
}

/** Get a random address */
export function getRandomAddress() {
	const { city, state } = getRandomCityAndState()

	return `${getRandomStreet()}\n${city},${state}\n${getRandomZipCode()}`
}

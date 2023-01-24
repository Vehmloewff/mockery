import { getRandomArrayItem, getRandomArraySubset, getRandomNumber } from './utils.ts'
import lipsum from './raw/lipsum.json' assert { type: 'json' }

/** Get's a random node. A node is either a sentence, paragraph, title, or list */
export function getRandomNode() {
	const typeOption = getRandomNumber(1, 4)

	if (typeOption === 1) return getRandomSentence()
	if (typeOption === 2) return getRandomParagraph()
	if (typeOption === 3) return getRandomTitle()

	return getRandomList(getRandomNumber(2, 10))
}

/** Get's a random list of bullet points */
export function getRandomList(length: number) {
	const items = []

	for (let index = 0; index <= length; index++) items.push(getRandomPhrase())

	return items.map(item => `- ${item}`).join('\n')
}

/** Get's a random title. A title has mostly capital letters and no period */
export function getRandomTitle() {
	const words = ensureNoPeriodsOrCaps(getRandomString(getRandomNumber(2, 10))).split(/\s+/)

	return words
		.map((word, index) => {
			if (word.length <= 3 && index !== 0) return word

			return ensureStartsWithCapLetter(word)
		})
		.join(' ')
}

/** Gets a random collection of nodes */
export function getRandomBody(nodeLength: number) {
	const nodes = []

	for (let index = 0; index < nodeLength; index++) {
		nodes.push(getRandomNode())
	}

	return nodes.join('\n\n')
}

/** Ensure that `text` ends with a period */
export function ensureEndsWithPeriod(text: string) {
	if (!text.length) throw new Error('There must be some text to ensure that it ends with a period')

	if (text.endsWith('.')) return text

	return `${text}.`
}

/**
 * Gets a random phrase. A phrase in this case being a section of text that starts with aa capital letter,
 * does not end with a period, and is about a sentence in length.
 */
export function getRandomPhrase() {
	let text = getRandomString(getRandomNumber(5, 25))

	if (text.length > 399) text = text.slice(0, 399).trim()

	return ensureStartsWithCapLetter(ensureNoPeriodsOrCaps(text))
}

/** Gets a random sentence */
export function getRandomSentence() {
	const text = getRandomString(getRandomNumber(5, 25))

	return ensureStartsWithCapLetter(ensureEndsWithPeriod(ensureNoPeriodsOrCaps(text)))
}

/** Ensure `text` starts with a capital letter */
export function ensureStartsWithCapLetter(text: string) {
	if (!text.length) throw new Error('There must be text to ensure it starts with a capital letter')

	return `${text[0].toUpperCase()}${text.slice(1)}`
}

/** Ensure `text` has no periods or capital letters */
export function ensureNoPeriodsOrCaps(text: string) {
	return text.toLowerCase().replaceAll('.', '').replaceAll(',', '').replaceAll(';', '')
}

/** Gets a random paragraph */
export function getRandomParagraph() {
	return getRandomArrayItem(lipsum)
}

/** Gets a random string of lorem ipsum */
export function getRandomString(wordLength: number) {
	const words = getRandomParagraph().split(/\s+/)

	return getRandomArraySubset(words, wordLength).join(' ')
}

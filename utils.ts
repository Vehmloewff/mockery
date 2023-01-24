export function getRandomNumber(min: number, max: number) {
	min = Math.ceil(min)
	max = Math.floor(max)

	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomDigit() {
	return getRandomNumber(0, 9)
}

export function getRandomArraySubset<T>(array: T[], length: number) {
	if (length > array.length) throw new Error('Cannot choose a subset that is larger than the array')

	const playtimeArray = [...array]
	const subsetArray = []

	while (subsetArray.length < length) {
		// Get the random item to add to the subset
		const targetIndex = getRandomArrayIndex(playtimeArray)
		const targetItem = playtimeArray[targetIndex]

		// Remove that item from the selection so that it is not selected again
		playtimeArray.splice(targetIndex, 1)

		// Add item to the subset array
		subsetArray.push(targetItem)
	}

	return subsetArray
}

export function getRandomArrayItem<T>(array: T[]) {
	return array[getRandomArrayIndex(array)]
}

export function getRandomArrayIndex<T>(array: T[]) {
	if (!array.length) throw new Error('Cannot choose random index of array because it is empty')

	return getRandomNumber(0, array.length - 1)
}

export function getRandomSwitch() {
	return getRandomNumber(1, 2) === 1
}

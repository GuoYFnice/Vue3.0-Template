export function utf8ToFile(dataURI) {
	const binary = atob(dataURI.split(',')[1])
	const array = []
	for (let i = 0; i < binary.length; i++) {
		array.push(binary.charCodeAt(i))
	}
	const newBlob = new Blob([new Uint8Array(array)], { type: 'image/jpeg' })
	return new File([newBlob], `${new Date()}.jpg`)
}

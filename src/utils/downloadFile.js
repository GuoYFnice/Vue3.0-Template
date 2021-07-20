/* 
下载文件流方法
*/
export function downloadFile(data, name, fileType, showTime) {
	const fileList = {
		word: 'application/msword',
		zip: 'application/zip',
		excel: 'application/vnd.ms-excel',
	}
	const blob = new Blob([data], { type: fileList[fileType] })
	const linkNode = document.createElement('a')
	const time = filters.formatTime('YYYYmmddHHMMSS', new Date())
	linkNode.download = `${showTime ? time : null}${name}.docx`
	linkNode.style.display = 'none'
	linkNode.href = URL.createObjectURL(blob)
	document.body.appendChild(linkNode)
	linkNode.click()
	URL.revokeObjectURL(linkNode.href)
	document.body.removeChild(linkNode)
}

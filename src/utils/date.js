export const getDate = date => {
	[date] = date.split('T')
	const [y, m, d] = date.split('-')
	return `${d}/${m}/${y}`
}

export const getFullDate = data => {
	const [date, time] = data.split('T')
	const [y, m, d] = date.split('-')
	const [hour, min] = time.split('+')[0].split(':')
	return `${d}/${m}/${y} - ${hour}h${min}`
}
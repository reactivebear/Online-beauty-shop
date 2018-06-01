export const getDate = date => {
	[date] = date.split('T')
	const [y, m, d] = date.split('-')
	return `${d}/${m}/${y}`
}
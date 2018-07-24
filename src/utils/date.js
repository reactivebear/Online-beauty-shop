export const getDate = date => {
	[date] = date.split('T')
	const [y, m, d] = date.split('-')
	return `${d}/${m}/${y}`
}

export const getTime = date => {
    const [, temp] = date.split('T')
    const [time] = temp.split('+')
    const [h] = time.split(':')
    return h
}

export const getFullDate = data => {
	const [date, time] = data.split('T')
	const [y, m, d] = date.split('-')
	const [hour, min] = time.split('+')[0].split(':')
	return `${d}/${m}/${y} - ${hour}h${min}`
}

export const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const names = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    let days = [];
    while (date.getMonth() === month) {
        days.push({ date: date.getDate(), day: names[date.getDay()] });
        date.setDate(date.getDate() + 1);
    }
    return days;
}

export const getCurrentDate = () => {
    const current = new Date()
    const month = current.getMonth()+1 > 9 ? current.getMonth()+1 : `0${current.getMonth()+1}`
    
    return `${current.getFullYear()}-${month}-${current.getDate()}`
}

export const getLastDateMonth = () => {
    const current = new Date()
    const last = new Date(current.getFullYear(), current.getMonth() + 1, 0)
    const month = last.getMonth()+1 > 9 ? last.getMonth()+1 : `0${last.getMonth()+1}`

    return `${last.getFullYear()}-${month}-${last.getDate()}`
}
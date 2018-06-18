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

export const getDaysInMonth = (month, year) => {
         const date = new Date(year, month, 1);
         const names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
         let days = [];
         while (date.getMonth() === month) {
            days.push({ date: date.getDate(), day: names[date.getDay()] });
            date.setDate(date.getDate() + 1);
         }
         return days;
    }
export default class Distance {
	static get = (lat1, lon1, lat2, lon2) => {
		let radlat1 = Math.PI * lat1/180
		let radlat2 = Math.PI * lat2/180
		let theta = lon1-lon2
		let radtheta = Math.PI * theta/180
		let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		dist = Math.acos(dist)
		dist = dist * 180/Math.PI
		dist = dist * 60 * 1.1515
		return `${(dist * 1.609344).toFixed(1)} km`
	}
}
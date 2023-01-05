
const App = async () => {
	const place = document.querySelector('#app')

	fetch('api/server')
		.then(response => response.json())
		.then(data => data.map(item => `
			<li>
				${item.name} ${item.status}
			</li>
	`))
		.then(result => place.innerHTML = result)

}
App();


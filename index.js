console.log('AVERTISSEMENT')
	
alert('CONSEIL : Si vous voulez soutenir notre plateforme, veuillez autoriser les notifications. Nous sommes rénumérés au CPC (coût par click) donc lorsque vous cliquer sur une notification nous percevrons environ 0.02$. Cela nous permettra de retirer petit-à-petit les pop-up. A VOUS DE JOUER !')


const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"

	})
})

/*window.open("https://www.dailymotion.com/playlist/x78viq", "Partenaires Dailymotion", "height=XXX, width=XXX, resizable=yes, menubar=yes, toolbar=no, location=no, status=no, scrollbars=no");
*/
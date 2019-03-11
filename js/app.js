const sidenavOverlay = document.querySelector('.sidenav-overlay'),
x = document.querySelector('.x'),
hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
	sidenavOverlay.classList.remove('sidenav-overlay-none');
});
x.addEventListener('click', vanished);
sidenavOverlay.addEventListener('click', vanished);
function vanished(){
	sidenavOverlay.classList.add('sidenav-overlay-vanished');
	setTimeout(()=>{
		sidenavOverlay.classList.remove('sidenav-overlay-vanished');
		sidenavOverlay.classList.add('sidenav-overlay-none');
	}, 500);
}
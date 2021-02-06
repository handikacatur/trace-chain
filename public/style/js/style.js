const nav = document.querySelectorAll('.sidenav');
nav.forEach((e) => M.Sidenav.init(e));

const scrollspy = document.querySelectorAll('.scrollspy');
const navlinks = document.querySelectorAll('.navlinks');

window.onscroll = () => {
    let position = document.documentElement.scrollTop || document.body.scrollTop;
    
    scrollspy.forEach((e) => {
        if (e.offsetTop <= position && e.offsetTop + e.offsetHeight > position) {
            e.classList.add('active');
            navlinks.forEach((nav) => {
                nav.href.search(e.id) !== -1 ? nav.parentElement.classList.add('active') : nav.parentElement.classList.remove('active');
            });
            console.log(e.id)
        } else  {
            e.classList.remove('active');
        }
    });
}

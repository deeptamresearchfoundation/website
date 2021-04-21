function onloadispreload() {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('bodycontent').style.display = 'block';
    a = $(".navbar");
    a.addClass('sticky-top');
}
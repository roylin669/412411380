function openi(index){
    const c = document.getElementsByClassName('center')[0];
    console.log(c);
    switch(index){
        case 1:
            c.innerHTML = '<iframe src="w8/card.html" frameborder="1"></iframe>';
            break;
        case 2:
            c.innerHTML = '<iframe src="w8/blog-media.html" frameborder="1"></iframe>';
            break;
        case 3:
            c.innerHTML = '<iframe src="w8/blog-minmax.html" frameborder="1"></iframe>';
            break;

    }
    console.log(index);
}
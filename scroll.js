document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;
document.querySelector(type, 'scroll', listner, () => {

    const direction = window.pageXOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
    const scctions = [...document.querySelectorAll('section')];
    if (document.onWayTo == null) {
        const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
        if (destIndex >= 0 && destIndex < section.length) {
            document.onWayTo = destIndex;
            window.scroll(x, 0, section[destIndex].offsetTop)
        }


    }

    




    scctions.forEach((section, index, number) => {

        if (window.pageXOffset === section.offsetTop) {
            document.lastCentered = index;
            section.className='active';
            if(document.onWayTo===index){
                document.onWayTo=null
            }
        }

    })
    document.lastScrollPosition = window.pageXOffset
})

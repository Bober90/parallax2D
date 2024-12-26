const parallaxBox=document.querySelector('.parallax');
const layers=parallaxBox.querySelectorAll('.parallax__layer');

const parallax= (evt) =>{

    const parallaxWidth=parallaxBox.offsetWidth;
    const parallaxHeight=parallaxBox.offsetHeight;

    const coordX= evt.clientX - parallaxWidth / 2;
    const coordY= evt.clientY - parallaxHeight / 2;

    layers.forEach (layer =>{
        const layerSpead=layer.dataset.speed;
        const x =(coordX * layerSpead).toFixed(1);
        const y =(coordY * layerSpead).toFixed(1);

        layer.setAttribute('style', `transform:translate(${x}px, ${y}px)`)
    });
}

const stopParallax=(evt) =>{
    layers.forEach(leyer => {
        layer.removeAttribute('style')
    });
}


parallaxBox.addEventListener('mousemove', parallax);
parallaxBox.addEventListener('mouseleave', stopParallax);
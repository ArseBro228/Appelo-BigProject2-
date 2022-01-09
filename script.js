document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        if(parent.classList.contains('accordion-item__active')){
            parent.classList.remove('accordion-item__active');
        }
        else{
            document
            .querySelectorAll('.accordion-item')
            .forEach((child) => child.classList.remove('accordion-item__active'))
            parent.classList.add('accordion-item__active');
        }
    })
)

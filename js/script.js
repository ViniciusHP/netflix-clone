const links = document.querySelectorAll('#navegacao a')
const optionsScrollIntoView = {block: 'start', behavior: 'smooth'};

// Adiciona scroll suave até a seção que o link do menu está referenciando
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const anchor = event.target;
    const hash = anchor.hash;
    console.log(anchor)
    document.querySelector(hash).scrollIntoView(optionsScrollIntoView);
  })
})

/* Adicionado popup com as informações do poster */
const posters = document.querySelectorAll('[data-info]');
let abrirPopUp = false; // Variável que contrala se o o clique do mouse foi para movimentar o carousel ou para exibir o popup

posters.forEach(p => {

  p.addEventListener('click', (event) => {
    abrirPopUp = true;
    const elementoImg = event.target;

    setTimeout(() => {

      /* Se não houver movimentação do mouse o popup será aberto*/
      if(abrirPopUp){
        
        const titulo = elementoImg.dataset.titulo;
        const sinopse = elementoImg.dataset.sinopse;
        const imgSrc = elementoImg.getAttribute('src');
        const imgAlt = elementoImg.getAttribute('alt');

        Swal.fire({
          title: titulo,
          showCancelButton: true,
          imageUrl: imgSrc,
          imageHeight: 400,
          imageAlt: imgAlt,
          text: sinopse,
          confirmButtonText: '<i class="fas fa-play-circle"></i>Assistir',
          cancelButtonText: `<i class="fas fa-times-circle"></i>Fechar`
        })
      }
    }, 100)
  })

  /* Se houver movimentação do mouse, está movimentando o carousel*/
  p.addEventListener('mousemove', () => {
    abrirPopUp = false;
  })
})
// const modalFormUpload = document.querySelector('.modal-form-upload');
// const uploadForm = document.getElementById('uploadForm');
// const btnIniciarAddFoto = document.getElementById('btn-iniciar-add-foto');

// const abrirAreaSelecaoImagens = () => {
//     btnIniciarAddFoto.classList.add('botao-add-foto-clicado');
//     btnIniciarAddFoto.classList.remove('botao-add-foto-retira-animacao');

//     setTimeout(() => {
//         modalFormUpload.classList.add('mostrar-popup-upload-imagem');
//         uploadForm.classList.add('animacao-descendente-form');
//     }, 600);
// }

// const cancelar = () => {
//     modalFormUpload.classList.remove('mostrar-popup-upload-imagem');
//     uploadForm.classList.remove('animacao-descendente-form');
//     areaFotosPreSelecionadas.classList.add('ocultar');
//     previewContainer.innerHTML = '';
//     totalInicialDeFotos.textContent = '';

//     setTimeout(() => {
//         btnIniciarAddFoto.classList.remove('botao-add-foto-clicado');
//         btnIniciarAddFoto.classList.add('botao-add-foto-retira-animacao');
//     }, 100)
// }

// const areaFotosPreSelecionadas = document.querySelector('.area-fotos-pre-selecionadas');
// const totalInicialDeFotos = document.querySelector('.total-inicial');
// const previewContainer = document.getElementById('previewContainer');
// const viewContainer = document.getElementById('viewContainer');
// const buttonConfirmar = document.getElementById('confirmar');

// let urlsImagens = [];

// function uploadFiles() {
//     const fileInput = document.getElementById('fileInput');
//     const files = fileInput.files;
//     totalInicialDeFotos.textContent = '';

//     if (files.length === 0) {
//         alert('Por favor, selecione pelo menos um arquivo.');
//         return;
//     }
    
//     if (files.length > 7) {
//       alert('Você só pode enviar até 7 imagens.');
//       buttonConfirmar.setAttribute('disabled', 'disabled');
//       return;
//     }
  
//     totalInicialDeFotos.textContent = files.length;
//     previewContainer.innerHTML = '';
//     urlsImagens = [];
//     areaFotosPreSelecionadas.classList.remove('ocultar');

//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];
//       const reader = new FileReader();
  
//       reader.onload = function (e) {
//         const imgPreview = document.createElement('img');
//         imgPreview.src = e.target.result;
//         imgPreview.alt = `Imagem ${i + 1}`;
//         previewContainer.appendChild(imgPreview);

//         urlsImagens.push(imgPreview.src);
//         buttonConfirmar.removeAttribute('disabled');
//     };
    
//      reader.readAsDataURL(file);
//     }
// }

// function abrirEscolhas() {
//     previewContainer.innerHTML = '';
//     fileInput.value = '';
// }

// function confirmarFotos() {
//     areaFotosPreSelecionadas.classList.add('ocultar');
//     buttonConfirmar.setAttribute('disabled', 'disabled');
//     btnIniciarAddFoto.classList.remove('botao-add-foto-clicado');
//     btnIniciarAddFoto.classList.add('botao-add-foto-retira-animacao');
//     renderizarSlides(urlsImagens);

//     localStorage.setItem('imagensSlide', JSON.stringify(urlsImagens));

//     cancelar();
// }

// // Area dos slides
// const slides = document.querySelectorAll('.slide');
// const indiceImagem = document.getElementById('indiceImagem');
// const imagens = document.querySelector('.imagens');
// let contador = 0;

// function renderizarSlides(listaImagens) {
//     imagens.innerHTML = '';
//     contador = 0;

//     listaImagens.forEach((slide, index) => {
//         const imagem = document.createElement('img');
//         imagem.src = listaImagens[index];
//         if(urlsImagens.length) {
//             imagem.src = urlsImagens[index];
//         }
//         imagem.alt = `Imagem ${index + 1}`;
//         imagens.appendChild(imagem);
//         imagem.style.left = `${index * 100}%`;
//     })
//     indiceImagem.innerText = `${contador + 1}/${imagens.children.length}`;
// }

// // area localStorage
// const imagensNoLocalStorage = [];

// document.addEventListener('DOMContentLoaded', () => {
//     if(localStorage.getItem('imagensSlide')) {
//         const arrayRecuperado = JSON.parse(localStorage.getItem('imagensSlide'));
//         arrayRecuperado.forEach(imagem => {
//             imagensNoLocalStorage.push(imagem);
//         })
    
//         renderizarSlides(imagensNoLocalStorage);
//     }
// });

// const verAnterior = () => {
//     if(!contador) {
//         contador = imagens.children.length - 1;
//         slideImage();
//     } else {
//         contador--;
//         slideImage();
//     }
// };

// const verProximo = () => {
//     if(contador == imagens.children.length - 1) {
//         contador = 0;
//         slideImage();
//     } else {
//         contador++;
//         slideImage();
//     }
// };

// const slideImage = () => {
//     Object.values(imagens.children).forEach(slide => {
//         slide.style.transform = `translateX(-${contador * 100}%)`;
//         indiceImagem.innerText = `${contador + 1}/${imagens.children.length}`;
//     })
// };




























const modalFormUpload = document.querySelector('.modal-form-upload');
const uploadForm = document.getElementById('uploadForm');
const btnIniciarAddFoto = document.getElementById('btn-iniciar-add-foto');

const abrirAreaSelecaoImagens = () => {
    btnIniciarAddFoto.classList.add('botao-add-foto-clicado');
    btnIniciarAddFoto.classList.remove('botao-add-foto-retira-animacao');

    setTimeout(() => {
        modalFormUpload.classList.add('mostrar-popup-upload-imagem');
        uploadForm.classList.add('animacao-descendente-form');
    }, 600);
}

const cancelar = () => {
    modalFormUpload.classList.remove('mostrar-popup-upload-imagem');
    uploadForm.classList.remove('animacao-descendente-form');
    areaFotosPreSelecionadas.classList.add('ocultar');
    previewContainer.innerHTML = '';
    totalInicialDeFotos.textContent = '';

    setTimeout(() => {
        btnIniciarAddFoto.classList.remove('botao-add-foto-clicado');
        btnIniciarAddFoto.classList.add('botao-add-foto-retira-animacao');
    }, 100)
}

const areaFotosPreSelecionadas = document.querySelector('.area-fotos-pre-selecionadas');
const totalInicialDeFotos = document.querySelector('.total-inicial');
const previewContainer = document.getElementById('previewContainer');
const viewContainer = document.getElementById('viewContainer');
const buttonConfirmar = document.getElementById('confirmar');

let urlsImagens = [];

function uploadFiles() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    totalInicialDeFotos.textContent = '';

    if (files.length === 0) {
        alert('Por favor, selecione pelo menos um arquivo.');
        return;
    }
    
    if (files.length > 7) {
      alert('Você só pode enviar até 7 imagens.');
      buttonConfirmar.setAttribute('disabled', 'disabled');
      return;
    }
  
    totalInicialDeFotos.textContent = files.length;
    previewContainer.innerHTML = '';
    urlsImagens = [];
    areaFotosPreSelecionadas.classList.remove('ocultar');

    const imagePromises = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
        reader.onload = async function (e) {
            const base64 = e.target.result;
    
            try {
                // const { resized, original } = await resizeImage(base64, 800, 600);
                const { width, height } = await getImageDimensions(base64);
                const originalImage = { width, height, url: base64 };
                const imgPreview = document.createElement('img');
                // imgPreview.src = resized;
                imgPreview.src = base64;
                imgPreview.alt = `Imagem ${i + 1}`;
                previewContainer.appendChild(imgPreview);
        
                // urlsImagens.push({ resized, original });
                urlsImagens.push(originalImage);
                buttonConfirmar.removeAttribute('disabled');
            } catch (error) {
                console.error('Erro ao redimensionar imagem:', error);
                alert('Erro ao redimensionar imagem:', error);
            }
        };
    
     reader.readAsDataURL(file);
    }
}







function abrirEscolhas() {
    previewContainer.innerHTML = '';
    fileInput.value = '';
}

function confirmarFotos() {
    areaFotosPreSelecionadas.classList.add('ocultar');
    buttonConfirmar.setAttribute('disabled', 'disabled');
    btnIniciarAddFoto.classList.remove('botao-add-foto-clicado');
    btnIniciarAddFoto.classList.add('botao-add-foto-retira-animacao');
    renderizarSlides(urlsImagens);

    const salvoAnteriormente = localStorage.getItem('imagensSlide');
    localStorage.setItem('imagensSlide', JSON.stringify(urlsImagens));
    if(localStorage.getItem('imagensSlide') != salvoAnteriormente) {
        alert('não salvo');
    }
    // localStorage.setItem('imagensSlide', JSON.stringify(urlsImagens.map(img => img.original)));
    // localStorage.setItem('imagensSlide', JSON.stringify(urlsRedimensionadas));

    cancelar();
}

// Area dos slides
const slides = document.querySelectorAll('.slide');
const indiceImagem = document.getElementById('indiceImagem');
const imagens = document.querySelector('.imagens');
let contador = 0;

function renderizarSlides(listaImagens) {
    imagens.innerHTML = '';
    contador = 0;

    // listaImagens.forEach((slide, index) => {
    //     const imagem = document.createElement('img');
    //     imagem.src = listaImagens[index];
    //     if(urlsImagens.length) {
    //         imagem.src = urlsImagens[index];
    //     }
    //     imagem.alt = `Imagem ${index + 1}`;
    //     imagens.appendChild(imagem);
    //     imagem.style.left = `${index * 100}%`;
    // })
    // indiceImagem.innerText = `${contador + 1}/${imagens.children.length}`;


    listaImagens.forEach((image, index) => {
        const imagem = document.createElement('img');
        imagem.src = image.url;
        imagem.alt = `Imagem ${index + 1}`;
        imagens.appendChild(imagem);
        // imagem.style.width = `${image.width}px`; // Adicione esta linha para definir a largura da imagem
        // imagem.style.height = `${image.height}px`; // Adicione esta linha para definir a altura da imagem
        imagem.style.left = `${index * 100}%`;
      });
      indiceImagem.innerText = `${contador + 1}/${imagens.children.length}`;
}

// area localStorage
const imagensNoLocalStorage = [];

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('imagensSlide')) {
        const arrayRecuperado = JSON.parse(localStorage.getItem('imagensSlide'));
        arrayRecuperado.forEach(imagem => {
            imagensNoLocalStorage.push(imagem);
        })
    
        renderizarSlides(imagensNoLocalStorage);
    }
});





// function resizeImage(base64, maxWidth, maxHeight) {
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       img.src = base64;
  
//       img.onload = () => {
//         let width = img.width;
//         let height = img.height;
  
//         if (width > maxWidth) {
//           height *= maxWidth / width;
//           width = maxWidth;
//         }
  
//         if (height > maxHeight) {
//           width *= maxHeight / height;
//           height = maxHeight;
//         }
  
//         const canvas = document.createElement('canvas');
//         const ctx = canvas.getContext('2d');
//         canvas.width = width;
//         canvas.height = height;
  
//         ctx.drawImage(img, 0, 0, width, height);
  
//         resolve(canvas.toDataURL('image/jpeg'));
//       };
  
//       img.onerror = reject;
//     });
//   }



//   function resizeImage(base64, maxWidth, maxHeight) {
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       img.src = base64;
  
//       img.onload = () => {
//         let width = img.width;
//         let height = img.height;
  
//         if (width > maxWidth) {
//           height *= maxWidth / width;
//           width = maxWidth;
//         }
  
//         if (height > maxHeight) {
//           width *= maxHeight / height;
//           height = maxHeight;
//         }
  
//         const canvasResized = document.createElement('canvas');
//         const ctxResized = canvasResized.getContext('2d');
//         canvasResized.width = width;
//         canvasResized.height = height;
  
//         ctxResized.drawImage(img, 0, 0, width, height);
  
//         resolve({
//           resized: canvasResized.toDataURL('image/jpeg'),
//           original: base64,
//         });
//       };
  
//       img.onerror = reject;
//     });
//   }



  async function getImageDimensions(base64) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = base64;
  
      img.onload = () => {
        resolve({
          width: img.width,
          height: img.height,
        });
      };
  
      img.onerror = reject;
    });
  }






const verAnterior = () => {
    if(!contador) {
        contador = imagens.children.length - 1;
        slideImage();
    } else {
        contador--;
        slideImage();
    }
};

const verProximo = () => {
    if(contador == imagens.children.length - 1) {
        contador = 0;
        slideImage();
    } else {
        contador++;
        slideImage();
    }
};

const slideImage = () => {
    Object.values(imagens.children).forEach(slide => {
        slide.style.transform = `translateX(-${contador * 100}%)`;
        indiceImagem.innerText = `${contador + 1}/${imagens.children.length}`;
    })
};
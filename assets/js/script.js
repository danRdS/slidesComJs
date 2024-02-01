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
const loader = document.querySelector('.loader');
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

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
        reader.onload = async function () {
            try {
                const compressedDataUrl = await compressImage(file);
                const imgPreview = document.createElement('img');
                imgPreview.src = compressedDataUrl;
                imgPreview.alt = `Imagem ${i + 1}`;
                loader.classList.add('esconder-loader');
                previewContainer.appendChild(imgPreview);
        
                urlsImagens.push(compressedDataUrl);
                buttonConfirmar.removeAttribute('disabled');
            } catch (error) {
                console.error('Erro ao redimensionar imagem:', error);
                alert('Erro ao redimensionar imagem:', error);
            }

        };
    
     reader.readAsDataURL(file);
    }
}


async function getImageDimensions(base64) {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => {
            resolve({
                width: img.width,
                height: img.height,
            });
        };

        img.onerror = reject;

        img.src = base64;
    });
}

// async function compressImage(file) {
//     return new Promise((resolve, reject) => {
//         const options = {
//             quality: .5, // Ajuste a qualidade conforme necessário
//             // maxWidth: 800, // Largura máxima da imagem
//             // maxHeight: 600, // Altura máxima da imagem
//         };

//         new ImageCompressor(file, {
//             ...options,
//             success(result) {
//                 const reader = new FileReader();
//                 reader.readAsDataURL(result);
//                 reader.onload = () => resolve(reader.result);
//             },
//             error(error) {
//                 reject(error);
//             },
//         });

//     });
// }







// async function compressImage(file) {
//     return new Promise((resolve, reject) => {
//         const options = {
//             quality: 0.5, // Ajuste a qualidade conforme necessário
//             maxWidth: 800, // Largura máxima da imagem
//             maxHeight: 600, // Altura máxima da imagem
//         };

//         const reader = new FileReader();
//         reader.onload = (e) => {
//             const base64 = e.target.result;
//             loadImage(
//                 base64,
//                 (canvas) => {
//                     canvas.toBlob(
//                         (blob) => {
//                             const blobReader = new FileReader();
//                             blobReader.readAsDataURL(blob);
//                             blobReader.onload = () => resolve(blobReader.result);
//                         },
//                         'image/jpeg',
//                         options.quality
//                     );
//                 },
//                 {
//                     maxWidth: options.maxWidth,
//                     maxHeight: options.maxHeight,
//                     orientation: true, // Ativa a correção automática de orientação
//                 }
//             );
//         };
//         reader.onerror = reject;
//         reader.readAsDataURL(file);
//     });
// }





async function compressImage(file) {
    return new Promise((resolve, reject) => {
        const options = {
            quality: 0.8,
            maxWidth: 800,
            maxHeight: 600,
        };

        const reader = new FileReader();
        reader.onload = async (e) => {
            const base64 = e.target.result;

            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                const { width, height } = img;

                canvas.width = width;
                canvas.height = height;

                ctx.drawImage(img, 0, 0, width, height);

                const correctedBase64 = canvas.toDataURL('image/jpeg', options.quality);
                resolve(correctedBase64);
            };

            img.src = base64;
        };

        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

























function abrirEscolhas() {
    previewContainer.innerHTML = '';
    fileInput.value = '';
    areaFotosPreSelecionadas.classList.add('ocultar');
    loader.classList.remove('esconder-loader');

}

function confirmarFotos() {
    areaFotosPreSelecionadas.classList.add('ocultar');
    buttonConfirmar.setAttribute('disabled', 'disabled');
    btnIniciarAddFoto.classList.remove('botao-add-foto-clicado');
    btnIniciarAddFoto.classList.add('botao-add-foto-retira-animacao');
    renderizarSlides(urlsImagens);

    localStorage.setItem('imagensSlide', JSON.stringify(urlsImagens));

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

    listaImagens.forEach((compressedDataUrl, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = compressedDataUrl;
        imgElement.alt = `Imagem ${index + 1}`;
        imagens.appendChild(imgElement);
        imgElement.style.left = `${index * 100}%`;
    });

    indiceImagem.innerText = `${contador + 1}/${imagens.children.length}`;    
    const btnSlides = document.querySelectorAll('.slides button');

    if(listaImagens.length > 1) {
        barraProgressoTempoExibicao.classList.remove('ocultar');
        btnSlides.forEach(btn => btn.classList.remove('ocultar'));
    } else {
        barraProgressoTempoExibicao.classList.add('ocultar');
        btnSlides.forEach(btn => btn.classList.add('ocultar'));
    }

    reproduzirAutomaticamente();
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

let intervalo;
let inicioIntervalo, tempoDecorrido;

const barraProgressoTempoExibicao = document.getElementById('barraProgressoTempo');

const verAnterior = () => {
    if(!contador) {
        contador = imagens.children.length - 1;
        slideImage();
    } else {
        contador--;
        slideImage();
    }
    reproduzirAutomaticamente();
};

const verProximo = () => {
    if(contador == imagens.children.length - 1) {
        contador = 0;
        slideImage();
    } else {
        contador++;
        slideImage();
    }
    reproduzirAutomaticamente();
};

const reproduzirAutomaticamente = () => {
    clearInterval(intervalo);
    barraProgressoTempoExibicao.value = 0;
    inicioIntervalo = new Date().getTime();
    setInterval(() => calcularTempoDecorrido(), 1);
    intervalo = setInterval(() => verProximo(), 4000);
}

const calcularTempoDecorrido = () => {
    const agora = new Date().getTime();
    tempoDecorrido = agora - inicioIntervalo;
    barraProgressoTempoExibicao.value = tempoDecorrido;
}

const slideImage = () => {
    Object.values(imagens.children).forEach(slide => {
        slide.style.transform = `translateX(-${contador * 100}%)`;
        indiceImagem.innerText = `${contador + 1}/${imagens.children.length}`;
    })
};
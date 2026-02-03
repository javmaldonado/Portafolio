import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// Tu configuración (la que pasaste antes)
const firebaseConfig = {
  apiKey: "AIzaSyCn0xahnMR0IntoPngXZ_Dw-qPN0HPBaww",
  authDomain: "portafolio-30cc1.firebaseapp.com",
  projectId: "portafolio-30cc1",
  storageBucket: "portafolio-30cc1.firebasestorage.app",
  messagingSenderId: "250459377886",
  appId: "1:250459377886:web:2f6918566988c253d0324f"
};

// 1. Inicializar
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

async function cargarTodasLasImagenes() {
    // 1. Buscamos todas las etiquetas <img> que tengan el atributo 'data-storage'
    const listaDeImagenes = document.querySelectorAll('img[data-storage]');

    // 2. Recorremos la lista una por una
    listaDeImagenes.forEach(async (img) => {
        const nombreArchivo = img.getAttribute('data-storage'); // Lee el nombre (ej: "mi-foto.png")
        const imageRef = ref(storage, nombreArchivo);

        try {
            const url = await getDownloadURL(imageRef);
            img.src = url; // Le pone la URL mágica de Firebase
            console.log(`✅ Cargada: ${nombreArchivo}`);
        } catch (error) {
            console.error(`❌ No se pudo cargar ${nombreArchivo}:`, error.code);
        }
    });
}

// Ejecutar cuando la página cargue
document.addEventListener('DOMContentLoaded', cargarTodasLasImagenes);
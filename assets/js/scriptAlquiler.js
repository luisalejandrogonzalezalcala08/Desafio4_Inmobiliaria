const propiedades_alquiler = [
  {
    titulo: "Apartamento de 2 habitaciones en el centro de la ciudad",
    imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267...",
    detalle: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad...",
    direccion: "123 Main Street, Anytown, CA 91234",
    dormitorios: 2,
    banos: 2,
    precio: 2000,
    fumador: false,
    mascotas: false,
  },
  {
    titulo: "Apartamento luminoso con vista al mar",
    imagen: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    detalle: "Este hermoso apartamento ofrece una vista impresionante al mar",
    direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
    dormitorios: 3,
    banos: 3,
    precio: 2500,
    fumador: false,
    mascotas: true,
  },
  {
    titulo: "Condominio moderno en zona residencial",
    imagen: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    detalle: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    direccion: "789 Quiet Lane, Suburbia, CA 34567",
    dormitorios: 3,
    banos: 2,
    precio: 2200,
    fumador: false,
    mascotas: true,
  },
  {
    titulo: "Apartamento espacioso con terraza",
    imagen: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    detalle:"Este apartamento de lujo cuenta con una amplia terraza con vistas panorámicas",
    direccion: "567 Skyview Road, Hilltop City, CA 78901",
    dormitorios: 4,
    banos: 3,
    precio: 3000,
    fumador: true,
    mascotas: false,
  },
  {
    titulo: "Loft moderno en el corazón artístico",
    imagen: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvZnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=1000&q=60",
    detalle:"Este loft de diseño contemporáneo se encuentra en el corazón del distrito artístico",
    direccion: "890 Creative Avenue, Artsy Town, CA 12345",
    dormitorios: 2,
    banos: 2,
    precio: 1800,
    fumador: false,
    mascotas: false,
  },
];
const propiedades_venta = [
  {
    titulo: "Apartamento de lujo en zona exclusiva",
    imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    detalle:"Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    dormitorios: 4,
    banos: 4,
    precio: 5000,
    fumador: false,
    mascotas: false,
  },
  {
    titulo: "Apartamento acogedor en la montaña",
    imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    detalle:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    direccion: "789 Mountain Road, Summit Peaks, CA 23456",
    dormitorios: 2,
    banos: 1,
    precio: 1200,
    fumador: true,
    mascotas: true,
  },
  {
    titulo: "Penthouse de lujo con terraza panorámica",
    imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    detalle:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares y acabados de alta calidad",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    dormitorios: 3,
    banos: 3,
    precio: 4500,
    fumador: false,
    mascotas: false,
  },
  {
    titulo: "Apartamento moderno en el distrito financiero",
    imagen: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    detalle:
      "Este apartamento de diseño moderno está ubicado en el centro del distrito financiero",
    direccion: "890 Financial Avenue, Downtown City, CA 78901",
    dormitorios: 2,
    banos: 2,
    precio: 2800,
    fumador: false,
    mascotas: true,
  },
  {
    titulo: "Loft industrial con estilo urbano",
    imagen: "https://images.unsplash.com/photo-1628611225249-6c3c7c689552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9mdHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
    detalle: "Este loft industrial ofrece un estilo urbano único",
    direccion: "101 Urban Street, Urbanville, CA 34567",
    dormitorios: 1,
    banos: 1,
    precio: 1600,
    fumador: true,
    mascotas: false,
  },
];

const mostrarPropiedades = (propiedades, elementoHtml) => {
  const elemento = document.getElementById(elementoHtml);

  const propiedadesPorMostrar = [];

  for (let i = 0; i < 5; i++) {
    if (i < propiedades.length) {
      propiedadesPorMostrar.push(propiedades[i]);
    }
  }

  propiedadesPorMostrar.forEach((propiedad) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `<div class="card">
    <img
      src="${propiedad.imagen}"
      class="card-img-top"
      alt="Imagen del departamento"
    />
    <div class="card-body">
      <h5 class="card-title">${propiedad.titulo}</h5>
      <p class="card-text">
       ${propiedad.detalle}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedad.dormitorios} |
        <i class="fas fa-bath"></i> ${propiedad.banos}
      </p>
      <p>
        <i class="fas fa-dollar-sign"></i> ${propiedad.precio}
      </p>
      <p class="${propiedad.fumador ? "text-success" : "text-danger"}">
        <i class="fas ${propiedad.fumador ? "fa-smoking" : "fa-smoking-ban"}"></i> 
        ${propiedad.fumador ? "Está permitido fumar" : "No esta permitido fumar"}
      </p>
      <p class="${propiedad.mascotas ? "text-success" : "text-danger"}">
        <i class="fas ${propiedad.mascotas ? "fa-paw" : "fa-ban"}"></i> 
        ${propiedad.mascotas ? "Mascotas Permitidas" : "No se permite mascotas"}
      </p>
    </div>
  </div>`;
    elemento.appendChild(card);
  });
};

mostrarPropiedades(propiedades_alquiler, "propiedadesAlquiler");
document.addEventListener("DOMContentLoaded", function () {
  const ventaSection = document.getElementById("venta");

  ventaSection.style.display = "none";
});

const propiedades_venta = [
    {
      nombre: "Casa en la playa",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      descripcion: "Hermosa casa con vista al mar.",
      ubicacion: "Viña del Mar",
      habitaciones: 3,
      costo: 50000000,
      smoke: true,
      pets: false,
    },
    {
      nombre: "Departamento moderno",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60",
      descripcion: "Departamento en el centro con acceso a todo.",
      ubicacion: "Santiago Centro",
      habitaciones: 2,
      costo: 30000000,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Cabaña en la montaña",
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60",
      descripcion: "Cabaña acogedora en medio de la naturaleza.",
      ubicacion: "Pucón",
      habitaciones: 4,
      costo: 45000000,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Casa familiar",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      descripcion: "Amplia casa ideal para familias.",
      ubicacion: "La Florida",
      habitaciones: 5,
      costo: 60000000,
      smoke: true,
      pets: true,
    },
  ];
  
  // Selecciona el contenedor donde se mostrarán las propiedades
  const container = document.getElementById("propiedades-container");
  
  // Genera el HTML dinámicamente
  propiedades_venta.forEach((propiedad) => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${propiedad.src}" class="card-img-top" alt="Imagen de ${propiedad.nombre}" />
          <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p>
              <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
              <i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString('es-CL')}
            </p>
            <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
              <i class="fas ${propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"}"></i> 
              ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar"}
            </p>
            <p class="${propiedad.pets ? "text-success" : "text-danger"}">
              <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i> 
              ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
            </p>
          </div>
        </div>
      </div>
    `;
  });
const propiedades_alquiler = [
    {
      nombre: "Apartamento en el centro de la ciudad",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion: "Moderno departamento en el corazón de la ciudad.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      costo: 2000,
      smoke: false,
      pets: true
    },
    {
      nombre: "Apartamento luminoso con vista al mar",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar.",
      ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      costo: 2500,
      smoke: true,
      pets: true
    },
    {
      nombre: "Condominio moderno en zona residencial",
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      descripcion: "Elegante condominio moderno en una tranquila zona residencial.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      costo: 2200,
      smoke: false,
      pets: false
    },
    {
      nombre: "Cabaña acogedora en las montañas",
      src: "https://landfolk-storage.imgix.net/n191ekmcklr35h8h3pftdk03nh04?auto=compress%2Cformat&cs=srgb&fit=crop&fp-x=0.3542154947916666&fp-y=0.5535500966529832&crop=focalpoint&w=2560&h=2560",
      descripcion: "Hermosa cabaña rústica con chimenea, ideal para escapadas románticas.",
      ubicacion: "789 Mountain Road, Cozy Village, CO 98765",
      habitaciones: 1,
      costo: 1500,
      smoke: true,
      pets: false
    }
  ];

  const container = document.getElementById("propiedades-container");

  propiedades_alquiler.forEach((propiedad) => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="${propiedad.src}"
            class="card-img-top"
            alt="Imagen de la propiedad"
          />
          <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p>
              <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones
            </p>
            <p><i class="fas fa-dollar-sign"></i> $${propiedad.costo}</p>
            <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
              <i class="${propiedad.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> 
              ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar"}
            </p>
            <p class="${propiedad.pets ? "text-success" : "text-danger"}">
              <i class="${propiedad.pets ? "fas fa-paw" : "fas fa-ban"}"></i> 
              ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
            </p>
          </div>
        </div>
      </div>
    `;
  });
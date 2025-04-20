const Footer = () => {
  return (
    <footer className="bg-blomsyGreen absolute w-full text-greenText flex flex-col px-4 py-7">
      {/* Contenido principal del footer */}
      <div className="flex flex-col gap-6 pb-7 lg:flex-row lg:max-w-7xl lg:m-auto lg:gap-50">
        <FooterItems
          title="Enlaces"
          items={[
            { label: "Inicio", href: "#" },
            { label: "Sobre nosotros", href: "#" },
            { label: "Arreglos", href: "#" },
            { label: "Contacto", href: "#" },
          ]}
        />
        <FooterItems
          title="Contacto"
          items={[
            { label: "Dirección", href: "#" },
            { label: "Teléfono", href: "#" },
            { label: "Correo electrónico", href: "#" },
          ]}
        />
        <FooterItems
          title="Redes"
          items={[
            { label: "Instagram", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "TikTok", href: "#" },
          ]}
        />
      </div>

      {/* Separador */}
      <hr className="py-5" />

      {/* Información legal */}
      <div className="flex flex-col items-center text-center">
        <h5 className="text-3xl font-bold">&copy; 2025 Blomsy.</h5>
        <h5>Todos los derechos reservados</h5>
        <p className="text-greenText/50 font-semibold">By Renato Herrera</p>
      </div>
    </footer>
  );
};

const FooterItems = ({ title, items }) => {
  return (
    <ul className="space-y-1">
      <h4 className="font-bold">{title}</h4>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.href} className="hover:underline">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Footer;

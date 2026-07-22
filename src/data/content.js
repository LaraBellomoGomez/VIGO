import iconGeneral from '../assets/icons/general.png';
import iconOrtodoncia from '../assets/icons/ortodoncia.png';
import iconImplantes from '../assets/icons/implantes.png';
import iconBlanqueamiento from '../assets/icons/blanqueamiento.png';
import iconProtesis from '../assets/icons/protesis.png';
import iconPeriodoncia from '../assets/icons/periodoncia.png';
import iconEndodoncia from '../assets/icons/endodoncia.png';
import iconEstetica from '../assets/icons/estetica.png';

export const clinic = {
  name: 'VIGO Odontología Integral',
  address: 'Nueva York 4293, Villa Devoto, CABA',
  hours: 'Lunes a viernes de 10 a 17hs',
  phoneDisplay: '011 15-6035-6418',
  whatsappNumber: '5491160356418',
  email: 'vigoodontologiaintegral@gmail.com',
  instagramHandle: '@vigo.odontologiaintegral',
  instagramUrl: 'https://www.instagram.com/vigo.odontologiaintegral',
  mapsLinkUrl: 'https://maps.app.goo.gl/6LoByFChH1RAJxsDA?g_st=iw',
};

export function buildWhatsappLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${clinic.whatsappNumber}?text=${text}`;
}

export const whatsappLinks = {
  general: buildWhatsappLink('Hola VIGO, quiero consultar por un turno'),
  contacto: buildWhatsappLink('Hola VIGO, quiero coordinar mi turno'),
};

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  clinic.address
)}&output=embed`;

export const navLinks = [
  { key: 'inicio', label: 'Inicio', to: '/' },
  { key: 'servicios', label: 'Servicios', to: '/servicios' },
  { key: 'nosotros', label: 'Nosotros', to: '/nosotros' },
  { key: 'contacto', label: 'Contacto', to: '/contacto' },
];

export const checklist = [
  'Atención personalizada, sin apuro.',
  'Profesionales matriculadas (UBA).',
  'Planes de tratamiento claros, sin sorpresas.',
  'Turnos flexibles, incluidos sábados.',
];

export const services = [
  {
    slug: 'odontologia-integral',
    title: 'Odontología integral',
    desc: 'Diagnóstico, prevención y tratamiento para el cuidado diario de tu boca.',
    icon: iconGeneral,
    longDesc: [
      'Es la puerta de entrada a tu salud bucal: un diagnóstico completo que evalúa el estado de tus piezas dentales, encías y mordida antes de definir cualquier tratamiento.',
      'A partir de ahí armamos un plan de cuidado a tu medida, con controles periódicos y las derivaciones necesarias dentro del mismo equipo si hace falta un tratamiento más específico.',
    ],
  },
  {
    slug: 'ortodoncia',
    title: 'Ortodoncia',
    desc: 'Placas alineadoras y brackets para una sonrisa alineada, a tu ritmo.',
    icon: iconOrtodoncia,
    longDesc: [
      'Corregimos la posición de tus dientes y la mordida con brackets tradicionales o alineadores transparentes, según lo que mejor se adapte a tu caso y tu rutina diaria.',
      'Hacemos seguimiento mensual de cada movimiento dental para que el tratamiento avance en los tiempos previstos, con controles claros de principio a fin.',
    ],
  },
  {
    slug: 'implantologia',
    title: 'Implantología',
    desc: 'Reemplazo de piezas dentales con tecnología de precisión.',
    icon: iconImplantes,
    longDesc: [
      'Reemplazamos piezas perdidas con implantes de titanio que se integran al hueso maxilar, devolviendo función masticatoria real y una estética natural.',
      'Antes de cada cirugía evaluamos con estudios por imágenes la calidad ósea disponible, para planificar el implante con la mayor precisión posible.',
    ],
  },
  {
    slug: 'blanqueamiento',
    title: 'Blanqueamiento',
    desc: 'Tratamientos para recuperar el brillo natural de tu sonrisa.',
    icon: iconBlanqueamiento,
    longDesc: [
      'Aclaramos el color de tus dientes con geles blanqueadores profesionales, en sesión de consultorio o con placas para uso en casa bajo nuestra supervisión.',
      'Siempre partimos de una limpieza previa y evaluamos la sensibilidad dental de cada paciente para elegir la concentración y el tiempo de tratamiento adecuados.',
    ],
  },
  {
    slug: 'rehabilitacion-oral',
    title: 'Rehabilitación oral',
    desc: 'Carillas, coronas y prótesis para recuperar función y estética.',
    icon: iconProtesis,
    longDesc: [
      'Reconstruimos piezas dañadas o ausentes con coronas, puentes y prótesis, devolviendo tanto la capacidad de masticar como la armonía estética de la boca.',
      'Cada rehabilitación se diseña a medida, considerando el resto de tu dentadura para lograr un resultado que se vea y funcione de forma natural.',
    ],
  },
  {
    slug: 'odontologia-preventiva',
    title: 'Odontología preventiva',
    desc: 'Controles y limpiezas para evitar problemas antes de que aparezcan.',
    icon: iconPeriodoncia,
    longDesc: [
      'Las limpiezas y controles periódicos son la forma más simple de evitar caries, sarro y enfermedades de las encías antes de que se conviertan en un problema mayor.',
      'En cada visita revisamos el estado general de tu boca y te damos pautas concretas de higiene para sostener los resultados entre un control y otro.',
    ],
  },
  {
    slug: 'endodoncia',
    title: 'Endodoncia',
    desc: 'Tratamiento de conducto para salvar piezas dañadas.',
    icon: iconEndodoncia,
    longDesc: [
      'Cuando la caries o una lesión llega a la pulpa dental, el tratamiento de conducto permite salvar la pieza en lugar de extraerla, eliminando el dolor y la infección.',
      'Trabajamos con instrumental rotatorio de precisión para que el procedimiento sea lo más cómodo posible, con anestesia local y control del dolor en cada paso.',
    ],
  },
  {
    slug: 'carillas',
    title: 'Carillas',
    desc: 'Láminas estéticas para mejorar forma y color dental.',
    icon: iconEstetica,
    longDesc: [
      'Las carillas son láminas finas de porcelana o resina que se adhieren a la cara visible del diente para corregir forma, tamaño o color de manera duradera.',
      'Es una opción conservadora frente a otros tratamientos estéticos, ya que requiere mínimo desgaste de la pieza natural para lograr un cambio notorio en la sonrisa.',
    ],
  },
];

export const team = [
  {
    name: 'Od. Yesica González',
    role: 'Odontóloga (UBA)',
    photoKey: 'team1',
    bio: 'Matriculada en la UBA, forma parte de VIGO desde su fundación en 2022. Se toma el tiempo necesario para que cada paciente entienda su plan de tratamiento paso a paso.',
  },
  {
    name: 'Od. Verena Villafañe',
    role: 'Odontóloga (UBA)',
    photoKey: 'team2',
    bio: 'Comparte con Yesica la misma filosofía de trabajo: escuchar primero y tratar después. Su enfoque prioriza la prevención y el seguimiento a largo plazo de cada paciente.',
  },
];

export const highlights = [
  {
    title: 'Atención personalizada',
    desc: 'Nos tomamos el tiempo necesario en cada consulta, sin apuro, para que entiendas cada paso de tu tratamiento.',
  },
  {
    title: 'Profesionales matriculadas',
    desc: 'Ambas odontólogas están formadas y matriculadas en la UBA, con controles y protocolos de bioseguridad estrictos.',
  },
  {
    title: 'Turnos flexibles',
    desc: 'Coordinamos horarios que se adapten a tu rutina, con disponibilidad de turnos incluidos los sábados.',
  },
];

// Contenido de ejemplo — reemplazar por reseñas reales de pacientes cuando estén disponibles.
export const testimonials = [
  {
    name: 'Paciente VIGO',
    text: 'Excelente atención desde el primer contacto por WhatsApp. Me explicaron todo el tratamiento con mucha claridad.',
  },
  {
    name: 'Paciente VIGO',
    text: 'Muy buena predisposición y calidez humana. Se nota que les importa que uno se sienta cómodo en el consultorio.',
  },
  {
    name: 'Paciente VIGO',
    text: 'Profesionalismo y puntualidad. Conseguí turno rápido y el plan de tratamiento fue claro desde el inicio.',
  },
  {
    name: 'Paciente VIGO',
    text: 'Un equipo muy atento y prolijo. Recomiendo la clínica por la dedicación en cada control.',
  },
];

export const processSteps = [
  {
    title: 'Reservá tu turno',
    desc: 'Coordiná tu cita por WhatsApp, fácil y sin esperas. Te respondemos a la brevedad.',
    photoKey: 'proceso1',
  },
  {
    title: 'Consulta inicial',
    desc: 'Evaluamos tu caso y armamos un plan de tratamiento claro, sin sorpresas en el costo.',
    photoKey: 'proceso2',
  },
  {
    title: 'Tratamiento',
    desc: 'Trabajamos con equipamiento moderno y protocolos de bioseguridad estrictos en cada sesión.',
    photoKey: 'proceso3',
  },
  {
    title: 'Seguimiento',
    desc: 'Acompañamos los controles posteriores para asegurar que el resultado se mantenga en el tiempo.',
    photoKey: 'proceso4',
  },
];

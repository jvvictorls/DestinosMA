import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('spots', [
    {
      name: 'Praia do araçagy',
      description:'É uma famosa praia localizada na cidade de São Luís, cujo nome é uma referência à tribo indígena que habitava a região. A praia é conhecida por suas águas calmas e cristalinas, ideais para banho e prática de esportes náuticos. Além disso, a Praia do Araçagy conta com uma boa infraestrutura, com quiosques, bares e restaurantes que oferecem petiscos e pratos típicos da culinária maranhense. O local é muito frequentado por moradores e turistas que buscam um lugar tranquilo para relaxar e aproveitar o dia. Vale a pena conhecer essa bela praia e desfrutar de momentos inesquecíveis em contato com a natureza.',
      city: 'São Luís',
      type: 'Praia',
      tips: 'Ir de dia, levar protetor solar, bom para crianças',  
      image: 'https://i.pinimg.com/originals/3c/6e/77/3c6e7715c761613683c9e988d6d2b92f.jpg',
      latitude: -2.523135,
      longitude: -44.156289

    },
    {
      name: 'Praia do Calhau',
      description:'Esta paraia é uma das mais famosas de São Luís, localizada na região nobre da cidade. A Praia do Calhau é conhecida por suas águas claras e calmas, ideais para banho e prática de esportes náuticos. Além disso, a praia conta com uma boa infraestrutura, com quiosques, bares e restaurantes que oferecem petiscos e pratos típicos da culinária maranhense. O local é muito frequentado por moradores e turistas que buscam um lugar tranquilo para relaxar e aproveitar o dia. Vale a pena conhecer essa bela praia e desfrutar de momentos inesquecíveis em contato com a natureza.',
      city: 'São Luís',
      type: 'Praia',
      tips: 'Ir de dia, levar protetor solar, bom para crianças',
      image: 'https://turismosaoluis.com.br/wp-content/uploads/2023/12/Praia-do-Calhau.jpg',
      latitude: -2.482362,
      longitude: -44.257582

    },
    {
      name: 'Teatro Arthur Azevedo',
      description:'O Teatro Arthur Azevedo é um dos mais importantes teatros do Brasil, localizado na cidade de São Luís. Inaugurado em 1817, o teatro é considerado um dos mais antigos do país e um dos principais pontos turísticos da cidade. O local é conhecido por sua arquitetura neoclássica e por sua rica história, que remonta ao período colonial. O teatro recebe espetáculos de dança, música e teatro, além de exposições e eventos culturais. Vale a pena conhecer esse importante patrimônio histórico e cultural de São Luís e apreciar a riqueza artística e arquitetônica do local.',
      city: 'São Luís',
      type: 'Cultural',
      tips: 'Ir de noite, levar casaco, bom para casais',
      image: 'https://www.ma.gov.br/uploads/ma/imgs/42175_whatsapp_image_2023_05_31_at_19.31.03_454147255898060875_.jpeg',
      latitude: -2.528258,
      longitude: -44.302476
    },
    {
      name: 'Centro Histórico de São Luís',
      description:'O Centro Histórico de São Luís é considerado Patrimônio Mundial da Humanidade pela UNESCO, devido à sua rica arquitetura colonial e à preservação de seu conjunto arquitetônico. O local é conhecido por suas ruas estreitas, casarões antigos, igrejas centenárias e praças históricas, que remontam ao período colonial. O Centro Histórico de São Luís é um dos principais pontos turísticos da cidade e oferece aos visitantes a oportunidade de conhecer a história e a cultura maranhense. Vale a pena passear pelas ruas do centro histórico, visitar os museus e igrejas da região e apreciar a beleza arquitetônica desse importante patrimônio cultural.',
      city: 'São Luís',
      type: 'Cultural',
      tips: 'Ir de dia, levar câmera fotográfica, bom para famílias',
      image: 'https://www.voltologo.net/wp-content/uploads/2023/02/centro-historico-de-sao-luis-dicas.jpg.webp',
      latitude: -2.530730,
      longitude: -44.305434

    },
    {
      name: 'Parque Estadual do Mirador',
      description:'O Parque Estadual do Mirador é uma unidade de conservação localizada no estado do Maranhão, que abrange uma área de mais de 160 mil hectares de cerrado e floresta amazônica. O parque é conhecido por sua rica biodiversidade, com uma grande variedade de espécies de fauna e flora, incluindo animais como onças-pintadas, tamanduás-bandeira, araras e tucanos. O local oferece trilhas ecológicas, cachoeiras, mirantes e áreas para camping, além de atividades como observação de aves e passeios de barco. O Parque Estadual do Mirador é um ótimo destino para os amantes da natureza e para quem busca aventura e contato com o meio ambiente.',
      city: 'Mirador',
      type: 'Natureza',
      tips: 'Ir de dia, levar repelente, bom para aventureiros',
      image: 'https://i0.wp.com/oeco.org.br/wp-content/uploads/2020/10/Oeco_PE-do-Mirador-SEMA-divulgacao.jpg?fit=1152%2C768&ssl=1',
      latitude: -6.374722,
      longitude: -44.370278

    },
    {
      name: 'Lençóis Maranhenses',
      description:'O Parque Nacional dos Lençóis Maranhenses é uma das mais belas paisagens naturais do Brasil, localizado no estado do Maranhão. O parque é conhecido por suas dunas de areia branca e lagoas de água cristalina, que se formam durante o período de chuvas na região. O local oferece aos visitantes a oportunidade de fazer passeios de jipe, caminhadas pelas dunas, banhos de lagoa e observação da fauna e flora locais. Os Lençóis Maranhenses são um destino imperdível para quem busca contato com a natureza e paisagens deslumbrantes.',
      city: 'Barreirinhas',
      type: 'Natureza',
      tips: 'Ir de dia, levar protetor solar, bom para casais',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lagoa_e_duna_no_Parque_Nacional_dos_Len%C3%A7ois_maranhenses_%28S%C3%A3o_Lu%C3%ADs_-_BR%29.JPG',
      latitude: -2.485839,
      longitude: -43.116188

    },
    {
      name: 'Parque Nacional da Chapada das Mesas',
      description:'O Parque Nacional da Chapada das Mesas é uma unidade de conservação localizada no estado do Maranhão, que abrange uma área de mais de 160 mil hectares de cerrado e floresta amazônica. O parque é conhecido por sua rica biodiversidade, com uma grande variedade de espécies de fauna e flora, incluindo animais como onças-pintadas, tamanduás-bandeira, araras e tucanos. O local oferece trilhas ecológicas, cachoeiras, mirantes e áreas para camping, além de atividades como observação de aves e passeios de barco. O Parque Estadual do Mirador é um ótimo destino para os amantes da natureza e para quem busca aventura e contato com o meio ambiente.',
      city: 'Carolina',
      type: 'Natureza',
      tips: 'Ir de dia, levar repelente, bom para aventureiros',
      image: 'https://turismo.ma.gov.br/uploads/setur/imgs/Po%C3%A7o-Azul-Chapada-das-Mesas-Riach%C3%A3o-MA2.jpg',
      latitude: -7.050833,
      longitude: -46.827222
    },
    {
      name: 'Cachoeira da Fumaça',
      description:'A Cachoeira da Fumaça é uma das mais belas cachoeiras do Brasil, localizada no estado do Maranhão. A cachoeira é conhecida por sua queda d\'água de mais de 100 metros de altura, que forma uma nuvem de fumaça ao atingir o solo. O local oferece aos visitantes a oportunidade de fazer trilhas ecológicas, banhos de cachoeira, observação da fauna e flora locais e atividades de aventura, como rapel e tirolesa. A Cachoeira da Fumaça é um destino imperdível para quem busca contato com a natureza e paisagens deslumbrantes.',
      city: 'Carolina',
      type: 'Natureza',
      tips: 'Ir de dia, levar protetor solar, bom para aventureiros',
      image: 'https://iema.es.gov.br/Media/iema/Not%C3%ADcias/PECF%20-%20Karol%20Gazoni%20(14).jpeg',
      latitude: -6.885788,
      longitude: -47.497038

    },
    {
      name: 'Catedral de São Luís',
      description:'A Catedral Metropolitana de São Luís é um dos mais importantes templos religiosos do Brasil, localizado na cidade de São Luís. Construída no século XVII, a catedral é conhecida por sua arquitetura barroca e por sua rica decoração interna, com altares dourados, pinturas sacras e esculturas de santos. O local é um importante ponto turístico da cidade e recebe milhares de visitantes todos os anos, que vão em busca de paz espiritual e contemplação. A Catedral de São Luís é um lugar de grande beleza e importância histórica, que vale a pena ser visitado e apreciado.',
      city: 'São Luís',
      type: 'Cultural',
      tips: 'Ir de dia, levar câmera fotográfica, bom para famílias',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/SaoLuis-Cathedral.jpg',
      latitude: -2.529491,
      longitude: -44.303075

    }
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('spots', {}, {});
  }
}
const PRODUCTOS=[
 {
  "id": 35,
  "nombre": "Combo Cuidado Total Melora",
  "cat": "kits",
  "precio": 45000,
  "estado": "disp",
  "desc": "Incluye 2 cremas de manos de 30 g, antisolar Bioaqua con vitamina C, 3 bálsamos de labios (uva, sandía y melocotón), mascarilla de colágeno para labios y aretes trébol negro.",
  "foto": "img/combo-cuidado-total.webp",
  "incluye": [
   "2 cremas de manos de 30 g",
   "Antisolar Bioaqua Vitamina C",
   "3 bálsamos de labios: uva, sandía y melocotón",
   "Mascarilla de colágeno para labios",
   "Aretes trébol negro"
  ]
 },
 {
  "id": 36,
  "nombre": "Kit Satín y Brillo Melora",
  "cat": "kits",
  "precio": 38000,
  "estado": "disp",
  "desc": "Incluye mascarilla de colágeno para ojos y labios, gorro de satín, hidratante de labios Cereza Julieta, aretes nudo baño en rodio y crema de manos de 30 g.",
  "foto": "img/kit-satin-brillo.webp",
  "incluye": [
   "Mascarilla de colágeno para ojos y labios",
   "Gorro de satín",
   "Hidratante de labios Cereza Julieta",
   "Aretes nudo baño en rodio",
   "Crema de manos de 30 g"
  ]
 },
 {
  "id": 22,
  "nombre": "Brilli kit princesas BOMBOM",
  "cat": "kits",
  "precio": 30000,
  "desc": "Incluye un body splash con destellos que deja un brillito mágico en la piel, ideal para que se sientan como haditas llenas de luz 🧚‍♀️💖, y una cremita corporal hidratante que ayuda a mantener la piel suave, nutrida y protegida durante todo el día.",
  "foto": "img/kit-brilli.webp",
  "incluye": [
   "Body splash con destellos",
   "Cremita corporal hidratante"
  ],
  "estado": "disp"
 },
 {
  "id": 23,
  "nombre": "Kit Shimmer Glam Bom Bom + Mantequilla Corporal Bom Bom",
  "cat": "kits",
  "precio": 50000,
  "desc": "Body splash y mantequilla corporal Julieta que hidratan, perfuman y dejan la piel con hermosos brillos.",
  "foto": "img/kit-shimmer-mantequilla.webp",
  "incluye": [
   "Shimmer Glam Julieta Bom Bom (body splash)",
   "Mantequilla corporal Julieta Bom Bom"
  ],
  "estado": "disp"
 },
 {
  "id": 24,
  "nombre": "Kit Mantequilla Coco-Vainilla + Aceite Corporal Coco",
  "cat": "kits",
  "precio": 48000,
  "desc": "Mantequilla corporal Coco-Vainilla y aceite corporal de coco con destellos, que hidratan, nutren y ayudan a mejorar la apariencia. Deja la piel suave, luminosa y con un hermoso efecto brillante.",
  "foto": "img/kit-mantequilla-aceite-coco.webp",
  "incluye": [
   "Mantequilla corporal Coco-Vainilla",
   "Aceite corporal con destellos Coco"
  ],
  "estado": "disp"
 },
 {
  "id": 25,
  "nombre": "Kit Shimmer Glam + Crema Corporal + Exfoliante Bombombun",
  "cat": "kits",
  "precio": 60000,
  "desc": "Exfolia, hidrata y perfuma tu piel con Bom Bom. Incluye Shimmer Glam Julieta Bom Bom, crema corporal hidratante con destellos y exfoliante corporal Julieta Bombombun.",
  "foto": "img/kit-shimmer-crema-exfoliante.webp",
  "incluye": [
   "Shimmer Glam Julieta Bom Bom",
   "Crema corporal con destellos Bombombun",
   "Exfoliante corporal Bombombun"
  ],
  "estado": "disp"
 },
 {
  "id": 26,
  "nombre": "Kit Crema Coco-Vainilla + Aceite Corporal Naranja",
  "cat": "kits",
  "precio": 40000,
  "desc": "✨ Hidrata, ilumina y nutre tu piel 🥥🍊 Disfruta la suavidad de la crema de coco con destellos y el toque nutritivo del aceite corporal de naranja. ¡Piel radiante y deliciosa! 💛",
  "foto": "img/kit-crema-aceite-naranja.webp",
  "incluye": [
   "Crema corporal con destellos Coco-Vainilla",
   "Aceite corporal con destellos Naranja"
  ],
  "estado": "disp"
 },
 {
  "id": 1,
  "nombre": "Cadena cruz baguette",
  "cat": "cadenas",
  "precio": 35000,
  "desc": "Cadena de 60 cm tipo semijoya en rodio, cruz con engaste tipo baguette. Incluye empaque especial.",
  "foto": "img/cadena-cruz-baguette.webp",
  "estado": "pedido"
 },
 {
  "id": 2,
  "nombre": "Cadena inicial",
  "cat": "cadenas",
  "precio": 25000,
  "desc": "Cadena con inicial en baño de oro de 24 k. Vienen por unidad. Incluye empaque especial.",
  "foto": "img/cadena-inicial.webp",
  "estado": "pedido",
  "opciones": [
   {
    "n": "Inicial",
    "v": [
     "A",
     "B",
     "C",
     "D",
     "E",
     "F",
     "G",
     "H",
     "I",
     "J",
     "K",
     "L",
     "M",
     "N",
     "O",
     "P",
     "Q",
     "R",
     "S",
     "T",
     "U",
     "V",
     "W",
     "X",
     "Y",
     "Z"
    ]
   }
  ]
 },
 {
  "id": 3,
  "nombre": "Cadena San Benito",
  "cat": "cadenas",
  "precio": 25000,
  "desc": "Cadena cubana tipo semi-joya de 55 cm y dije con piezas en baño de rodio.",
  "foto": "img/cadena-san-benito.webp",
  "fotos": [
   "img/cadena-san-benito.webp",
   "img/cadena-san-benito-2.webp"
  ],
  "estado": "disp"
 },
 {
  "id": 4,
  "nombre": "Shimmer Glam Julieta Coco - Vainilla",
  "cat": "corporal",
  "precio": 24000,
  "desc": "Body Splash con brillos de 160 ml. Aromatiza delicadamente tu cuerpo, refresca la piel al instante y deja destellos luminosos que harán que brilles con cada movimiento.",
  "foto": "img/shimmer-glam-julieta-coco-vainilla.webp",
  "estado": "disp"
 },
 {
  "id": 5,
  "nombre": "Candonga rosa",
  "cat": "aretes",
  "precio": 14000,
  "desc": "Candongas tipo semijoya en rodio.",
  "foto": "img/candonga-rosa.webp",
  "estado": "disp"
 },
 {
  "id": 6,
  "nombre": "Tónico de rosas Julieta",
  "cat": "corporal",
  "precio": 16000,
  "desc": "Tónico facial de 110 ml con extractos naturales de rosa, manzanilla y aloe vera. El aliado perfecto para cuidar y mimar tu piel.",
  "foto": "img/tonico-de-rosas-julieta.webp",
  "estado": "disp"
 },
 {
  "id": 7,
  "nombre": "Candona cadena",
  "cat": "aretes",
  "precio": 18000,
  "desc": "Candongas tipo semijoya en rodio.",
  "foto": "img/candona-cadena.webp",
  "estado": "disp"
 },
 {
  "id": 8,
  "nombre": "Pulsera hombre cubana",
  "cat": "pulseras",
  "precio": 18000,
  "desc": "Pulsera para hombre con piezas doradas con baño en rodio tipo semi-joya y laca cataforética.",
  "foto": "img/pulsera-hombre-cubana.webp",
  "estado": "pedido"
 },
 {
  "id": 9,
  "nombre": "Pulsera hombre Borgoña",
  "cat": "pulseras",
  "precio": 25000,
  "desc": "Pulsera para hombre con piezas doradas con baño en rodio tipo semi-joya y laca cataforética.",
  "foto": "img/pulsera-hombre-borgona.webp",
  "estado": "pedido"
 },
 {
  "id": 10,
  "nombre": "Pulsera hombre chinesa",
  "cat": "pulseras",
  "precio": 25000,
  "desc": "Pulsera para hombre con piezas doradas con baño en rodio tipo semi-joya y laca cataforética.",
  "foto": "img/pulsera-hombre-chinesa.webp",
  "estado": "pedido"
 },
 {
  "id": 11,
  "nombre": "Cadena agropecuario",
  "cat": "cadenas",
  "precio": 25000,
  "desc": "Cadena de 60 cm y dije en baño de rodio, con microengaste tipo semi-joya.",
  "foto": "img/cadena-agropecuario.webp",
  "estado": "disp"
 },
 {
  "id": 12,
  "nombre": "Pulsera San Benito negra",
  "cat": "pulseras",
  "precio": 20000,
  "desc": "Pulsera en ónix mate con medalla en acero y piezas en rodio. Incluye caja especial.",
  "foto": "img/pulsera-san-benito-negra.webp",
  "estado": "disp"
 },
 {
  "id": 13,
  "nombre": "Cadena Virgen",
  "cat": "cadenas",
  "precio": 30000,
  "desc": "Cadena de 45 cm y dije en baño de rodio con microengaste tipo semi-joya.",
  "foto": "img/cadena-virgen.webp",
  "estado": "disp"
 },
 {
  "id": 14,
  "nombre": "Collar multidijes",
  "cat": "cadenas",
  "precio": 35000,
  "desc": "Collar multicharms con piezas en baño de rodio.",
  "foto": "img/collar-multidijes.webp",
  "estado": "disp"
 },
 {
  "id": 15,
  "nombre": "Cadena trébol rosa",
  "cat": "cadenas",
  "precio": 25000,
  "desc": "Cadena y dije con baño de rodio.",
  "foto": "img/cadena-trebol-rosa.webp",
  "estado": "disp"
 },
 {
  "id": 16,
  "nombre": "Cadena Virgen gold",
  "cat": "cadenas",
  "precio": 22000,
  "desc": "Cadena con baño de rodio.",
  "foto": "img/cadena-virgen-gold.webp",
  "estado": "pedido"
 },
 {
  "id": 17,
  "nombre": "Choker Virgen Milagrosa",
  "cat": "cadenas",
  "precio": 22000,
  "desc": "Choker de perlas con dije de la Virgen Milagrosa en baño de rodio.",
  "foto": "img/choker-virgen-milagrosa.webp",
  "estado": "pedido"
 },
 {
  "id": 18,
  "nombre": "Iluminador Trendy Pin Up",
  "cat": "corporal",
  "precio": 13000,
  "desc": "El glowy nunca faltará en tu vida si este iluminador conforma tu maquillaje.",
  "foto": "img/iluminador-trendy-pin-up.webp"
 },
 {
  "id": 19,
  "nombre": "Protector solar Vitamina C Bioaqua SPF 50",
  "cat": "corporal",
  "precio": 13000,
  "desc": "Protector solar ligero e hidratante con vitamina C, SPF 50+ PA+++. Presentación de 50 g.",
  "foto": "img/protector-solar-vitamina-c-bioaqua-spf-50.webp"
 },
 {
  "id": 27,
  "nombre": "Shimmer Glam Julieta Bom bom",
  "cat": "corporal",
  "precio": 24000,
  "desc": "Body splash de 160 ml que aromatiza delicadamente tu cuerpo y deja destellos brillantes.",
  "foto": "img/shimmer-bombom.webp",
  "estado": "disp"
 },
 {
  "id": 28,
  "nombre": "Mantequilla Corporal Julieta Bom Bom",
  "cat": "corporal",
  "precio": 33000,
  "desc": "Mantequilla corporal de 220 ml, línea Bombombun.",
  "foto": "img/mantequilla-bombom.webp",
  "estado": "disp"
 },
 {
  "id": 29,
  "nombre": "Mantequilla Corporal Julieta Coco-Vainilla",
  "cat": "corporal",
  "precio": 33000,
  "desc": "Mantequilla corporal de 220 ml con aroma a coco y vainilla.",
  "foto": "img/mantequilla-coco-vainilla.webp",
  "estado": "disp"
 },
 {
  "id": 30,
  "nombre": "Aceite Corporal con destellos Julieta Coco",
  "cat": "corporal",
  "precio": 19000,
  "desc": "Aceite corporal de 125 ml con vitamina E, aceite de argán, macadamia y filtro. Hidratante, relajante, suaviza y tonifica.",
  "foto": "img/aceite-coco.webp",
  "estado": "disp"
 },
 {
  "id": 31,
  "nombre": "Crema Corporal hidratante con destellos Julieta Bombombun",
  "cat": "corporal",
  "precio": 25000,
  "desc": "Crema para manos y cuerpo de 250 ml con glitter. Hidrata, suaviza y protege. Contiene vitamina E, colágeno y aloe vera.",
  "foto": "img/crema-bombombun.webp",
  "estado": "disp"
 },
 {
  "id": 32,
  "nombre": "Exfoliante Corporal Julieta Bombombun",
  "cat": "corporal",
  "precio": 28000,
  "desc": "Gel exfoliante de 450 ml con aloe vera, vitamina E y semillas de macadamia y durazno.",
  "foto": "img/exfoliante-bombombun.webp",
  "estado": "disp"
 },
 {
  "id": 33,
  "nombre": "Crema Corporal hidratante con destellos Julieta Coco - Vainilla",
  "cat": "corporal",
  "precio": 25000,
  "desc": "Crema para manos y cuerpo de 250 ml con glitter. Hidrata, suaviza y protege. Contiene vitamina E, colágeno y aloe vera.",
  "foto": "img/crema-coco-vainilla.webp",
  "estado": "disp"
 },
 {
  "id": 34,
  "nombre": "Aceite Corporal con destellos Julieta Naranja",
  "cat": "corporal",
  "precio": 19000,
  "desc": "Aceite corporal de 125 ml con vitamina E, aceite de argán, macadamia y filtro. Hidratante, relajante, suaviza y tonifica.",
  "foto": "img/aceite-naranja.webp",
  "estado": "disp"
 }
];

const fs = require('fs');
const src = fs.readFileSync('productos.js', 'utf8');
const PRODUCTOS = new Function(src + '; return PRODUCTOS;')();

const BASE = 'https://catalogomelora.github.io/melora/';
const CATS = { kits: 'Kits', cadenas: 'Cadenas', corporal: 'Cuidado corporal', aretes: 'Aretes', pulseras: 'Pulseras' };
const esc = v => '"' + String(v ?? '').replace(/"/g, '""') + '"';

const header = ['id','title','description','availability','condition','price','link','image_link','brand','product_type','additional_image_link'];
const rows = PRODUCTOS.map(p => [
  p.id,
  p.nombre,
  p.desc,
  p.estado === 'pedido' ? 'available for order' : 'in stock',
  'new',
  p.precio + ' COP',
  BASE + '#' + p.cat,
  BASE + p.foto,
  'MELORA',
  CATS[p.cat] || p.cat,
  (p.fotos || []).slice(1).map(f => BASE + f).join(',')
].map(esc).join(','));

fs.writeFileSync('catalogo.csv', [header.join(','), ...rows].join('\n') + '\n');
console.log('Productos:', rows.length);

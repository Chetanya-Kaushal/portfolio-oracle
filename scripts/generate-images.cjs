const sharp = require('sharp');
const path = require('path');
const rootDir = path.join(__dirname, '..');

async function generateOGImage() {
  const svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C74634"/>
      <stop offset="50%" stop-color="#FF6B6B"/>
      <stop offset="100%" stop-color="#7B61FF"/>
    </linearGradient>
    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C74634"/>
      <stop offset="100%" stop-color="#00D4FF"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#C74634" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&amp;display=swap');
    </style>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#000"/>

  <!-- Grid pattern -->
  <g opacity="0.04">
    ${Array.from({length: 32}, (_, i) => `<line x1="${i*40}" y1="0" x2="${i*40}" y2="630" stroke="#C74634" stroke-width="0.5"/>`).join('')}
    ${Array.from({length: 16}, (_, i) => `<line x1="0" y1="${i*40}" x2="1200" y2="${i*40}" stroke="#C74634" stroke-width="0.5"/>`).join('')}
  </g>

  <!-- Central glow -->
  <circle cx="600" cy="315" r="300" fill="url(#glow)"/>

  <!-- Corner accents -->
  <path d="M30,30 L90,30 L90,32 L32,32 L32,90 L30,90 Z" fill="#C74634" opacity="0.4"/>
  <path d="M1170,600 L1110,600 L1110,598 L1168,598 L1168,540 L1170,540 Z" fill="#00D4FF" opacity="0.4"/>

  <!-- Neural Crystal icon -->
  <g transform="translate(20, 180)">
    <polygon points="200,10 280,58 335,134 335,260 280,336 200,384 120,336 65,260 65,134 120,58"
      fill="#0A0A0A" stroke="url(#ringGrad)" stroke-width="3"/>
    <polygon points="200,50 298,230 102,230" fill="rgba(199,70,52,0.14)" stroke="url(#mainGrad)" stroke-width="2"/>
    <polygon points="200,340 102,160 298,160" fill="rgba(0,212,255,0.08)" stroke="url(#ringGrad)" stroke-width="1.5" opacity="0.85"/>
    <circle cx="200" cy="200" r="46" fill="none" stroke="url(#mainGrad)" stroke-width="1.5" stroke-dasharray="4 7"/>
    <circle cx="200" cy="200" r="17" fill="#0A0A0A" stroke="url(#mainGrad)" stroke-width="2"/>
    <text x="200" y="206" text-anchor="middle" font-family="system-ui, sans-serif" font-size="6" font-weight="700" fill="#FAFAFA">CK</text>
    <circle cx="200" cy="50" r="4" fill="#00D4FF"/>
    <circle cx="298" cy="230" r="4" fill="#7B61FF"/>
    <circle cx="102" cy="230" r="4" fill="#C74634"/>
    <circle cx="200" cy="340" r="3" fill="#00FF88"/>
    <circle cx="335" cy="134" r="3" fill="#00D4FF"/>
    <circle cx="65" cy="134" r="3" fill="#FF6B6B"/>
    <line x1="208" y1="188" x2="248" y2="152" stroke="#C74634" stroke-width="1" opacity="0.7"/>
    <line x1="208" y1="212" x2="248" y2="248" stroke="#00D4FF" stroke-width="1" opacity="0.7"/>
    <line x1="192" y1="188" x2="152" y2="152" stroke="#7B61FF" stroke-width="1" opacity="0.7"/>
  </g>

  <!-- Text content -->
  <text x="480" y="260" font-family="system-ui, sans-serif" font-size="68" font-weight="700" fill="#FAFAFA">CHETANYA</text>
  <text x="480" y="340" font-family="system-ui, sans-serif" font-size="68" font-weight="700" fill="url(#mainGrad)">KAUSHAL</text>
  <text x="480" y="390" font-family="system-ui, sans-serif" font-size="22" fill="#94A3B8">Oracle HCM Techno-functional Consultant &amp; AI Agent Architect</text>

  <!-- Tags -->
  <g transform="translate(480, 420)">
    <rect x="0" y="0" width="180" height="36" rx="18" fill="rgba(199,70,52,0.15)" stroke="rgba(199,70,52,0.3)" stroke-width="1"/>
    <text x="90" y="23" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#C74634">Oracle Cloud</text>

    <rect x="196" y="0" width="150" height="36" rx="18" fill="rgba(123,97,255,0.15)" stroke="rgba(123,97,255,0.3)" stroke-width="1"/>
    <text x="271" y="23" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#7B61FF">Generative AI</text>

    <rect x="362" y="0" width="140" height="36" rx="18" fill="rgba(0,212,255,0.15)" stroke="rgba(0,212,255,0.3)" stroke-width="1"/>
    <text x="432" y="23" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#00D4FF">React &amp; Next.js</text>
  </g>

  <!-- URL -->
  <text x="1160" y="590" text-anchor="end" font-family="monospace" font-size="16" fill="#64748B" letter-spacing="1">chetanyakaushal.com</text>
</svg>`;

  await sharp(Buffer.from(svgIcon))
    .resize(1200, 630)
    .png({ quality: 95 })
    .toFile(path.join(rootDir, 'public', 'og-image.png'));

  console.log('✅ og-image.png generated (1200x630)');
}

async function generateFavicon() {
  const sizes = [16, 32, 48, 64, 128, 192, 512];
  const svgFavicon = require('fs').readFileSync(path.join(rootDir, 'public', 'oracle-icon.svg'), 'utf8');

  for (const size of sizes) {
    await sharp(Buffer.from(svgFavicon))
      .resize(size, size)
      .png()
      .toFile(path.join(rootDir, 'public', `favicon-${size}.png`));
  }

  // Generate favicon.ico with multiple sizes
  const icoBuffers = await Promise.all(
    [16, 32, 48].map(size =>
      sharp(Buffer.from(svgFavicon))
        .resize(size, size)
        .png()
        .toBuffer()
    )
  );

  console.log('✅ favicon PNGs generated');
}

(async () => {
  try {
    await generateOGImage();
    await generateFavicon();
  } catch (err) {
    console.error('Error:', err.message);
  }
})();

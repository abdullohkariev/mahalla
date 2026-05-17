// Sections part 1: Nav, Hero, Marquee, About, Menu — i18n + real photography

const { useState, useEffect, useRef } = React;

// ---------- Real photography (Unsplash) ----------
// Using stable known photo IDs. Build URLs at use site with sizing params.
const photo = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
const PHOTOS = {
  // food
  plov:        photo('1604152135912-04a022e23696'),        // rice/plov-like
  plovAlt:     photo('1574484284002-952d92456975'),
  shashlyk:    photo('1529692236671-f1f6cf9683ba'),        // kebab/skewers
  lagman:      photo('1569718212165-3a8278d5f624'),        // noodles
  manty:       photo('1496116218417-1a781b1c416c'),        // dumplings
  shurpa:      photo('1547592180-85f173990554'),           // soup
  bread:       photo('1517686469429-8bdb88b9f907'),        // bread/tandyr
  dastarkhan:  photo('1414235077428-338989a2e8c0'),        // spread
  spices:      photo('1505253758473-96b7015fcd40'),        // spices
  tea:         photo('1544787219-7f47ccb76574'),           // tea
  // interior
  interior1:   photo('1517248135467-4c7edcad34c4'),        // dim restaurant
  interior2:   photo('1559329007-40df8a9345d8'),           // bar/restaurant
  hallDome:    photo('1551632436-cbf8dd35adfa'),           // architectural / dome
  tandyrFire:  photo('1551845041-63e8e76836ea'),           // fire
  grill:       photo('1555939594-58d7cb561ad1'),           // grill
  suzani:      photo('1583394293214-28ded15ee548'),        // textile
};

// ---------- Reveal helper ----------
const useReveal = () => {
  React.useEffect(() => {
    const setup = () => {
      const els = document.querySelectorAll('.reveal:not(.in)');
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      els.forEach((el) => io.observe(el));
      return io;
    };
    const io1 = setup();
    const fallback = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add('in');
      });
    }, 300);
    return () => { io1.disconnect(); clearTimeout(fallback); };
  }, []);
};

// ---------- Lang switcher ----------
const LangSwitch = ({ compact }) => {
  const { lang, setLang } = useLang();
  return (
    <div className={`lang-switch ${compact ? 'compact' : ''}`}>
      {LANGS.map((l) => (
        <button
          key={l.code}
          className={lang === l.code ? 'active' : ''}
          onClick={() => setLang(l.code)}
          aria-label={l.full}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

// ---------- Nav ----------
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const t = useT();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a className="nav-brand" href="#top">
        <span className="bird-mini" aria-hidden="true"></span>
        <span>Mahalla 90<span className="apostrophe">'</span></span>
      </a>
      <nav className="nav-links">
        <a href="#about">{t('nav.philosophy')}</a>
        <a href="#menu">{t('nav.menu')}</a>
        <a href="#banquets">{t('nav.banquets')}</a>
        <a href="#gallery">{t('nav.atmosphere')}</a>
        <a href="#location">{t('nav.location')}</a>
      </nav>
      <div className="nav-right">
        <LangSwitch compact />
        <a href="#reserve" className="nav-cta">
          {t('nav.reserve')}
          <span className="arrow">→</span>
        </a>
      </div>
    </header>
  );
};

// ---------- Hero ----------
const Hero = ({ variant }) => {
  const t = useT();
  return (
    <section className="hero shell" id="top">
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow reveal">
            <span className="line"></span>
            <span className="eyebrow" style={{ color: 'var(--ink-2)' }}>{t('hero.tagline')}</span>
          </div>

          <h1 className="reveal reveal-delay-1">
            {t('hero.word1')}<br />
            <span className="ital">{t('hero.word2')}</span><br />
            <span className="ital" style={{ color: 'var(--gold)' }}>{t('hero.word3')}</span>
          </h1>

          <p className="hero-sub reveal reveal-delay-2">{t('hero.sub')}</p>

          <div className="hero-cta-row reveal reveal-delay-2">
            <a href="#reserve" className="btn btn-primary">
              {t('hero.reserveTable')}
              <span>→</span>
            </a>
            <a href="#menu" className="btn">{t('hero.viewMenu')}</a>
          </div>

          <div className="hero-meta reveal reveal-delay-3">
            <div>
              <b>5.0</b>
              <div style={{ marginTop: 4 }}>
                <span style={{ color: 'var(--gold)' }}>★★★★★</span> · {t('hero.ratingsCount')}
              </div>
            </div>
            <span className="sep"></span>
            <div>
              <b>{t('hero.avgCheck')}</b>
              <div style={{ marginTop: 4 }}>{t('hero.avgCheckValue')}</div>
            </div>
            <span className="sep"></span>
            <div>
              <b>{t('hero.hours')}</b>
              <div style={{ marginTop: 4 }}>{t('hero.hoursValue')}</div>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay-2">
          {variant === 'mosaic' ? (
            <HeroMosaicVisual />
          ) : variant === 'photo' ? (
            <HeroPhotoVisual />
          ) : variant === 'video' ? (
            <HeroVideoVisual />
          ) : (
            <HeroLogoVisual />
          )}
          <div className="frame"></div>
        </div>
      </div>

    </section>
  );
};

const HeroLogoVisual = () => (
  <div style={{
    position: 'absolute', inset: 0,
    background: 'radial-gradient(circle at 60% 40%, #2a55b3 0%, #1f3f8a 40%, #0d1f54 100%)',
    display: 'grid', placeItems: 'center',
  }}>
    <svg viewBox="0 0 600 750" width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.18 }}>
      <g fill="none" stroke="#d8a657" strokeWidth="0.8">
        {[60, 110, 160, 210, 260, 310].map((r, i) => <circle key={i} cx="300" cy="350" r={r} />)}
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * 2 * Math.PI;
          return <line key={i}
            x1={300 + Math.cos(a) * 70} y1={350 + Math.sin(a) * 70}
            x2={300 + Math.cos(a) * 310} y2={350 + Math.sin(a) * 310}
          />;
        })}
      </g>
      <g fill="#d8a657" opacity="0.5">
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * 2 * Math.PI;
          return <circle key={i} cx={300 + Math.cos(a) * 260} cy={350 + Math.sin(a) * 260} r="3" />;
        })}
      </g>
    </svg>

    <div style={{
      width: '52%', aspectRatio: '1',
      borderRadius: '50%',
      background: '#fbf6ea',
      display: 'grid', placeItems: 'center',
      boxShadow: '0 30px 80px rgba(0,0,0,0.4), inset 0 0 0 6px rgba(216,166,87,0.4)',
      position: 'relative', zIndex: 2,
    }}>
      <img src="assets/logo.jpg" alt="Mahalla 90'" style={{ width: '88%', mixBlendMode: 'multiply' }} />
    </div>

    <div style={{ position: 'absolute', top: '8%', left: '6%', color: '#d8a657', opacity: 0.4 }}>
      <OrnamentStar size={70} thin />
    </div>
    <div style={{ position: 'absolute', bottom: '14%', right: '8%', color: '#d8a657', opacity: 0.4 }}>
      <OrnamentStar size={50} thin />
    </div>
  </div>
);

const HeroMosaicVisual = () => (
  <div style={{
    position: 'absolute', inset: 0,
    background: '#1f3f8a',
    display: 'grid', placeItems: 'center',
    overflow: 'hidden',
  }}>
    <div style={{ color: '#d8a657', opacity: 0.5 }}>
      <OrnamentMedallion size={520} />
    </div>
    <div style={{
      position: 'absolute', bottom: '8%', left: '50%',
      transform: 'translateX(-50%)',
      color: '#fbf6ea',
      fontFamily: 'var(--font-script)',
      fontSize: 96, lineHeight: 0.8,
    }}>Mahalla 90'</div>
  </div>
);

// Hero "photo" variant — real plov photo
const HeroPhotoVisual = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#1a1612' }}>
    <img src={PHOTOS.plov} alt="" loading="lazy" style={{
      width: '100%', height: '100%', objectFit: 'cover',
      filter: 'saturate(1.05) contrast(1.03)',
    }} />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 90%)',
    }}></div>
  </div>
);

// Hero "video" variant — custom restaurant video
const HeroVideoVisual = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#1a1612' }}>
    <video
      src="assets/hero-video.mp4"
      autoPlay muted loop playsInline
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 90%)',
    }}></div>
  </div>
);

// ---------- Marquee ----------
const Marquee = () => {
  const t = useT();
  const items = [1,2,3,4,5,6].map((i) => t(`marquee.${i}`));
  const renderItems = (key) => (
    <>
      {items.map((tx, i) => (
        <React.Fragment key={`${key}-${i}`}>
          <span>{tx}</span>
          <span className="star">✦</span>
        </React.Fragment>
      ))}
    </>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        {renderItems('a')}
        {renderItems('b')}
      </div>
    </div>
  );
};

// ---------- About ----------
const About = () => {
  const t = useT();
  return (
    <section className="section about" id="about">
      <div style={{ position: 'absolute', top: 60, right: 60, color: 'var(--cobalt)', opacity: 0.06 }}>
        <OrnamentMedallion size={420} />
      </div>
      <div className="shell">
        <div className="about-grid">
          <div>
            <span className="eyebrow reveal"><span className="dot"></span>{t('about.eyebrow')}</span>
            <h2 className="reveal reveal-delay-1">
              {t('about.h2.line1.before')} <span className="ital">{t('about.h2.line1.word')}</span><br />
              {t('about.h2.line2.before')} <span className="ital">{t('about.h2.line2.word')}</span> {t('about.h2.line2.after')}
            </h2>

            <div className="about-body reveal reveal-delay-2">
              <p className="dropcap">{t('about.body.1')}</p>
              <p>{t('about.body.2')}</p>
            </div>

            <div className="about-stat-row reveal reveal-delay-3">
              <div className="about-stat">
                <div className="n">34<span className="sm">+</span></div>
                <div className="l">{t('about.stat1')}</div>
              </div>
              <div className="about-stat">
                <div className="n">200</div>
                <div className="l">{t('about.stat2')}</div>
              </div>
              <div className="about-stat">
                <div className="n">5.0</div>
                <div className="l">{t('about.stat3')}</div>
              </div>
            </div>
          </div>

          <div className="about-image-stack reveal reveal-delay-1">
            <div className="img big" style={{ backgroundColor: '#1a1612' }}>
              <img src={PHOTOS.hallDome} alt="" loading="lazy" style={{
                width: '100%', height: '100%', objectFit: 'cover',
              }} />
              <div className="img-overlay-gradient"></div>
              <div className="img-caption">
                <div className="img-caption-eyebrow">{t('about.caption1.eyebrow')}</div>
                {t('about.caption1.text')}
              </div>
            </div>
            <div className="img small">
              <img src={PHOTOS.tandyrFire} alt="" loading="lazy" style={{
                width: '100%', height: '100%', objectFit: 'cover',
              }} />
              <div className="img-overlay-gradient"></div>
              <div className="img-caption">
                <div className="img-caption-eyebrow">{t('about.caption2.eyebrow')}</div>
                {t('about.caption2.text')}
              </div>
            </div>
            <div className="badge">
              <svg viewBox="-80 -80 160 160" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <defs>
                  <path id="circletext" d="M 0,0 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
                </defs>
                <text fontFamily="var(--font-body)" fontSize="8" letterSpacing="4" fill="currentColor" fontWeight="500">
                  <textPath href="#circletext">MAHALLA 90' · TASHKENT · SINCE 1990 · </textPath>
                </text>
              </svg>
              <div className="core">
                <span className="script" style={{ fontSize: 36, color: 'var(--gold)' }}>est.</span>
                <div style={{ position: 'absolute', bottom: 38, fontSize: 14, fontStyle: 'italic' }}>1990</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Menu (redesigned: signature dishes preview + open full menu) ----------
const SIGNATURE_DISHES = [
  { key: 'plov',     photo: PHOTOS.plov,     featured: true,  badge: true },
  { key: 'shashlyk', photo: PHOTOS.shashlyk },
  { key: 'lagman',   photo: PHOTOS.lagman },
  { key: 'manty',    photo: PHOTOS.manty },
  { key: 'shurpa',   photo: PHOTOS.shurpa },
  { key: 'bread',    photo: PHOTOS.bread },
];

const Menu = ({ layout = 'grid' }) => {
  const t = useT();
  return (
    <section className="section menu" id="menu" data-layout={layout}>
      <div className="shell">
        <div className="menu-head reveal">
          <div>
            <span className="eyebrow"><span className="dot"></span>{t('menu.eyebrow')}</span>
            <h2 style={{ marginBottom: 0 }}>
              {t('menu.h2.line1')}<br />
              <span className="ital">{t('menu.h2.line2')}</span>
            </h2>
          </div>
          <p className="lede">{t('menu.lede')}</p>
        </div>

        <div className="menu-signature-label reveal">
          <span className="eyebrow"><span className="dot"></span>{t('menu.signatureLabel')}</span>
        </div>

        {layout === 'list' && <MenuList t={t} />}
        {layout === 'editorial' && <MenuEditorial t={t} />}
        {layout === 'grid' && <MenuGrid t={t} />}

        <div className="menu-cta-card reveal">
          <div className="menu-cta-left">
            <div className="menu-cta-eyebrow">{t('menu.viewFullSub')}</div>
            <h3 className="menu-cta-h3">{t('menu.viewFull')}</h3>
          </div>
          <div className="menu-cta-right">
            <a href="assets/menu.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
              {t('menu.viewFull')} <span>↗</span>
            </a>
            <a href="assets/menu.pdf" download className="btn-link">{t('menu.download')} ↓</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Layout: Grid of photo cards
const MenuGrid = ({ t }) => (
  <div className="menu-grid-cards reveal">
    {SIGNATURE_DISHES.map((d) => (
      <article key={d.key} className={`menu-card ${d.featured ? 'featured' : ''}`}>
        <div className="menu-card-img">
          <img src={d.photo} alt="" loading="lazy" />
          {d.badge && <span className="menu-card-badge">{t(`menu.dish.${d.key}.badge`)}</span>}
        </div>
        <div className="menu-card-body">
          <h3>{t(`menu.dish.${d.key}.name`)}</h3>
          <p>{t(`menu.dish.${d.key}.desc`)}</p>
          <div className="menu-card-price">{t(`menu.price.${d.key}`)}</div>
        </div>
      </article>
    ))}
  </div>
);

// Layout: classic editorial list with prices on right
const MenuList = ({ t }) => (
  <div className="menu-list reveal">
    {SIGNATURE_DISHES.map((d, i) => (
      <div key={d.key} className="menu-list-row">
        <span className="num">{String(i + 1).padStart(2, '0')}</span>
        <div className="body">
          <div className="name">
            {t(`menu.dish.${d.key}.name`)}
            {d.badge && <span className="badge">{t(`menu.dish.${d.key}.badge`)}</span>}
          </div>
          <div className="desc">{t(`menu.dish.${d.key}.desc`)}</div>
        </div>
        <div className="img-thumb">
          <img src={d.photo} alt="" loading="lazy" />
        </div>
        <span className="price">{t(`menu.price.${d.key}`)}</span>
      </div>
    ))}
  </div>
);

// Layout: editorial — big asymmetric splits
const MenuEditorial = ({ t }) => (
  <div className="menu-editorial reveal">
    {SIGNATURE_DISHES.map((d, i) => (
      <article key={d.key} className={`menu-ed-row ${i % 2 ? 'flip' : ''}`}>
        <div className="menu-ed-img">
          <img src={d.photo} alt="" loading="lazy" />
          {d.badge && <span className="menu-ed-badge">{t(`menu.dish.${d.key}.badge`)}</span>}
        </div>
        <div className="menu-ed-body">
          <div className="num">{String(i + 1).padStart(2, '0')} / 06</div>
          <h3>{t(`menu.dish.${d.key}.name`)}</h3>
          <p>{t(`menu.dish.${d.key}.desc`)}</p>
          <div className="menu-ed-price">{t(`menu.price.${d.key}`)}</div>
        </div>
      </article>
    ))}
  </div>
);

Object.assign(window, { Nav, Hero, Marquee, About, Menu, useReveal, PHOTOS, LangSwitch });

// Sections part 2: Banquets, Gallery, Location, Reservation, Footer — i18n + real photography

// ---------- Banquets ----------
const Banquets = () => {
  const t = useT();
  return (
    <section className="section banquets" id="banquets">
      <div style={{ position: 'absolute', top: -40, right: -40, color: 'var(--gold-2)', opacity: 0.08 }}>
        <OrnamentMedallion size={500} />
      </div>
      <div style={{ position: 'absolute', bottom: -60, left: -60, color: 'var(--gold-2)', opacity: 0.05 }}>
        <OrnamentMedallion size={400} />
      </div>
      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
        <div className="banquets-grid">

          {/* Left: heading + cards + CTA */}
          <div className="banquets-left">
            <span className="eyebrow reveal" style={{ color: 'var(--gold-2)' }}>
              <span className="dot"></span>{t('banquets.eyebrow')}
            </span>
            <h2 className="reveal reveal-delay-1">
              {t('banquets.h2.line1')}<br />
              <span className="ital">{t('banquets.h2.line2')}</span>
            </h2>

            <p className="lede reveal reveal-delay-2">{t('banquets.lede')}</p>

            <div className="reveal" style={{ marginTop: 40 }}>
              <a href="#reserve" className="btn btn-gold">{t('banquets.cta')} <span>→</span></a>
            </div>
          </div>

          {/* Right: 9:16 video */}
          <div className="banquets-video reveal">
            <video
              src="assets/banquets-video.mp4"
              autoPlay muted loop playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// ---------- Gallery (videos) ----------
const GALLERY_ITEMS = [
  { tagKey: 'interior',   cls: 'g1', video: 'assets/interior.mp4' },
  { tagKey: 'kitchen',    cls: 'g2', video: 'assets/kitchen.mp4' },
  { tagKey: 'atmosphere', cls: 'g3', video: 'assets/atmosphere.mp4' },
  { tagKey: 'service',    cls: 'g4', video: 'assets/service.mp4' },
  { tagKey: 'hall',       cls: 'g5', video: 'assets/hall.mp4' },
  { tagKey: 'kitchen',    cls: 'g6', video: 'assets/kitchen-2.mp4' },
];

const Gallery = () => {
  const t = useT();
  return (
    <section className="section gallery" id="gallery">
      <div className="shell">
        <div style={{ marginBottom: 60 }}>
          <span className="eyebrow reveal"><span className="dot"></span>{t('gallery.eyebrow')}</span>
          <h2 className="reveal reveal-delay-1">
            {t('gallery.h2.line1')}<br />
            <span className="ital">{t('gallery.h2.line2')}</span>
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink-2)', marginTop: 16 }}>
            {t('gallery.lede')}
          </p>
        </div>

        <div className="gallery-grid">
          {GALLERY_ITEMS.map((g, i) => (
            <div key={i} className={`gallery-cell ${g.cls} reveal`} style={{ transitionDelay: `${i * 0.05}s` }}>
              <video src={g.video} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <span className="tag">{t(`gallery.tag.${g.tagKey}`)}</span>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: 60, textAlign: 'center' }}>
          <a href="https://instagram.com/mahalla90uz" target="_blank" rel="noreferrer" className="btn">
            {t('gallery.cta')} <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// ---------- Location ----------
const Location = () => {
  const t = useT();
  return (
    <section className="section location" id="location">
      <div className="shell">
        <div className="location-grid">
          <div className="location-info">
            <span className="eyebrow reveal"><span className="dot"></span>{t('location.eyebrow')}</span>
            <h2 className="reveal reveal-delay-1">
              {t('location.h2.line1')}<br />
              <span className="ital">{t('location.h2.line2')}</span>
            </h2>

            <p className="addr reveal reveal-delay-2">
              {t('location.addr1')}<br />
              {t('location.addr2')}
            </p>

            <div className="reveal reveal-delay-3">
              <div className="row">
                <div className="label">{t('location.reservationsLabel')}</div>
                <div className="value">
                  <a className="phone" href="tel:+998771000505">+998 77 100-05-05</a>
                  <a className="phone" href="tel:+998770510505">+998 77 051-05-05</a>
                </div>
              </div>
              <div className="row">
                <div className="label">{t('location.hoursLabel')}</div>
                <div className="value">
                  {t('location.hoursValue1')}<br />
                  {t('location.hoursValue2')}
                </div>
              </div>
              <div className="row">
                <div className="label">{t('location.parkingLabel')}</div>
                <div className="value">{t('location.parkingValue')}</div>
              </div>
            </div>
          </div>

          <div className="map-card reveal reveal-delay-2" style={{ overflow: 'hidden' }}>
            <iframe
              title="Mahalla 90 on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0!2d69.2905905!3d41.3363546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef504f4b37ef5%3A0x2ac47085d61ec5ac!2sMAHALLA90+RESTAURANT!5e0!3m2!1sru!2suz!4v1"
              width="100%" height="100%"
              style={{ position: 'absolute', inset: 0, border: 0 }}
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
            <div style={{
              position: 'absolute', bottom: 18, left: 18, right: 18,
              display: 'flex', justifyContent: 'space-between',
              gap: 12, flexWrap: 'wrap', zIndex: 5,
            }}>
              <a className="btn" style={{ background: 'var(--paper)', borderColor: 'var(--rule)' }}
                 href="https://yandex.com/maps/?text=Mahalla+90+Tashkent" target="_blank" rel="noreferrer">
                {t('location.yandex')} <span>↗</span>
              </a>
              <a className="btn" style={{ background: 'var(--paper)', borderColor: 'var(--rule)' }}
                 href="https://maps.google.com/?q=Mahalla+90+Tashkent" target="_blank" rel="noreferrer">
                {t('location.gmaps')} <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// ---------- Reservation ----------
const TIMES = ['12:00', '13:00', '14:00', '18:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
const GUESTS = [2, 3, 4, 5, 6, 7, 8, '9+'];

const Reservation = () => {
  const t = useT();
  const { lang } = useLang();
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: 2, occasion: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target ? e.target.value : e }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) return;
    const [y, m, d] = form.date.split('-');
    const formattedDate = `${d}.${m}.${y}`;
    const msg = `🍽 Бронирование стола\n\n👤 Имя: ${form.name}\n📞 Телефон: ${form.phone}\n📅 Дата: ${formattedDate}\n🕐 Время: ${form.time}\n👥 Гостей: ${form.guests}${form.occasion ? `\n🎉 Повод: ${form.occasion}` : ''}`;
    window.location.href = `https://t.me/mahalla90uz?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="section reserve" id="reserve">
      <div className="shell">
        <div className="reserve-card reveal">
          <div className="reserve-side">
            <span className="eyebrow" style={{ color: 'var(--gold-2)' }}>
              <span className="dot"></span>{t('reserve.eyebrow')}
            </span>
            <h2 style={{ marginTop: 14 }}>
              {t('reserve.h2.line1')}<br />
              <span className="ital">{t('reserve.h2.line2')}</span>
            </h2>
            <p>{t('reserve.p')}</p>

            <div className="hour-list">
              <div className="row">
                <span className="d">{t('reserve.day.daily')}</span>
                <span className="v">{t('reserve.hours.daily')}</span>
              </div>
            </div>

            <div style={{ marginTop: 36, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 17, color: 'rgba(251,246,234,0.8)' }}>
              {t('reserve.orCall')}<br />
              <a href="tel:+998771000505" style={{ color: 'var(--gold-2)', fontSize: 22, fontStyle: 'italic' }}>+998 77 100-05-05</a>
            </div>

            <div style={{ position: 'absolute', bottom: -60, right: -60, color: 'var(--gold-2)', opacity: 0.12 }}>
              <OrnamentMedallion size={300} />
            </div>
          </div>

          {submitted ? (
            <div className="reserve-success">
              <div className="check">✓</div>
              <h3>{t('reserve.success.h3')}</h3>
              <p style={{ marginTop: 12 }}>
                {t('reserve.success.p')}<br />
                {t('reserve.success.callTo')} <b style={{ color: 'var(--ink)' }}>{form.phone}</b>
              </p>
              <div style={{ marginTop: 32, display: 'inline-flex', gap: 24, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 19, color: 'var(--ink-2)' }}>
                <span>{form.date}</span>
                <span>·</span>
                <span>{form.time}</span>
                <span>·</span>
                <span>{form.guests} {t('reserve.success.guests')}</span>
              </div>
            </div>
          ) : (
            <form className="reserve-form" onSubmit={submit}>
              <div className="grid">
                <div>
                  <label>{t('reserve.field.name')}</label>
                  <input type="text" placeholder={t('reserve.field.name.ph')} value={form.name} onChange={update('name')} required />
                </div>
                <div>
                  <label>{t('reserve.field.phone')}</label>
                  <input type="tel" placeholder={t('reserve.field.phone.ph')} value={form.phone} onChange={update('phone')} required />
                </div>
              </div>

              <div className="grid">
                <div>
                  <label>{t('reserve.field.date')}</label>
                  <input type="date" lang={lang} value={form.date} onChange={update('date')} required />
                </div>
                <div>
                  <label>{t('reserve.field.time')}</label>
                  <input type="time" lang={lang} value={form.time} onChange={update('time')} required />
                </div>
              </div>

              <div>
                <label>{t('reserve.field.guests')}</label>
                <div className="guest-picker">
                  {GUESTS.map((g) => (
                    <button
                      type="button"
                      key={g}
                      className={form.guests == g ? 'active' : ''}
                      onClick={() => setForm((f) => ({ ...f, guests: g }))}
                    >
                      {g}
                    </button>
                  ))}
                </div>
                <select
                  className="guest-select"
                  value={form.guests}
                  onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))}
                >
                  {GUESTS.map((g) => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>

              <div>
                <label>{t('reserve.field.occasion')}</label>
                <input type="text" placeholder={t('reserve.field.occasion.ph')} value={form.occasion} onChange={update('occasion')} />
              </div>

              <div className="submit-row">
                <button type="submit" className="btn btn-primary btn-large">
                  {t('reserve.submit')} <span>→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// ---------- Footer ----------
const Footer = () => {
  const t = useT();
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Mahalla <span className="gold">90'</span></h3>
            <p>{t('footer.tagline')}</p>
            <div style={{ marginTop: 22 }}>
              <LangSwitch />
            </div>
          </div>

        </div>

        <div className="footer-base">
          <span>{t('footer.copyright')}</span>
          <div className="socials">
            <a href="https://instagram.com/mahalla90uz" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a href="https://t.me/mahalla90uz" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.4 4.2 2.8 11.4c-1 .4-1 .9-.2 1.2l4.4 1.4 1.7 5.2c.2.6.4.6.8.2l2.4-2.3 4.4 3.3c.8.5 1.4.2 1.6-.7l2.9-13.6c.3-1.2-.4-1.7-1.4-1.4Zm-4.8 4.4-8.5 7.7-.3 3.3-1.6-5.2 10-6.5c.5-.3.8 0 .4.7Z" />
              </svg>
            </a>
            <a href="tel:+998771000505" aria-label="Phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2c1.1.4 2.3.6 3.6.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.6 21 3 14.4 3 6.5a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.3.2 2.5.6 3.6a1 1 0 0 1-.2 1L6.6 10.8Z" />
              </svg>
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>{t('footer.design')}</span>
            <a href="https://shoshdigital.uz" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13 }}>By</span>
              <img src="assets/SD..svg" alt="Shosh Digital" style={{ height: 18 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Banquets, Gallery, Location, Reservation, Footer });

// Main app — wires sections + Tweaks panel + language state

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "cream",
  "heroVisual": "video",
  "menuLayout": "grid",
  "fontPair": "cormorant-dmsans",
  "showMarquee": true,
  "lang": "ru"
}/*EDITMODE-END*/;

const FONT_PAIRS = {
  'cormorant-dmsans': {
    display: '"Cormorant Garamond", "Times New Roman", serif',
    body: '"DM Sans", system-ui, sans-serif',
    script: '"Italianno", "Cormorant Garamond", serif',
  },
  'playfair-jost': {
    display: '"Playfair Display", serif',
    body: '"Jost", system-ui, sans-serif',
    script: '"Italianno", serif',
  },
  'libre-albert': {
    display: '"Libre Caslon Display", "Cormorant Garamond", serif',
    body: '"Albert Sans", system-ui, sans-serif',
    script: '"Italianno", serif',
  },
};

const App = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLang] = React.useState(t.lang || 'ru');

  useReveal();

  // Apply theme
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', t.theme);
  }, [t.theme]);

  // Apply font pair
  React.useEffect(() => {
    const fp = FONT_PAIRS[t.fontPair] || FONT_PAIRS['cormorant-dmsans'];
    document.documentElement.style.setProperty('--font-display', fp.display);
    document.documentElement.style.setProperty('--font-body', fp.body);
    document.documentElement.style.setProperty('--font-script', fp.script);
  }, [t.fontPair]);

  // Persist language as tweak too
  React.useEffect(() => {
    if (t.lang && t.lang !== lang) setLang(t.lang);
  }, [t.lang]);

  const updateLang = (newLang) => {
    setLang(newLang);
    setTweak('lang', newLang);
    document.documentElement.lang = newLang;
  };

  return (
    <LangContext.Provider value={{ lang, setLang: updateLang }}>
      <Nav />
      <Hero variant={t.heroVisual} />
      {t.showMarquee && <Marquee />}
      <About />
      <Menu layout={t.menuLayout} />
      <Banquets />
      <Gallery />
      <Location />
      <Reservation />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Language" />
        <TweakRadio
          label="Locale"
          value={lang}
          options={[
            { value: 'ru', label: 'РУС' },
            { value: 'uz', label: 'UZB' },
            { value: 'en', label: 'EN' },
          ]}
          onChange={updateLang}
        />

        <TweakSection label="Theme" />
        <TweakRadio
          label="Palette"
          value={t.theme}
          options={[
            { value: 'cream', label: 'Cream' },
            { value: 'night', label: 'Night' },
            { value: 'cobalt', label: 'Cobalt' },
          ]}
          onChange={(v) => setTweak('theme', v)}
        />

        <TweakSection label="Hero" />
        <TweakRadio
          label="Visual"
          value={t.heroVisual}
          options={[
            { value: 'photo', label: 'Photo' },
            { value: 'video', label: 'Video' },
            { value: 'logo', label: 'Logo' },
            { value: 'mosaic', label: 'Mosaic' },
          ]}
          onChange={(v) => setTweak('heroVisual', v)}
        />
        <TweakToggle
          label="Marquee strip"
          value={t.showMarquee}
          onChange={(v) => setTweak('showMarquee', v)}
        />

        <TweakSection label="Menu layout" />
        <TweakRadio
          label="Style"
          value={t.menuLayout}
          options={[
            { value: 'grid', label: 'Grid' },
            { value: 'list', label: 'List' },
            { value: 'editorial', label: 'Editorial' },
          ]}
          onChange={(v) => setTweak('menuLayout', v)}
        />

        <TweakSection label="Typography" />
        <TweakSelect
          label="Font pairing"
          value={t.fontPair}
          options={[
            { value: 'cormorant-dmsans', label: 'Cormorant × DM Sans' },
            { value: 'playfair-jost', label: 'Playfair × Jost' },
            { value: 'libre-albert', label: 'Libre Caslon × Albert' },
          ]}
          onChange={(v) => setTweak('fontPair', v)}
        />
      </TweaksPanel>
    </LangContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

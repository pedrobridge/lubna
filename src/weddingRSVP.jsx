import { useEffect, useMemo, useState } from 'react';

// ======= CONFIGURÁVEIS =======
const EVENT_DATE = new Date('2026-01-07T18:00:00'); // horário local
const VENUE_NAME = 'Nara Desert, Dubai';
const MAP_IFRAME_SRC = 'https://www.google.com/maps?q=Nara+Desert+Dubai&output=embed';
// Paleta sugerida "deserto": cream, sand, camel, terracotta, olive
const PALETTE = ['#F2EDE4', '#DCC7A1', '#B88646', '#C26841', '#7A8C5A'];
const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop'; // dunas
// ======= /CONFIG =======

function useCountdown(targetDate) {
  const [left, setLeft] = useState(() => targetDate - new Date());
  useEffect(() => {
    const id = setInterval(() => setLeft(targetDate - new Date()), 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  const clamp = Math.max(left, 0);
  const days = Math.floor(clamp / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamp / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamp / (1000 * 60)) % 60);
  const seconds = Math.floor((clamp / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function Calendar({ year = 2026, month = 0, highlight = 7 }) {
  // month: 0 = Jan
  const grid = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [year, month]);

  const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div className="glass rounded-3xl p-6 w-full max-w-sm">
      <div className="text-center mb-3">
        <p className="font-display tracking-wide opacity-80">Wedding Date</p>
        <h3 className="text-2xl font-display font-semibold">January {year}</h3>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm opacity-80">
        {labels.map((l) => (
          <div key={l} className="py-1">{l}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 mt-2 text-center">
        {grid.map((d, i) => (
          <div
            key={i}
            className={`h-9 flex items-center justify-center rounded-xl ${
              d === highlight
                ? 'bg-[#C26841] text-white font-semibold shadow'
                : d
                ? 'bg-white/5'
                : ''
            }`}
          >
            {d ?? ''}
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-sm opacity-80">Ceremony: 6:00 PM</p>
    </div>
  );
}

function Timeline() {
  const items = [
    ['16:00', 'Recepção dos convidados'],
    ['17:00', 'Welcome drinks no deserto'],
    ['18:00', 'Cerimônia'],
    ['19:00', 'Jantar & discursos'],
    ['21:00', 'Festa & dança'],
  ];
  return (
    <div className="glass rounded-3xl p-6 w-full max-w-lg">
      <h3 className="text-2xl font-display mb-4">Programação</h3>
      <ul className="space-y-3">
        {items.map(([hour, what]) => (
          <li key={hour} className="flex items-start gap-3">
            <span className="shrink-0 rounded-full w-2 h-2 mt-2" style={{ background: PALETTE[3] }} />
            <div className="flex-1">
              <p className="font-semibold">{hour}</p>
              <p className="opacity-80">{what}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DressCode() {
  return (
    <div className="glass rounded-3xl p-6 w-full max-w-lg">
      <h3 className="text-2xl font-display mb-2">Dress code — Desert Chic</h3>
      <p className="opacity-80 mb-4">Tons quentes e naturais, tecidos leves. Evitar branco total.</p>
      <div className="flex gap-3">
        {PALETTE.map((c) => (
          <div key={c} className="w-12 h-12 rounded-full border border-white/20 shadow" style={{ background: c }} />
        ))}
      </div>
    </div>
  );
}

export default function WeddingRSVP() {
  const { days, hours, minutes, seconds } = useCountdown(EVENT_DATE);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section
        className="relative h-[80vh] md:h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15,14,13,.4), rgba(15,14,13,.8)), url(${HERO_IMAGE_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center px-6">
          <h1 className="font-script text-[64px] md:text-[92px] leading-none text-[#F2EDE4]">
            Lubna & Abdulla
          </h1>
          <p className="mt-2 text-lg md:text-xl font-display tracking-wide opacity-90">
            Dubai • 07 January 2026
          </p>

          {/* Countdown */}
          <div className="mt-8 flex items-center justify-center gap-3 md:gap-6">
            {[
              ['Days', days],
              ['Hours', hours],
              ['Minutes', minutes],
              ['Seconds', seconds],
            ].map(([label, val]) => (
              <div key={label} className="glass rounded-2xl px-4 py-3 text-center min-w-[88px]">
                <div className="text-2xl md:text-3xl font-semibold">{String(val).padStart(2, '0')}</div>
                <div className="text-xs opacity-80">{label}</div>
              </div>
            ))}
          </div>

          <a href="#rsvp" className="inline-block mt-10 rounded-full px-6 py-3 font-semibold"
             style={{ background: PALETTE[3], color: '#fff' }}>
            Confirmar presença
          </a>
        </div>
      </section>

      {/* GRID: Calendar / Local / Programa / DressCode */}
      <section className="px-6 py-14 flex flex-col items-center gap-10">
        <Calendar year={2026} month={0} highlight={7} />

        <div className="glass rounded-3xl p-6 w-full max-w-lg">
          <h3 className="text-2xl font-display mb-4">Local</h3>
          <p className="opacity-90 mb-3">{VENUE_NAME}</p>
          <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Map"
              src={MAP_IFRAME_SRC}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            href="https://goo.gl/maps/"
            target="_blank" rel="noreferrer"
            className="inline-block mt-4 underline opacity-90"
          >
            Ver mapa no Google Maps
          </a>
        </div>

        <Timeline />
        <DressCode />
      </section>

      {/* RSVP */}
      <section id="rsvp" className="px-6 py-16 flex flex-col items-center">
        <div className="glass rounded-3xl p-6 w-full max-w-lg">
          <h3 className="text-3xl font-display mb-6">RSVP</h3>

          {/* Netlify Forms: NÃO envia e-mail; fica no painel Forms */}
          <form
            name="rsvp"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="rsvp" />
            <input type="hidden" name="bot-field" />

            <div>
              <label className="block mb-1 opacity-90">Nome completo</label>
              <input name="name" required
                     className="w-full rounded-xl bg-white/5 border border-white/15 px-3 py-3 outline-none focus:border-white/40" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 opacity-90">Nº de convidados</label>
                <input name="guests" type="number" min="1" required
                       className="w-full rounded-xl bg-white/5 border border-white/15 px-3 py-3 outline-none focus:border-white/40" />
              </div>
              <div>
                <label className="block mb-1 opacity-90">Restrições alimentares</label>
                <input name="diet"
                       className="w-full rounded-xl bg-white/5 border border-white/15 px-3 py-3 outline-none focus:border-white/40" />
              </div>
            </div>

            <div>
              <label className="block mb-1 opacity-90">Mensagem (opcional)</label>
              <textarea name="message" rows="3"
                        className="w-full rounded-xl bg-white/5 border border-white/15 px-3 py-3 outline-none focus:border-white/40"></textarea>
            </div>

            <button
              className="w-full rounded-2xl px-4 py-3 font-semibold shadow"
              style={{ background: PALETTE[3], color: '#fff' }}
            >
              Enviar confirmação
            </button>
          </form>

          <p className="text-xs opacity-70 mt-4">
            As respostas ficam disponíveis em Netlify → Forms → <b>rsvp</b>.
          </p>
        </div>

        <p className="opacity-70 mt-10">Com carinho, Lubna & Abdulla</p>
      </section>
    </div>
  );
}

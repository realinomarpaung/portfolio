export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#fff', color: '#111', fontSize: '14px' }}>

      {/* ── NAV ── */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 48px', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ fontSize: '13px', fontWeight: 500 }}>realino</div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ fontSize: '12px', color: '#888', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ fontSize: '12px', color: '#888', textDecoration: 'none' }}>Work</a>
          <a href="#" style={{ fontSize: '12px', color: '#888', textDecoration: 'none' }}>About</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '48px 48px 40px', borderBottom: '1px solid #f0f0f0', alignItems: 'start' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.5px', marginBottom: '24px' }}>
            Designing products that<br />scale and make sense
          </h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={{ padding: '8px 16px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '12px', color: '#333', background: 'white', cursor: 'pointer' }}>
              Get in touch
            </button>
            <button style={{ padding: '8px 16px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '12px', color: '#333', background: 'white', cursor: 'pointer' }}>
              See my work
            </button>
          </div>
        </div>
        <div style={{ fontSize: '13px', color: '#555', lineHeight: 1.7, fontWeight: 300, paddingTop: '8px' }}>
          With 7+ years of experience, I build scalable digital products with a focus on clarity, usability, and design systems. Based in Jogjakarta, working remotely with global teams.
        </div>
      </div>

      {/* ── PROJECTS STRIP ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid #f0f0f0' }}>
        {[{ bg: '#e8eef5' }, { bg: '#f0f0f0' }, { bg: '#eef5f0' }].map((item, i) => (
          <div key={i} style={{ background: item.bg, aspectRatio: '4/3', borderRight: i < 2 ? '1px solid #f0f0f0' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#bbb', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Project Image
          </div>
        ))}
      </div>

      {/* ── TRUST SECTION ── */}
      <div style={{ padding: '40px 48px', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '-0.3px', marginBottom: '6px' }}>
          A trusted design partner for 40+ clients worldwide.
        </div>
        <div style={{ fontSize: '13px', color: '#777', fontWeight: 300, marginBottom: '32px' }}>
          Let's collaborate to turn your vision into a high-impact product.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
          {['Telkom Indonesia', 'Ulma', 'Foodics', 'Amartha', 'Life Insurance Review', 'Vendr', 'Beambox', 'Hostinger', 'Tokopedia', 'My Ssaem', 'Chargeflow', '+ Your company'].map((logo, i) => (
            <div key={i} style={{ border: '1px solid #f0f0f0', borderRadius: '8px', height: '44px', fontSize: '10px', color: '#999', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4px' }}>
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* ── SELECTED WORKS ── */}
      <div style={{ padding: '0 48px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0 8px', borderBottom: '1px solid #f0f0f0', marginBottom: '40px' }}>
          <span style={{ fontSize: '11px', color: '#aaa', letterSpacing: '0.5px' }}>01 / 03</span>
          <span style={{ fontSize: '11px', color: '#aaa', letterSpacing: '1px', textTransform: 'uppercase' }}>Work</span>
        </div>
        <div style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.3px', marginBottom: '32px' }}>Selected works</div>

        {[
          {
            title: 'Streamlining AI app builder experience with cleaner UI',
            client: 'Watum · 2025',
            desc: 'Redesigning Vibe Studio to eliminate UI clutter, surface hidden features, streamline upgrades, and make credit information visible—directly addressing user frustrations that were blocking conversions.',
            tags: ['Redesign', 'Web App', 'Web Design'],
            bg: '#eef2ff'
          },
          {
            title: "Building Amartha 'Funds' design systems",
            client: 'Amartha · 2024',
            desc: "Amartha's product faced scalability challenges with inconsistent UI patterns and fragmented components. We built a robust design system that unified the experience and improved team collaboration.",
            tags: ['Design Systems', 'Design Governance', 'Documentation'],
            bg: '#fdf4ff'
          },
          {
            title: 'Building My Ssaem mobile apps for better learning experience',
            client: 'My Ssaem · 2022',
            desc: 'From concept to launch: How we transformed the My Ssaem learning experience through a mobile app that prioritizes user engagement, personalized learning paths, and intuitive course navigation.',
            tags: ['0 to 1', 'Mobile App', 'Visual Design'],
            bg: '#f0fdf4'
          }
        ].map((project, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '40px', padding: '40px 0', borderBottom: '1px solid #f0f0f0', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '-0.3px', lineHeight: 1.3, marginBottom: '6px' }}>{project.title}</div>
              <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '16px' }}>{project.client}</div>
              <div style={{ fontSize: '13px', color: '#555', lineHeight: 1.7, fontWeight: 300, marginBottom: '20px' }}>{project.desc}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                {project.tags.map((tag, t) => (
                  <span key={t} style={{ padding: '4px 10px', border: '1px solid #e5e5e5', borderRadius: '4px', fontSize: '11px', color: '#666' }}>{tag}</span>
                ))}
              </div>
              <div style={{ fontSize: '12px', color: '#333', cursor: 'pointer' }}>Read case study →</div>
            </div>
            <div style={{ background: project.bg, borderRadius: '10px', aspectRatio: '16/10', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', fontSize: '11px', color: '#bbb', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Project Image
              <div style={{ display: 'flex', gap: '8px', position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'white', border: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '10px', color: '#555' }}>‹</div>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'white', border: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '10px', color: '#555' }}>›</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── TESTIMONIALS ── */}
      <div style={{ padding: '48px 48px', background: '#fafafa', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.3px', marginBottom: '4px' }}>What colleagues say</div>
        <div style={{ fontSize: '13px', color: '#888', fontWeight: 300, marginBottom: '32px' }}>Kind words from people I've had the pleasure of working with</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { quote: "Working with Realino was a game-changer. His ability to translate complex requirements into clean, intuitive interfaces is something I rarely see. He brings both strategic thinking and pixel-perfect execution.", name: 'Ahmad Rizky', role: 'Product Manager · Tokopedia', initials: 'AR', avatarBg: '#6366f1' },
            { quote: "Realino has an incredible eye for detail and a deep understanding of user needs. The design system he built for us saved our team months of work and became the foundation for everything we ship.", name: 'Sari Rahayu', role: 'Engineering Lead · Amartha', initials: 'SR', avatarBg: '#f59e0b' },
            { quote: "One of the most collaborative designers I've worked with. He listens deeply, asks the right questions, and always delivers work that exceeds expectations. A true design partner.", name: 'Budi Pratama', role: 'CEO · Beambox', initials: 'BP', avatarBg: '#10b981' }
          ].map((t, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #efefef', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '28px', color: '#ddd', lineHeight: 1, marginBottom: '8px', fontFamily: 'Georgia, serif' }}>"</div>
                <div style={{ fontSize: '13px', color: '#444', lineHeight: 1.7, fontWeight: 300 }}>{t.quote}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid #f5f5f5' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: t.avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 600, color: 'white', flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: '#111' }}>{t.name}</div>
                  <div style={{ fontSize: '11px', color: '#aaa', marginTop: '1px' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  )
}

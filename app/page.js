'use client'
import { useState } from 'react'

const projects = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    client: 'Lorem Inc · 2025',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    tags: ['Lorem', 'Ipsum', 'Dolor'],
    bg: '#eef2ff'
  },
  {
    title: 'Sed do eiusmod tempor incididunt ut labore dolore',
    client: 'Ipsum Co · 2024',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa.',
    tags: ['Amet', 'Consectetur', 'Adipiscing'],
    bg: '#fdf4ff'
  },
  {
    title: 'Ut enim ad minim veniam quis nostrud exercitation',
    client: 'Dolor Ltd · 2022',
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    tags: ['Elit', 'Sed Do', 'Eiusmod'],
    bg: '#f0fdf4'
  }
]

const testimonials = [
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.", name: 'Lorem Ipsum', role: 'Dolor Sit · Amet Corp', initials: 'LI', avatarBg: '#6366f1' },
  { quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident deserunt mollit.", name: 'Consectetur Elit', role: 'Adipiscing · Ipsum Co', initials: 'CE', avatarBg: '#f59e0b' },
  { quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.", name: 'Dolor Amet', role: 'Sed Do · Lorem Inc', initials: 'DA', avatarBg: '#10b981' }
]

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#fff', color: '#111', fontSize: '14px' }}>

      {/* ── GLOBAL STYLES for transitions ── */}
      <style>{`
        * { box-sizing: border-box; }
        .project-image {
          transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      box-shadow 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .project-image:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        .tcard {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      border-color 0.3s;
        }
        .tcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.06);
          border-color: #d5d5d5 !important;
        }
        .nav-link {
          position: relative;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #111;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: #111 !important; }
        .btn-hover {
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }
        .btn-hover:hover {
          border-color: #111 !important;
          background: #111 !important;
          color: white !important;
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 48px', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ fontSize: '13px', fontWeight: 500 }}>realino</div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" className="nav-link" style={{ fontSize: '12px', color: '#888', textDecoration: 'none' }}>Home</a>
          <a href="#" className="nav-link" style={{ fontSize: '12px', color: '#888', textDecoration: 'none' }}>Work</a>
          <a href="#" className="nav-link" style={{ fontSize: '12px', color: '#888', textDecoration: 'none' }}>About</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '48px 48px 40px', borderBottom: '1px solid #f0f0f0', alignItems: 'start' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.5px', marginBottom: '24px' }}>
            Lorem ipsum dolor sit<br />amet consectetur
          </h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn-hover" style={{ padding: '8px 16px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '12px', color: '#333', background: 'white', cursor: 'pointer' }}>
              Lorem ipsum
            </button>
            <button className="btn-hover" style={{ padding: '8px 16px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '12px', color: '#333', background: 'white', cursor: 'pointer' }}>
              Dolor sit amet
            </button>
          </div>
        </div>
        <div style={{ fontSize: '13px', color: '#555', lineHeight: 1.7, fontWeight: 300, paddingTop: '8px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
          Lorem ipsum dolor sit amet consectetur adipiscing.
        </div>
        <div style={{ fontSize: '13px', color: '#777', fontWeight: 300, marginBottom: '32px' }}>
          Ut enim ad minim veniam quis nostrud exercitation ullamco.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
          {['Lorem Inc', 'Ipsum Co', 'Dolor Ltd', 'Amet Corp', 'Consectetur', 'Adipiscing', 'Elit Studio', 'Sed Do', 'Eiusmod', 'Tempor Inc', 'Labore Co', '+ Your company'].map((logo, i) => (
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

        {projects.map((project, i) => (
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

            {/* ── PROJECT IMAGE WITH HOVER LIFT ── */}
            <div
              className="project-image"
              style={{ background: project.bg, borderRadius: '10px', aspectRatio: '16/10', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', fontSize: '11px', color: '#bbb', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer' }}
            >
              Project Image
              <div style={{ display: 'flex', gap: '8px', position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'white', border: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '10px', color: '#555' }}>‹</div>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'white', border: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '10px', color: '#555' }}>›</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── TESTIMONIALS WITH HOVER LIFT ── */}
      <div style={{ padding: '48px 48px', background: '#fafafa', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.3px', marginBottom: '4px' }}>Lorem ipsum dolor sit</div>
        <div style={{ fontSize: '13px', color: '#888', fontWeight: 300, marginBottom: '32px' }}>Ut enim ad minim veniam quis nostrud exercitation ullamco</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="tcard"
              style={{ background: '#fff', border: '1px solid #efefef', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', cursor: 'default' }}
            >
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

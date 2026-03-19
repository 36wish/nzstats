<div
  style={{
    display: 'flex',
    width: '1200px',
    height: '630px',
    fontFamily: '"Raleway", "Inter", sans-serif',
  }}
>

  {/* ── Left: stylised map ── */}
  <div
    style={{
      display: 'flex',
      width: '560px',
      height: '630px',
      position: 'relative',
      flexShrink: '0',
      background: '#e8f0e4',
      overflow: 'hidden',
    }}
  >
    <svg
      width="560"
      height="630"
      viewBox="0 0 560 630"
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      {/* ── Map tile grid ── */}
      <g stroke="#c8d8c0" strokeWidth="1" opacity="0.9">
        <line x1="0"   y1="90"  x2="560" y2="90"  />
        <line x1="0"   y1="180" x2="560" y2="180" />
        <line x1="0"   y1="270" x2="560" y2="270" />
        <line x1="0"   y1="360" x2="560" y2="360" />
        <line x1="0"   y1="450" x2="560" y2="450" />
        <line x1="0"   y1="540" x2="560" y2="540" />
        <line x1="80"  y1="0"   x2="80"  y2="630" />
        <line x1="160" y1="0"   x2="160" y2="630" />
        <line x1="240" y1="0"   x2="240" y2="630" />
        <line x1="320" y1="0"   x2="320" y2="630" />
        <line x1="400" y1="0"   x2="400" y2="630" />
        <line x1="480" y1="0"   x2="480" y2="630" />
      </g>

      {/* ── Road network (abstract) ── */}
      <g stroke="#c5d4b8" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.9">
        <path d="M0,310 Q140,290 280,315 Q420,340 560,300" />
        <path d="M0,420 Q180,400 280,415 Q380,430 560,410" />
        <path d="M200,0 Q220,160 240,315 Q255,450 260,630" />
        <path d="M340,0 Q350,120 360,270 Q370,420 380,630" />
      </g>
      <g stroke="#b8ccae" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7">
        <path d="M80,180 Q160,200 240,190 Q320,180 400,200" />
        <path d="M80,500 Q200,480 320,495 Q440,510 560,490" />
        <path d="M120,0 Q130,200 140,400 Q145,510 150,630" />
        <path d="M440,0 Q450,150 460,315 Q465,460 470,630" />
      </g>

      {/* ── SA3 outer boundary (large, blue) ── */}
      <polygon
        points="90,120 430,100 490,200 470,480 380,560 120,540 60,430 70,220"
        fill="rgba(18,33,199,0.12)"
        stroke="#1221C7"
        strokeWidth="2.5"
        strokeDasharray="10,5"
      />

      {/* ── SA2 highlighted area (amber) ── */}
      <polygon
        points="175,210 310,195 370,260 355,370 280,410 165,390 130,310 145,240"
        fill="rgba(255,183,3,0.18)"
        stroke="#ffb703"
        strokeWidth="3"
      />

      {/* ── Glow behind pin ── */}
      <circle cx="255" cy="300" r="38" fill="rgba(251,133,0,0.18)" />
      <circle cx="255" cy="300" r="22" fill="rgba(251,133,0,0.28)" />

      {/* ── Location pin (Princeton Orange) ── */}
      <circle cx="255" cy="300" r="9" fill="#fb8500" stroke="#fff" strokeWidth="2.5" />

      {/* ── SA3 label ── */}
      <rect x="92" y="100" width="76" height="24" rx="4" fill="#1221C7" />
      <text x="130" y="117" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">SA3</text>

      {/* ── SA2 label ── */}
      <rect x="132" y="370" width="76" height="24" rx="4" fill="#ffb703" />
      <text x="170" y="387" textAnchor="middle" fill="#0b2200" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">SA2</text>
    </svg>

  </div>

  {/* ── Right: stats panel ── */}
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
      background: '#ffffff',
      padding: '44px 44px',
      justifyContent: 'center',
      gap: '0px',
    }}
  >
    {/* App title */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '26px',
      }}
    >
      <div
        style={{
          width: '6px',
          height: '42px',
          background: '#1fda2b',
          borderRadius: '3px',
          flexShrink: '0',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
        <span style={{ fontSize: '34px', fontWeight: '800', color: '#111', letterSpacing: '-0.5px' }}>NZ Census Explorer</span>
        <span style={{ fontSize: '16px', color: '#888', fontWeight: '500' }}>Stats NZ · Tatauranga Aotearoa · 2023</span>
      </div>
    </div>

    {/* Area header */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '20px',
        paddingBottom: '18px',
        borderBottom: '1px solid #e8ecf0',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          flex: '1',
        }}
      >
        <span style={{ fontSize: '32px', fontWeight: '800', color: '#111', letterSpacing: '-0.5px' }}>Ponsonby</span>
        <span style={{ fontSize: '17px', color: '#666' }}>Auckland City, Auckland</span>
      </div>
      <div
        style={{
          display: 'flex',
          background: '#ffb703',
          borderRadius: '8px',
          padding: '8px 18px',
          fontSize: '16px',
          fontWeight: '700',
          color: '#0b2200',
        }}
      >
        SA2
      </div>
    </div>

    {/* Stat rows */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '22px' }}>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '16px', color: '#666', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Population</span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
          <span style={{ fontSize: '30px', fontWeight: '800', color: '#111' }}>7,350</span>
          <span style={{ fontSize: '15px', color: '#1fda2b', fontWeight: '700', background: 'rgba(31,218,43,0.12)', padding: '3px 10px', borderRadius: '10px' }}>+12.4%</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '16px', color: '#666', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Median Income</span>
        <span style={{ fontSize: '30px', fontWeight: '800', color: '#111' }}>$142,800</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '16px', color: '#666', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Home Ownership</span>
        <span style={{ fontSize: '30px', fontWeight: '800', color: '#111' }}>48.2%</span>
      </div>

    </div>

    {/* Ethnicity mini bars */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

      <span style={{ fontSize: '13px', fontWeight: '700', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Ethnicity</span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '15px', color: '#555', width: '100px' }}>European</span>
        <div style={{ display: 'flex', flex: '1', background: '#eef0f3', borderRadius: '4px', height: '10px' }}>
          <div style={{ display: 'flex', width: '74%', background: '#2060e1', borderRadius: '4px', height: '10px' }} />
        </div>
        <span style={{ fontSize: '15px', fontWeight: '700', color: '#333', width: '40px' }}>74%</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '15px', color: '#555', width: '100px' }}>Asian</span>
        <div style={{ display: 'flex', flex: '1', background: '#eef0f3', borderRadius: '4px', height: '10px' }}>
          <div style={{ display: 'flex', width: '19%', background: '#2060e1', borderRadius: '4px', height: '10px' }} />
        </div>
        <span style={{ fontSize: '15px', fontWeight: '700', color: '#333', width: '40px' }}>19%</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '15px', color: '#555', width: '100px' }}>Māori</span>
        <div style={{ display: 'flex', flex: '1', background: '#eef0f3', borderRadius: '4px', height: '10px' }}>
          <div style={{ display: 'flex', width: '10%', background: '#2060e1', borderRadius: '4px', height: '10px' }} />
        </div>
        <span style={{ fontSize: '15px', fontWeight: '700', color: '#333', width: '40px' }}>10%</span>
      </div>

    </div>

  </div>

</div>

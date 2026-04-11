<div
  style={{
    display: 'flex',
    width: '1200px',
    height: '630px',
    fontFamily: '"Raleway", "Inter", sans-serif',
    background: '#f0f4f8',
  }}
>
  {/* ── Left panel ── */}
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '420px',
      background: '#1fda2b',
      padding: '56px 44px',
    }}
  >
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0b2200"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginBottom: '20px', opacity: 0.85 }}
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: '40px',
        fontWeight: '700',
        color: '#0b2200',
        lineHeight: '1.15',
        letterSpacing: '-0.5px',
        marginBottom: '12px',
      }}
    >
      <span>NZ Census</span>
      <span>Explorer</span>
    </div>

    <div
      style={{
        width: '48px',
        height: '3px',
        background: '#0b2200',
        opacity: 0.3,
        marginBottom: '16px',
      }}
    />

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: '15px',
        fontWeight: '600',
        color: '#0b2200',
        opacity: 0.7,
        gap: '4px',
      }}
    >
      <span>2023 Census</span>
      <span>Stats NZ · Tatauranga Aotearoa</span>
    </div>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '36px',
        background: 'rgba(11,34,0,0.12)',
        borderRadius: '20px',
        padding: '6px 14px',
      }}
    >
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#fb8500',
          flexShrink: '0',
        }}
      />
      <div style={{ fontSize: '13px', fontWeight: '700', color: '#0b2200' }}>
        Click anywhere on the map
      </div>
    </div>
  </div>

  {/* ── Right panel ── */}
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flex: '1',
      padding: '48px 52px',
      gap: '20px',
    }}
  >
    <div
      style={{
        fontSize: '12px',
        fontWeight: '700',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#555',
        marginBottom: '4px',
      }}
    >
      Nationwide snapshot · 2023
    </div>

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#ffffff',
          border: '1px solid #dde3ea',
          borderRadius: '12px',
          padding: '22px 24px',
          width: 'calc(50% - 8px)',
          gap: '6px',
          borderTop: '4px solid #1221C7',
        }}
      >
        <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#555' }}>Population</div>
        <div style={{ fontSize: '32px', fontWeight: '800', color: '#1a1a1a', lineHeight: '1.1', letterSpacing: '-0.5px' }}>5,123,400</div>
        <div style={{ fontSize: '12px', color: '#555', fontWeight: '500' }}>2023 usual residents</div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#ffffff',
          border: '1px solid #dde3ea',
          borderRadius: '12px',
          padding: '22px 24px',
          width: 'calc(50% - 8px)',
          gap: '6px',
          borderTop: '4px solid #2060e1',
        }}
      >
        <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#555' }}>Median Age</div>
        <div style={{ fontSize: '32px', fontWeight: '800', color: '#1a1a1a', lineHeight: '1.1', letterSpacing: '-0.5px' }}>37.4 yrs</div>
        <div style={{ fontSize: '12px', color: '#555', fontWeight: '500' }}>across all areas</div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#ffffff',
          border: '1px solid #dde3ea',
          borderRadius: '12px',
          padding: '22px 24px',
          width: 'calc(50% - 8px)',
          gap: '6px',
          borderTop: '4px solid #ffb703',
        }}
      >
        <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#555' }}>Home Ownership</div>
        <div style={{ fontSize: '32px', fontWeight: '800', color: '#1a1a1a', lineHeight: '1.1', letterSpacing: '-0.5px' }}>65.1%</div>
        <div style={{ fontSize: '12px', color: '#555', fontWeight: '500' }}>owned or held in trust</div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#ffffff',
          border: '1px solid #dde3ea',
          borderRadius: '12px',
          padding: '22px 24px',
          width: 'calc(50% - 8px)',
          gap: '6px',
          borderTop: '4px solid #1fda2b',
        }}
      >
        <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#555' }}>Median Income</div>
        <div style={{ fontSize: '32px', fontWeight: '800', color: '#1a1a1a', lineHeight: '1.1', letterSpacing: '-0.5px' }}>$106,500</div>
        <div style={{ fontSize: '12px', color: '#555', fontWeight: '500' }}>household income per year</div>
      </div>

    </div>

    <div style={{ fontSize: '14px', color: '#555', fontWeight: '500', marginTop: '4px' }}>
      Search any NZ address to explore population, ethnicity, housing &amp; more.
    </div>
  </div>
</div>

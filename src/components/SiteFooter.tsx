const styles = {
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
    padding: '26px 20px 36px',
    background: '#040d16',
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.78rem',
  } as const,
  brand: {
    color: '#f6f9ff',
    fontSize: '2.2rem',
    fontWeight: 800,
    letterSpacing: '-0.08em',
  } as const,
} as const

function SiteFooter() {
  return (
    <footer style={styles.footer}>
      <div style={styles.brand}>PickPle</div>
      <div>© 2026 PickPle. All rights reserved.</div>
    </footer>
  )
}

export default SiteFooter

import mainLogo from '../assets/main-logo.svg'
import alarmIcon from '../assets/alarm.svg'
import backgroundImage from '../assets/bg.svg'

const styles = {
  header: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '34.5px 80px 34.5px',
    overflow: 'hidden',
  } as const,
  backgroundLayer: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
  } as const,
  brand: {
    position: 'relative',
    zIndex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: 0,
    lineHeight: 1,
  } as const,
  logo: {
    width: 'clamp(90px, 11vw, 120px)',
    height: 'auto',
    display: 'block',
  } as const,
  actions: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  } as const,
  alarmButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '8px 12px',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, #B7E635 0%, #92FEAF 100%)',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(17, 24, 39, 0.08)',
    color: '#111827',
    whiteSpace: 'nowrap',
    fontFamily: 'Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
  } as const,
  alarmIcon: {
    width: '18px',
    height: '18px',
    display: 'block',
  } as const,
  alarmText: {
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '-2%',
    fontWeight: 600,
  } as const,
} as const

function SiteHeader() {
  return (
    <header style={styles.header}>
      <img src={backgroundImage} alt="" aria-hidden="true" style={styles.backgroundLayer} />
      <div style={styles.brand} aria-label="PickPle 홈">
        <img src={mainLogo} alt="PickPle 로고" style={styles.logo} />
      </div>

      <div style={styles.actions} aria-label="알림 및 현재 시간">
        <button type="button" style={styles.alarmButton} aria-label="알림 버튼">
          <img src={alarmIcon} alt="알림" style={styles.alarmIcon} />
          <span style={styles.alarmText}>출시 알림</span>
        </button>
      </div>
    </header>
  )
}

export default SiteHeader

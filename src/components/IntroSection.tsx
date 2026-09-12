import mainmock from '../assets/main-mockup.svg'
import arrow from '../assets/arrow.svg'
import backgroundImage from '../assets/bg.svg'

const styles = {
  section: {
    position: 'relative',
    overflow: 'hidden',
    color: '#f3f5f8',
    padding: '0px 80px 54px',
  } as const,
  backgroundLayer: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
  } as const,
  heroInner: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '24px',
    minHeight: '600px',
    maxWidth: '100%',
    flexWrap: 'wrap',
  } as const,
  heroCopy: {
    flex: '1 1 320px',
    minWidth: 0,
  } as const,
  eyebrowRow: {
    marginBottom: '18px',
  } as const,
  eyebrowPill: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '999px',
    background: 'transparent',
    border: '2.13px solid rgba(212, 255, 94, 0.4)',
    color: '#ffffff',
    fontFamily: 'Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
    padding: '8px 20px',
    fontSize: '18px',
    fontWeight: 600,
     lineHeight: '135%',
    letterSpacing: '-2%'
  } as const,
  title: {
    margin: 0,
    color: '#ffffff',
    fontFamily: 'Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
    fontSize: '64px',
    fontWeight: 700,
    lineHeight: '140%',
    letterSpacing: '-2%'
  } as const,
  heroSubcopy: {
    marginTop: '18px',
    color: 'rgba(233,236,240,0.8)',
    fontSize: '1.06rem',
    lineHeight: 1.7,
  } as const,
  visualWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 1 320px',
    minHeight: '674px',
    width: '617px',
    maxWidth: '617px',
  } as const,
  visual: {
    width: '617px',
    height: '674px',
    display: 'block',
    objectFit: 'contain',
    filter: 'drop-shadow(0 26px 60px rgba(17, 24, 39, 0.45))',
  } as const,
} as const

function IntroSection() {
  return (
    <section style={styles.section} id="top">
      <img src={backgroundImage} alt="" aria-hidden="true" style={styles.backgroundLayer} />
      <div style={styles.heroInner}>
        <div style={styles.heroCopy}>
          <div style={styles.eyebrowRow}>
            <span style={styles.eyebrowPill}>사전예약 오픈</span>
          </div>
          <h1 style={styles.title}>
            고민 많은 당신을 위한
            <br />
            더 가벼운 결정
          </h1>
        </div>

        <div style={styles.visualWrap} aria-label="PickPle 모바일 화면 예시">
          <img src={mainmock} alt="PickPle 앱 미리보기" style={styles.visual} />
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginTop: '40px' }}>
        <img src={arrow} alt="아래로 스크롤" style={{ display: 'inline-block', width: '24px', height: '24px' }} />
      </div>
    </section>
  )
}

export default IntroSection

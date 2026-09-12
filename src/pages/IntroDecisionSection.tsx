import ment1 from '../assets/ment-1.svg'
import ment2 from '../assets/ment-2.svg'
import ment3 from '../assets/ment-3.svg'
import ment4 from '../assets/ment-4.svg'
import ment5 from '../assets/ment-5.svg'
import dot from '../assets/dot.svg'
import ch1 from '../assets/ch-1.svg'
import star from '../assets/star.svg'
import ch2 from '../assets/ch-2.svg'

const styles = {
  section: {
    position: 'relative',
    zIndex: 1,
    padding: '80px clamp(20px, 5vw, 240px) 0',
    textAlign: 'center',
    background: '#f3f3f1',
  } as const,
  heading: {
    margin: '0 0 30px',
    color: '#0b1118',
    fontFamily: 'Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
    fontSize: '48px',
    lineHeight: 1.4,
    letterSpacing: '-0.02em',
    fontWeight: 700,
  } as const,
  decisionList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    maxWidth: '680px',
    margin: '0 auto',
  } as const,
  decisionImage: {
    width: '100%',
    maxWidth: '680px',
    height: 'auto',
    display: 'block',
  } as const,
  dotImage: {
    width: '11px',
    height: '54px',
    display: 'block',
    transform: 'translateY(20%)',
  } as const,
  chImage: {
    position: 'relative',
    width: '150px',
    height: '164px',
    display: 'block',
    zIndex: 1,
    transform: 'translateY(20%)',
  } as const,
  mascotStage: {
    position: 'relative',
    width: '100%',
    height: '170px',
    marginTop: '14px',
    background: 'linear-gradient(180deg, #f3f3f1 0%, #f3f3f1 70%, #a9f2a9 70%, #a9f2a9 100%)',
    overflow: 'hidden',
  } as const,
  mascotCurve: {
    position: 'absolute',
    left: '50%',
    bottom: '22px',
    width: '220px',
    height: '108px',
    transform: 'translateX(-50%)',
    borderRadius: '220px 220px 0 0',
    background: '#f7f7f5',
    boxShadow: '0 -10px 0 0 rgba(255,255,255,0.2)',
  } as const,
  mascot: {
    position: 'absolute',
    left: '50%',
    bottom: '10px',
    transform: 'translateX(-50%)',
    width: '104px',
    height: '104px',
    borderRadius: '50%',
    background: '#1a1d1f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 24px 30px rgba(12, 18, 23, 0.12)',
  } as const,
  mascotFace: {
    width: '62px',
    height: '40px',
    position: 'relative',
  } as const,
  eye: {
    position: 'absolute',
    top: '10px',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#fff',
  } as const,
  leftEye: { left: '12px' },
  rightEye: { right: '12px' },
  mouth: {
    position: 'absolute',
    left: '50%',
    bottom: '6px',
    width: '24px',
    height: '12px',
    transform: 'translateX(-50%)',
    borderBottom: '3px solid #fff',
    borderRadius: '0 0 18px 18px',
  } as const,
  bandSection: {
    position: 'relative',
    zIndex: 2,
    padding: 0,
  } as const,
  bandContent: {
    position: 'relative',
    width: '100%',
    background: 'linear-gradient(90deg, #A7DD14 0%, #62D246 100%)',
    borderRadius: 0,
    padding: '28px clamp(20px, 5vw, 240px)',
    boxShadow: 'inset 0 0 0 1px rgba(14,24,18,0.06)',
    minHeight: '250px',
    overflow: 'hidden',
  } as const,
  bandInner: {
    position: 'relative',
    width: '100%',
    maxWidth: '1100px',
    minHeight: '194px',
    margin: '0 auto',
  } as const,
  bandStar: {
    position: 'absolute',
    left: '-54px',
    top: '4px',
    width: 'clamp(28px, 4vw, 42px)',
    height: 'auto',
    flexShrink: 0,
    transform: 'translateY(-32px)',
  } as const,
  bandCharacter: {
    position: 'absolute',
    right: 0,
    top: '50%',
    width: 'clamp(82px, 12vw, 140px)',
    height: 'auto',
    flexShrink: 0,
    transform: 'translateY(calc(-50% + 70px))',
  } as const,
  bandTextWrap: {
    display: 'grid',
    gap: '6px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 1,
    maxWidth: '760px',
    width: 'min(760px, calc(100% - 120px))',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
  } as const,
  bandTitle: {
    color: '#08141a',
    fontFamily: 'Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
    fontSize: '44px',
    lineHeight: 1.4,
    letterSpacing: '-0.02em',
    fontWeight: 700,
  } as const,
  bandSub: {
    color: 'rgba(8,20,26,0.7)',
    fontFamily: 'Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
    fontSize: '24px',
    lineHeight: 1.46,
    letterSpacing: '-0.01em',
    fontWeight: 500,
  } as const,
} as const

function IntroDecisionSection() {
  return (
    <>
      <section style={styles.section}>
        <h2 style={styles.heading}>이런 생각, 한 번쯤 해보신 적 있으신가요?</h2>
        <div style={styles.decisionList}>
          <img src={ment1} alt="" style={styles.decisionImage} />
          <img src={ment2} alt="" style={styles.decisionImage} />
          <img src={ment3} alt="" style={styles.decisionImage} />
          <img src={ment4} alt="" style={styles.decisionImage} />
          <img src={ment5} alt="" style={styles.decisionImage} />
          <img src={dot} alt="" style={styles.dotImage} />
          <img src={ch1} alt="" style={styles.chImage} />


        </div>
      </section>

      <section style={styles.bandSection} aria-label="PickPle 안내">
        <div style={styles.bandContent}>
          <div style={styles.bandInner}>
            <div style={styles.bandTextWrap}>
              <img src={star} alt="" style={styles.bandStar} />
              <strong style={styles.bandTitle}>자꾸 망설여지는 결정, 이제 혼자 하지 마세요</strong>
              <span style={styles.bandSub}>PickPle은 당신의 고민에 가장 솔직한 답을 드립니다</span>
            </div>
            <img src={ch2} alt="" style={styles.bandCharacter} />
          </div>
        </div>
      </section>
    </>
  )
}

export default IntroDecisionSection

import voteMockup from '../assets/vote-mockup.svg'
import communityMockup from '../assets/community-mockup.svg'
import badgeMockup from '../assets/badge-mockup.svg'
import illustration1 from '../assets/illustration-1.svg'
import illustration2 from '../assets/illustration-2.svg'
import illustration3 from '../assets/illustration-3.svg'

const styles = {
  rows: {
    padding: '227px clamp(20px, 5vw, 240px) 80px',
    background: '#fff',
  } as const,
  featureRow: {
    display: 'grid',
    gridTemplateColumns: '680px minmax(0, 1fr)',
    alignItems: 'center',
    gap: '100px',
    marginBottom: '360px',
  } as const,
  voteRow: {
    display: 'grid',
    gridTemplateColumns: '680px minmax(0, 520px)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '100px',
    marginBottom: '360px',
  } as const,
  badgeRow: {
    display: 'grid',
    gridTemplateColumns: '680px minmax(0, 520px)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '100px',
    marginBottom: '0',
  } as const,
  featureRowRev: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 645px) minmax(0, 314px)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'clamp(24px, 10vw, 221px)',
    width: '100vw',
    marginLeft: 'calc(50% - 50vw)',
    marginBottom: '72px',
    padding: ' 177px 80px',
    boxSizing: 'border-box',
    background: '#F3F5F9',
  } as const,
  visualBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '314px',
    maxWidth: '100%',
  } as const,
  voteVisualBox: {
    width: '680px',
  } as const,
  featureCopy: {
    color: '#111827',
  } as const,
  featureBadge: {
    display: 'inline-block',
    margin: '0 0 12px',
    borderRadius: '999px',
    padding: '8px 22px',
    color: '#565656',
    background: '#F1F1F5',
    fontFamily: 'Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
    fontSize: '24px',
    lineHeight: '150%',
    letterSpacing: '-0.02em',
    fontWeight: 600,
  } as const,
  featureTitle: {
    margin: '0 0 18px',
    color: '#292929',
    fontFamily: 'Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
    fontSize: '44px',
    lineHeight: '135%',
    letterSpacing: '-0.02em',
    fontWeight: 700,
  } as const,
  featureText: {
    margin: 0,
    color: '#6D6D6D',
    fontFamily: 'Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
    fontSize: '24px',
    lineHeight: '145%',
    letterSpacing: '-0.02em',
    fontWeight: 500,
  } as const,
  illustrations: {
    display: 'flex',
    width: '100%',
    alignItems: 'start',
    gap: 'clamp(16px, 4vw, 72px)',
    marginTop: '96px',
    maxWidth: '100%',
    overflow: 'hidden',
  } as const,
  illustrationItem: {
    display: 'grid',
    justifyItems: 'center',
    gap: '8px',
    width: 'clamp(96px, 12vw, 164px)',
    flexShrink: 0,
  } as const,
  illustrationLabel: {
    color: '#121212',
    fontFamily: 'Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
    fontSize: '24px',
    lineHeight: '140%',
    letterSpacing: '-0.02em',
    fontWeight: 600,
    whiteSpace: 'nowrap',
  } as const,
  illustrationDescription: {
    width: '100%',
    color: '#6D6D6D',
    fontFamily: 'Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '-0.02em',
    fontWeight: 500,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  } as const,
  illustrationImage: {
    width: '72px',
    height: '72px',
    display: 'block',
  } as const,
  mockup: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  } as const,
  voteMockup: { width: '680px', maxWidth: 'none' } as const,
  community: { width: 'min(560px, 100%)' } as const,
  level: { width: 'min(160px, 35%)', marginLeft: '-18px' } as const,
  visualApps: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px' } as const,
} as const

function StorySection() {
  return (
    <section style={styles.rows}>
      <div style={styles.voteRow}>
        <div style={{ ...styles.visualBox, ...styles.voteVisualBox }}>
          <img src={voteMockup} alt="투표 화면 미리보기" style={{ ...styles.mockup, ...styles.voteMockup }} />
        </div>

        <div style={styles.featureCopy}>
          <p style={styles.featureBadge}>빠른 투표</p>
          <h3 style={styles.featureTitle}>
            살까 말까 혼자 고민하던
           <br />
            그 상품, 이제 다 같이 정해요 
          </h3>
          <p style={styles.featureText}>
            상품 하나를 올리고 다른 사람들의
            <br />
            솔직한 투표를 받아보세요. 
          </p>
        </div>
      </div>

      <div style={styles.featureRowRev}>
        <div style={styles.featureCopy}>
          <p style={styles.featureBadge}>커뮤니티</p>
          <h3 style={styles.featureTitle}>
            고민 글을 올려보고
            <br />
            마음이 가는 쪽에 한 표 던져보세요!
          </h3>
          <p style={styles.featureText}>
            다른 사람들의 댓글을 확인하고, 도움이 된 댓글엔 원픽을 눌러주세요.
          </p>
          <div style={styles.illustrations} aria-label="커뮤니티 기능 안내">
            <div style={styles.illustrationItem}>
              <img src={illustration1} alt="찬반 투표" style={styles.illustrationImage} />
              <span style={styles.illustrationLabel}>찬반투표</span>
              <span style={styles.illustrationDescription}>살까 말까를 결정하는 투표</span>
            </div>
            <div style={styles.illustrationItem}>
              <img src={illustration2} alt="AB 투표" style={styles.illustrationImage} />
              <span style={styles.illustrationLabel}>AB 투표</span>
              <span style={styles.illustrationDescription}>두 선택지를 비교하는 투표</span>
            </div>
            <div style={styles.illustrationItem}>
              <img src={illustration3} alt="일반 게시글" style={styles.illustrationImage} />
              <span style={styles.illustrationLabel}>일반 게시글</span>
              <span style={styles.illustrationDescription}>투표 없이 자유롭게 쓰는 글</span>
            </div>
          </div>
        </div>

        <div style={styles.visualBox}>
          <img src={communityMockup} alt="커뮤니티 화면 미리보기" style={{ ...styles.mockup, ...styles.community }} />
        </div>
      </div>

      <div style={styles.badgeRow}>
        <div style={{ ...styles.visualBox, ...styles.voteVisualBox }}>
          <img src={badgeMockup} alt="투표 화면 미리보기" style={{ ...styles.mockup, ...styles.voteMockup }} />
        </div>

        <div style={styles.featureCopy}>
          <p style={styles.featureBadge}>뱃지 · 등급</p>
          <h3 style={styles.featureTitle}>
            픽 할수록 쌓이는 건
           <br />
            나만의 기록
          </h3>
          <p style={styles.featureText}>
            활동할 때마다 포인트가 쌓이고
            <br />
            나만의 등급과 뱃지로 그 흔적이 남아요. 
          </p>
        </div>
      </div>
    </section>
  )
}

export default StorySection

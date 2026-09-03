function VisualSection() {
  return (
    <section className="visual-section" aria-label="Pickpick 서비스 미리보기">
      <div className="visual-card visual-card-main">
        <span className="visual-label">MY PICK</span>
        <div className="visual-lines"><span /><span /><span /></div>
      </div>
      <div className="visual-card visual-card-side">
        <span>01</span>
        <strong>좋아하는<br />장소를 발견해요</strong>
      </div>
      <div className="scroll-cue" aria-hidden="true">⌄</div>
    </section>
  )
}

export default VisualSection

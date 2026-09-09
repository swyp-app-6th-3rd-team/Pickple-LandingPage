function VisualSection() {
  return (
    <section aria-label="Pickple 서비스 기능">
      <div className="lime-heading">픽플이 결정을 도와드려요!</div>
      <div className="features">
        <article className="feature-item"><span className="feature-index">01 PICK</span><h3>살까 말까<br />고민된다면</h3><p>그 순간, 이제 더 이상<br />혼자 고민하지 마세요</p><div className="feature-visual"><div className="mini-screen"><div /><div /><div /><div /></div></div></article>
        <article className="feature-item"><span className="feature-index">02 VOTE</span><h3>결정이<br />어렵다면</h3><p>친구들의 생각을 모아<br />가장 좋은 선택을 해요</p><div className="feature-visual"><div className="mini-screen"><div /><div /><div /><div /></div></div></article>
        <article className="feature-item"><span className="feature-index">03 LIVE</span><h3>지금, 다른 사람은<br />뭘 고민할까?</h3><p>새로운 고민을 구경하고<br />나의 의견도 남겨보세요</p><div className="feature-visual"><div className="mini-phone" /></div></article>
        <article className="feature-item"><span className="feature-index">04 MY PICK</span><h3>Pick한 순간을<br />나만의 기록으로</h3><p>결정의 순간이 쌓이면<br />나만의 취향이 됩니다</p><div className="feature-visual"><div className="mini-stack"><div className="mini-phone" /><div className="mini-phone" /></div></div></article>
      </div>
    </section>
  )
}

export default VisualSection

function StorySection() {
  return (
    <section className="worry-section">
      <div className="chat">
        <img src="/ment1.svg" alt="이거 진짜 살까 말까?" />
        <img src="/ment2.svg" alt="후기만 10개 넘게 찾아봤는데 더 헷갈리네" />
        <img src="/ment3.svg" alt="단톡방에서 물어보기도 애매한데" />
        <img src="/ment4.svg" alt="차라리 누가 나 대신 결정 내려줬으면" />
      </div>
      <div className="mascot">
        <img src="/character.svg" alt="" />
        <span className="dot-stack" aria-hidden="true">
          <img src="/dot.svg" alt="" />
          <img src="/dot.svg" alt="" />
          <img src="/dot.svg" alt="" />
        </span>
      </div>
    </section>
  )
}

export default StorySection

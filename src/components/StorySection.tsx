import { useEffect, useRef } from 'react'
import voteMockup from '../assets/vote-mockup.svg'
import communityMockup from '../assets/community-mockup.svg'
import badgeMockup from '../assets/badge-mockup.svg'
import illustration1 from '../assets/illustration-1.svg'
import illustration2 from '../assets/illustration-2.svg'
import illustration3 from '../assets/illustration-3.svg'

function StorySection() {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const targets = containerRef.current?.querySelectorAll('.scroll-reveal')
    if (!targets || targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @keyframes storyFadeUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scroll-reveal {
          opacity: 1;
        }

        .scroll-reveal .visual-box,
        .scroll-reveal .feature-copy {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .scroll-reveal.in-view .visual-box,
        .scroll-reveal.in-view .feature-copy {
          opacity: 1;
          transform: translateY(0);
        }

        .story-row-vote.in-view .feature-copy,
        .story-row-badge.in-view .feature-copy,
        .story-row-rev.in-view .visual-box {
          transition-delay: 0.2s;
        }

        .story-rows {
          padding: 227px clamp(20px, 5vw, 240px) 80px;
          background: #ffffff;
          box-sizing: border-box;
        }
        .story-row-vote,
        .story-row-badge {
          display: grid;
          grid-template-columns: 680px minmax(0, 520px);
          align-items: center;
          justify-content: center;
          gap: 100px;
          margin-bottom: 360px;
        }
        .story-row-badge {
          margin-bottom: 0;
        }
        .story-row-rev {
          display: grid;
          grid-template-columns: minmax(0, 645px) minmax(0, 314px);
          align-items: center;
          justify-content: center;
          gap: clamp(24px, 10vw, 221px);
          width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-bottom: 72px;
          padding: 177px 80px;
          background: #F3F5F9;
          box-sizing: border-box;
        }
        .visual-box {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .story-mockup {
          width: 100%;
          max-width: 680px;
          height: auto;
          display: block;
        }
        .story-mockup-mobile {
          width: 100%;
          max-width: 314px;
          height: auto;
          display: block;
        }
        .feature-copy {
          color: #111827;
          text-align: left;
        }
        .feature-badge {
          display: inline-block;
          margin-bottom: 12px;
          border-radius: 999px;
          padding: 8px 22px;
          color: #565656;
          background: #F1F1F5;
          font-family: Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
          font-size: 24px;
          font-weight: 600;
        }
        .feature-title {
          margin: 0 0 18px;
          color: #292929;
          font-family: Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
          font-size: 44px;
          line-height: 135%;
          font-weight: 700;
          letter-spacing: -0.02em;
          text-align: left;
        }
        .feature-text {
          margin: 0;
          color: #6D6D6D;
          font-family: Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
          font-size: 24px;
          line-height: 145%;
          font-weight: 500;
          letter-spacing: -0.02em;
          text-align: left;
        }
        .illustrations-wrap {
          display: flex;
          gap: clamp(16px, 4vw, 72px);
          margin-top: 96px;
        }
        .illustration-item {
          display: grid;
          justify-items: center;
          gap: 8px;
        }
        .illustration-img {
          width: 72px;
          height: 72px;
          display: block;
        }
        .illustration-label {
          font-size: 24px;
          font-weight: 600;
          color: #121212;
        }
        .illustration-desc {
          font-size: 16px;
          color: #6D6D6D;
        }

        .vote-break {
          display: inline;
        }
        .vote-text-break {
          display: inline;
        }
        .title-break-desktop {
          display: inline;
        }
        .title-break-mobile {
          display: none;
        }

        @media screen and (max-width: 1439px) and (min-width: 810px) {
          .vote-text-break {
            display: none;
          }

          .story-rows {
            padding: 160px 40px;
          }
          .story-row-vote,
          .story-row-badge {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 60px;
            margin-bottom: 240px;
          }
          .story-row-vote .feature-copy,
          .story-row-badge .feature-copy {
            order: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            width: 100%;
            max-width: 680px;
          }
          .story-row-vote .visual-box,
          .story-row-badge .visual-box {
            order: 2;
            width: 100%;
            max-width: 680px;
          }
          .story-mockup {
            max-width: 680px;
          }
          
          .story-row-rev {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 60px;
            padding: 160px 40px;
            margin-bottom: 240px;
          }
          .story-row-rev .feature-copy {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            width: 100%;
            max-width: 680px;
          }
          .story-row-rev .visual-box {
            width: 100%;
            max-width: 314px;
          }
          .story-mockup-mobile {
            max-width: 314px;
          }

          .feature-badge {
            font-size: 24px;
            padding: 8px 22px;
          }
          .feature-title {
            font-size: 44px;
            text-align: left;
          }
          .feature-text {
            font-size: 24px;
            text-align: left;
          }

          .illustrations-wrap {
            display: none !important;
          }
        }

        @media screen and (max-width: 809px) {
          .vote-break {
            display: inline;
          }
          .vote-text-break {
            display: inline;
          }
          .title-break-desktop {
            display: none;
          }
          .title-break-mobile {
            display: inline;
          }

          .story-rows {
            padding: 70px 20px 40px;
          }
          .story-row-vote,
          .story-row-badge {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 28px;
            margin-bottom: 90px;
          }
          .story-row-vote .feature-copy,
          .story-row-badge .feature-copy {
            order: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            width: 100%;
            max-width: 320px;
          }
          .story-row-vote .visual-box,
          .story-row-badge .visual-box {
            order: 2;
            width: 100%;
            max-width: 320px;
          }
          .story-row-rev {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 28px;
            padding: 60px 20px;
            margin-bottom: 90px;
          }
          .story-row-rev .feature-copy {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            width: 100%;
            max-width: 320px;
          }
          .story-row-rev .visual-box {
            width: 100%;
            max-width: 250px;
          }
          .feature-badge {
            font-size: 14px;
            padding: 6px 14px;
            align-self: flex-start;
          }
          .feature-title {
            font-size: 28px;
            margin-bottom: 12px;
            text-align: left;
          }
          .feature-text {
            font-size: 16px;
            text-align: left;
          }
          .illustrations-wrap {
            display: none !important;
          }
        }
      `}</style>

      <section className="story-rows" ref={containerRef}>
        <div className="story-row-vote scroll-reveal">
          <div className="visual-box">
            <img src={voteMockup} alt="투표 화면 미리보기" className="story-mockup" />
          </div>
          <div className="feature-copy">
            <span className="feature-badge">빠른 투표</span>
            <h3 className="feature-title">
              살까 말까 혼자 고민하던
              <br />
              그 상품, 이제 다 같이 정해요
            </h3>
            <p className="feature-text">
              상품 하나를 올리고 다른 사람들의
              <br className="vote-text-break" />
              {' '}솔직한 투표를 받아보세요.
            </p>
          </div>
        </div>

        <div className="story-row-rev scroll-reveal">
          <div className="feature-copy">
            <span className="feature-badge">커뮤니티</span>
            <h3 className="feature-title">
              고민 글을 올려보고
              <br className="title-break-desktop" />
              {' '}마음이
              <br className="title-break-mobile" />
              {' '}가는 쪽에 한 표 던져보세요!
            </h3>
            <p className="feature-text">
              다른 사람들의 댓글을 확인하고, 도움이 된 댓글엔 원픽을 눌러주세요.
            </p>
            <div className="illustrations-wrap" aria-label="커뮤니티 기능 안내">
              <div className="illustration-item">
                <img src={illustration1} alt="찬반 투표" className="illustration-img" />
                <span className="illustration-label">찬반투표</span>
                <span className="illustration-desc">살까 말까를 결정하는 투표</span>
              </div>
              <div className="illustration-item">
                <img src={illustration2} alt="AB 투표" className="illustration-img" />
                <span className="illustration-label">AB 투표</span>
                <span className="illustration-desc">두 선택지를 비교하는 투표</span>
              </div>
              <div className="illustration-item">
                <img src={illustration3} alt="일반 게시글" className="illustration-img" />
                <span className="illustration-label">일반 게시글</span>
                <span className="illustration-desc">투표 없이 자유롭게 쓰는 글</span>
              </div>
            </div>
          </div>
          <div className="visual-box">
            <img src={communityMockup} alt="커뮤니티 화면 미리보기" className="story-mockup-mobile" />
          </div>
        </div>

        <div className="story-row-badge scroll-reveal">
          <div className="visual-box">
            <img src={badgeMockup} alt="뱃지 화면 미리보기" className="story-mockup" />
          </div>
          <div className="feature-copy">
            <span className="feature-badge">뱃지 · 등급</span>
            <h3 className="feature-title">
              픽 할수록 쌓이는 건
              <br />
              나만의 기록
            </h3>
            <p className="feature-text">
              활동할 때마다 포인트가 쌓이고
              <br />
              나만의 등급과 뱃지로 그 흔적이 남아요.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default StorySection
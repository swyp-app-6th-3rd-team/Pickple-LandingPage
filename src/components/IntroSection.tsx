import mainmock from '../assets/main-mockup.svg'
import arrow from '../assets/arrow.svg'
import backgroundImage from '../assets/bg.svg'
import androidBtn from '../assets/android.svg'
import iosBtn from '../assets/ios.svg'

function IntroSection() {
  const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.swyp.pickple'
  const APP_STORE_URL = 'https://apps.apple.com/kr/app/pickple-buy-or-bye/id6810589501'

  return (
    <>
      <style>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceArrow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        .intro-section {
          position: relative;
          overflow: hidden;
          color: #f3f5f8;
          padding: 0 80px 54px;
          box-sizing: border-box;
        }
        .intro-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          min-height: 600px;
          max-width: 100%;
        }
        .hero-copy {
          flex: 1 1 320px;
          min-width: 0;
        }
        .eyebrow-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 2.13px solid rgba(212, 255, 94, 0.4);
          color: #ffffff;
          font-family: Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
          padding: 8px 20px;
          font-size: 18px;
          font-weight: 600;
          line-height: 135%;
          letter-spacing: -0.02em;
          margin-bottom: 18px;
        }
        .hero-title {
          margin: 0 0 32px 0;
          color: #ffffff;
          font-family: Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
          font-size: 64px;
          font-weight: 700;
          line-height: 140%;
          letter-spacing: -0.02em;
          opacity: 0;
          animation: heroFadeUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
        }
        
        /* 앱 다운로드 버튼 영역 */
        .download-btn-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          opacity: 0;
          animation: heroFadeUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
        }
        .download-btn {
          display: inline-block;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .download-btn:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
        .download-btn img {
          height: 52px;
          width: auto;
          display: block;
        }

        .hero-visual-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1 1 320px;
          width: 617px;
          max-width: 617px;
          opacity: 0;
          animation: heroFadeUp 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
        }
        .hero-visual {
          width: 617px;
          height: auto;
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 26px 60px rgba(17, 24, 39, 0.45));
        }
        .arrow-wrap {
          position: relative;
          z-index: 1;
          text-align: center;
          margin-top: 40px;
          opacity: 0;
          animation: heroFadeUp 1.2s ease-out 1.2s forwards;
        }
        .arrow-icon {
          display: inline-block;
          width: 24px;
          height: 24px;
          animation: bounceArrow 2.2s ease-in-out infinite 2s;
        }

        @media screen and (max-width: 1439px) and (min-width: 810px) {
          .intro-section {
            padding: 0 40px 60px;
          }
          .hero-inner {
            flex-direction: column;
            text-align: center;
            padding-top: 40px;
            gap: 32px;
          }
          .hero-copy {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-visual-wrap {
            width: 480px;
            max-width: 90%;
          }
        }

        @media screen and (max-width: 809px) {
          .intro-section {
            padding: 0 20px 40px;
          }
          .hero-inner {
            flex-direction: column;
            text-align: center;
            padding-top: 30px;
            justify-content: flex-start;
            min-height: auto;
            gap: 40px;
          }
          .hero-copy {
            flex: 0 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0px;
          }
          .eyebrow-pill {
            font-size: 16px;
            padding: 6px 12px;
          }
          .hero-title {
            font-size: 36px;
            margin-bottom: 24px;
          }
          .download-btn-wrap {
            justify-content: center;
          }
          .download-btn img {
            height: 44px;
          }
          .hero-visual-wrap {
            width: 100%;
            max-width: 284px;
          }
          .arrow-wrap {
            margin-top: 24px;
          }
          .arrow-icon {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>

      <section className="intro-section" id="top">
        <img src={backgroundImage} alt="" aria-hidden="true" className="intro-bg" />
        <div className="hero-inner">
          <div className="hero-copy">
            {/* <div>
              <span className="eyebrow-pill">사전예약 오픈</span>
            </div> */}
            <h1 className="hero-title">
              고민 많은 당신을 위한
              <br />
              더 가벼워진 결정
            </h1>
            
            {/* 앱 다운로드 링크 영역 */}
            <div className="download-btn-wrap">
             <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
                aria-label="Google Play Store에서 다운로드"
              >
                <img src={androidBtn} alt="Google Play 다운로드" />
              </a> 
             <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
              aria-label="App Store에서 다운로드"
              data-track="ios_download" // 추적용 속성
            >
              <img src={iosBtn} alt="App Store 다운로드" />
            </a>
            </div>
          </div>

          <div className="hero-visual-wrap" aria-label="PickPle 모바일 화면 예시">
            <img src={mainmock} alt="PickPle 앱 미리보기" className="hero-visual" />
          </div>
        </div>

        <div className="arrow-wrap">
          <img src={arrow} alt="아래로 스크롤" className="arrow-icon" />
        </div>
      </section>
    </>
  )
}

export default IntroSection
import mainLogo from '../assets/main-logo.svg'
import alarmIcon from '../assets/alarm.svg'
import backgroundImage from '../assets/bg.svg'

function SiteHeader() {
  const handleScrollToSignup = () => {
    const signupElement = document.getElementById('signup')
    if (signupElement) {
      const elementPosition = signupElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      setTimeout(() => {
        const emailInput = document.getElementById('email')
        if (emailInput) {
          emailInput.focus()
        }
      }, 500)
    }
  }

  return (
    <>
      <style>{`
        .site-header {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 34.5px 80px;
          box-sizing: border-box;
          /* 모바일 하단 서브픽셀 틈새 렌더링 방지 */
          margin-bottom: -1px;
        }
        .header-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          /* 1~2px 더 길게 내려서 하단 틈새를 완벽히 덮음 */
          height: calc(100% + 2px);
          object-fit: cover;
          z-index: 0;
          pointer-events: none;
          transform: translateZ(0); /* GPU 가속 및 렌더링 보정 */
        }
        .header-brand {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
        }
        .header-logo {
          width: clamp(90px, 11vw, 120px);
          height: auto;
          display: block;
        }
        .header-actions {
          position: relative;
          z-index: 1;
        }
        .alarm-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 8px 16px;
          border-radius: 8px;
          background: linear-gradient(135deg, #B7E635 0%, #92FEAF 100%);
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(17, 24, 39, 0.08);
          color: #111827;
          white-space: nowrap;
          font-family: Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
          font-size: 16px;
          font-weight: 600;
        }
        .alarm-icon {
          width: 18px;
          height: 18px;
          display: block;
        }

        /* 1439px ~ 810px */
        @media screen and (max-width: 1439px) and (min-width: 810px) {
          .site-header {
            padding: 24px 40px;
          }
        }

        /* 809px ~ 360px */
        @media screen and (max-width: 809px) {
          .site-header {
            padding: 16px 20px;
          }
          .header-logo {
            width: 84px;
          }
          .alarm-button {
            padding: 6px 12px;
            font-size: 13px;
            gap: 6px;
          }
          .alarm-icon {
            width: 15px;
            height: 15px;
          }
        }
      `}</style>

      <header className="site-header">
        <img src={backgroundImage} alt="" aria-hidden="true" className="header-bg" />
        <div className="header-brand" aria-label="PickPle 홈">
          <img src={mainLogo} alt="PickPle 로고" className="header-logo" />
        </div>
        <div className="header-actions">
          <button 
            type="button" 
            className="alarm-button" 
            aria-label="출시 알림 받기"
            onClick={handleScrollToSignup}
          >
            <img src={alarmIcon} alt="" className="alarm-icon" />
            <span>출시 알림</span>
          </button>
        </div>
      </header>
    </>
  )
}

export default SiteHeader
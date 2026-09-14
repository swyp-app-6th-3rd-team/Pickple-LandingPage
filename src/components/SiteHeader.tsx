import mainLogo from '../assets/main-logo.svg'
import alarmIcon from '../assets/alarm.svg'
import backgroundImage from '../assets/bg.svg'

function SiteHeader() {
  const handleScrollToSignup = () => {
    const signupElement = document.getElementById('signup')
    if (signupElement) {
      // 1. 전체 화면 기준 정확한 Y 좌표 계산 후 스크롤
      const elementPosition = signupElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      // 2. 이메일 입력창으로 바로 포커스 이동 (사용자 편의)
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
          overflow: hidden;
          box-sizing: border-box;
        }
        .header-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
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
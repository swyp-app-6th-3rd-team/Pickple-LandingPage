import applogo from '../assets/app-icon.svg'
import mainlogo from '../assets/main-logo.svg'

function SiteFooter() {
  return (
    <>
      <style>{`
        .site-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding: 40px 20px;
          background: #111111;
          font-family: Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
          text-align: center;
          box-sizing: border-box;
        }
        .footer-inform {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .footer-app-logo {
          width: 68px;
          height: 68px;
          border-radius: 16px;
          object-fit: cover;
          display: block;
        }
        .footer-rightside {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 8px;
        }
        .footer-main-logo {
          height: 28px;
          width: auto;
          display: block;
        }
        .footer-link {
          color: #C7C7C7;
          font-size: 13px;
          font-weight: 500;
          text-decoration: underline;
          text-underline-offset: 3px;
          letter-spacing: -0.02em;
          line-height: 140%;
        }
        .footer-copyright {
          color: #C7C7C7;
          font-size: 16px;
          font-weight: 400;
          letter-spacing: -0.02em;
          line-height: 150%;
        }

        /* 809px ~ 360px */
        @media screen and (max-width: 809px) {
          .site-footer {
            padding: 32px 20px;
            gap: 18px;
          }
          .footer-app-logo {
            width: 56px;
            height: 56px;
            border-radius: 12px;
          }
          .footer-main-logo {
            height: 24px;
          }
          .footer-copyright {
            font-size: 13px;
          }
        }
      `}</style>

      <footer className="site-footer">
        <div className="footer-inform">
          <img 
            src={applogo} 
            alt="PickPle 앱 아이콘" 
            className="footer-app-logo" 
          />
          <div className="footer-rightside">
            <img 
              src={mainlogo} 
              alt="PickPle 로고" 
              className="footer-main-logo" 
            />
            <a 
              href="https://instagram.com/official_pickple" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              @official_pickple
            </a>
          </div>
        </div>

        <div className="footer-copyright">
          © 2026 PickPle. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default SiteFooter
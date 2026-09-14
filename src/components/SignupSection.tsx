import { useState } from 'react'
import type { FormEvent } from 'react'
import checkboxEmpty from '../assets/checkbox-empty.svg'
import checkboxFill from '../assets/checkbox-fill.svg'

function SignupSection() {
  const [submitted, setSubmitted] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <style>{`
        .signup-section {
          display: grid;
          justify-items: center;
          background: #111111;
          color: #f3f6fb;
          padding: 76px 24px 62px;
          box-sizing: border-box;
        }
        .signup-heading {
          width: 100%;
          max-width: 520px;
          text-align: center;
        }
        .signup-title {
          margin: 0 0 18px;
          color: #f5f7ff;
          font-family: Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
          font-size: 46px;
          line-height: 135%;
          letter-spacing: -0.02em;
          font-weight: 700;
        }
        .signup-subtitle {
          margin: 0;
          color: rgba(233,239,246,0.72);
          font-family: Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
          font-size: 24px;
          line-height: 135%;
          letter-spacing: -0.02em;
          text-align: center;
          font-weight: 500;
        }
        .signup-form {
          display: grid;
          gap: 10px;
          width: 353px;
          max-width: 100%;
          margin-top: 34px;
          box-sizing: border-box;
        }
        .signup-label {
          color: #FFFFFF;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: -0.02em;
          font-weight: 600;
          text-align: left;
        }
        .signup-input {
          width: 100%;
          height: 56px;
          border: 1px solid #E7E8E9;
          border-radius: 6px;
          padding: 15px 20px;
          background: #fff;
          color: #111111;
          font-family: Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
          font-size: 16px;
          font-weight: 400;
          box-sizing: border-box;
        }
        .signup-consent {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 28px;
          color: #B1B1B1;
          font-size: 14px;
          font-weight: 500;
          line-height: 145%;
          letter-spacing: -0.02em;
          cursor: pointer;
          user-select: none;
        }
        .hidden-checkbox {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
          margin: 0;
          pointer-events: none;
        }
        .checkbox-icon {
          width: 20px;
          height: 20px;
          display: block;
          flex-shrink: 0;
        }
        .signup-submit-btn {
          width: 100%;
          height: 56px;
          border: 0;
          border-radius: 6px;
          padding: 14px 18px;
          background: #B7E635;
          color: #111827;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
        .signup-success {
          margin: 0;
          color: #aaf26d;
          font-size: 0.9rem;
          text-align: center;
        }

        /* 809px ~ 360px */
        @media screen and (max-width: 809px) {
          .signup-section {
            padding: 60px 20px 48px;
          }
          .signup-title {
            font-size: 28px;
            line-height: 1.35;
          }
          .signup-subtitle {
            font-size: 16px;
          }
          .signup-form {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>

      <section className="signup-section" id="signup">
        <div className="signup-heading">
          <h2 className="signup-title">
            더 이상 혼자 고민하지 말고
            <br />
            PickPle과 함께해요
          </h2>
          <p className="signup-subtitle">앱이 출시되면 가장 먼저 알려드릴게요</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="signup-label">이메일</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="officialpickple@gmail.com" 
            required 
            className="signup-input" 
          />
          
          <label className="signup-consent">
            <input 
              type="checkbox" 
              required 
              checked={isChecked} 
              onChange={(e) => setIsChecked(e.target.checked)} 
              className="hidden-checkbox" 
            />
            <img 
              src={isChecked ? checkboxFill : checkboxEmpty} 
              alt={isChecked ? '동의 완료' : '동의 미완료'} 
              className="checkbox-icon" 
            />
            <span>[필수] 개인정보 수집 및 이용 동의</span>
          </label>

          <button type="submit" className="signup-submit-btn">
            가장 먼저 알림 받기
          </button>

          {submitted && <p className="signup-success" role="status">신청이 완료되었습니다.</p>}
        </form>
      </section>
    </>
  )
}

export default SignupSection
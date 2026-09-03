import { useState } from 'react'
import type { FormEvent } from 'react'

function SignupSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="signup-section" id="signup">
      <div className="signup-heading">
        <p className="eyebrow">COMING SOON</p>
        <h2>Pickpick의 시작을<br />가장 먼저 만나보세요.</h2>
        <p>서비스가 공개되면 가장 먼저 소식을 전해드릴게요.</p>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="email">이메일 주소</label>
        <input id="email" name="email" type="email" placeholder="hello@example.com" required />
        <label className="consent">
          <input type="checkbox" required />
          <span>서비스 소식 수신에 동의합니다.</span>
        </label>
        <button type="submit">알림 신청하기 <span aria-hidden="true">→</span></button>
        {submitted && <p className="success-message" role="status">알림 신청이 완료되었습니다.</p>}
      </form>
    </section>
  )
}

export default SignupSection

import { useState } from 'react'
import type { FormEvent } from 'react'

function SignupSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <><section className="cta"><h2>자꾸 망설여지는 결정<br />이제 걱정 마세요</h2><p>PickPle로 당신의 고민에 가장 좋은 답을 찾아드립니다</p></section><section className="signup-section" id="signup">
      <div className="signup-heading">
        <h2>더 이상 혼자 고민하지 말고<br />PickPle과 함께해요</h2>
        <p>얼른 출시되면 가장 먼저 알려드릴게요</p>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input id="email" name="email" type="email" placeholder="officialpickple@gmail.com" required aria-label="이메일 주소" />
        <label className="consent">
          <input type="checkbox" required />
          <span>개인정보 수집 및 이용에 동의합니다. 수집된 이메일은 출시 알림 목적으로 사용됩니다.</span>
        </label>
        <button type="submit">가장 먼저 알림 받기</button>
        {submitted && <p className="success-message" role="status">알림 신청이 완료되었습니다.</p>}
      </form>
    </section></>
  )
}

export default SignupSection

import { useState } from 'react'
import type { FormEvent } from 'react'

const styles = {
  section: {
    display: 'grid',
    gridTemplateColumns: '1.15fr 0.85fr',
    gap: '36px',
    alignItems: 'center',
    background: '#040d16',
    color: '#f3f6fb',
    padding: '94px clamp(20px, 5vw, 240px) 74px',
  } as const,
  heading: {
    maxWidth: '520px',
  } as const,
  eyebrow: {
    margin: '0 0 16px',
    color: 'rgba(255,255,255,0.8)',
    fontSize: '0.75rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  } as const,
  title: {
    margin: '0 0 16px',
    color: '#f5f7ff',
    fontSize: 'clamp(2.4rem, 3vw, 4rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.07em',
    fontWeight: 800,
  } as const,
  subtitle: {
    margin: 0,
    color: 'rgba(233,239,246,0.72)',
    fontSize: '1rem',
    lineHeight: 1.7,
  } as const,
  form: {
    display: 'grid',
    gap: '16px',
    justifySelf: 'center',
    width: 'min(100%, 440px)',
  } as const,
  label: {
    color: 'rgba(255,255,255,0.66)',
    fontSize: '0.82rem',
    letterSpacing: '0.02em',
  } as const,
  input: {
    width: '100%',
    border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: '12px',
    padding: '16px 18px',
    background: 'rgba(255,255,255,0.04)',
    color: '#fff',
    font: 'inherit',
  } as const,
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    border: 0,
    borderRadius: '12px',
    padding: '16px 18px',
    background: 'linear-gradient(90deg, #aaf26d 0%, #76e8a5 100%)',
    color: '#041014',
    fontSize: '1rem',
    fontWeight: 800,
    cursor: 'pointer',
  } as const,
  success: {
    margin: 0,
    color: '#aaf26d',
    fontSize: '0.9rem',
  } as const,
} as const

function SignupSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section style={styles.section} id="signup">
      <div style={styles.heading}>
        <p style={styles.eyebrow}>PickPle</p>
        <h2 style={styles.title}>
          더 이상 혼자 고민하지 말고
          <br />
          PickPle과 함께해요
        </h2>
        <p style={styles.subtitle}>이메일을 남겨주시면 가장 먼저 소식을 전해드릴게요.</p>
      </div>

      <form style={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email" style={styles.label}>이메일</label>
        <input id="email" name="email" type="email" placeholder="hello@example.com" required style={styles.input} />
        <button type="submit" style={styles.button}>
          <span>알림 신청</span>
          <span aria-hidden="true">→</span>
        </button>
        {submitted && <p style={styles.success} role="status">신청이 완료되었습니다.</p>}
      </form>
    </section>
  )
}

export default SignupSection

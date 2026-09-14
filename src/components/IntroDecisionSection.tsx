import { useEffect, useRef, useState } from 'react'
import ment1 from '../assets/ment-1.svg'
import ment2 from '../assets/ment-2.svg'
import ment3 from '../assets/ment-3.svg'
import ment4 from '../assets/ment-4.svg'
import ment5 from '../assets/ment-5.svg'
import dot from '../assets/dot.svg'
import ch1 from '../assets/ch-1.svg'
import star from '../assets/star.svg'
import ch2 from '../assets/ch-2.svg'

function IntroDecisionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @keyframes balloonPop {
          0% {
            opacity: 0;
            transform: translateY(28px) scale(0.92);
          }
          70% {
            opacity: 1;
            transform: translateY(-2px) scale(1.015);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .decision-section {
          position: relative;
          z-index: 1;
          padding: 80px clamp(20px, 5vw, 240px) 0;
          text-align: center;
          background: #f3f3f1;
          box-sizing: border-box;
        }

        .decision-heading {
          margin: 0 0 30px;
          color: #0b1118;
          font-family: Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
          font-size: 48px;
          line-height: 1.4;
          letter-spacing: -0.02em;
          font-weight: 700;
        }

        .mobile-break,
        .band-break,
        .sub-break {
          display: none;
        }

        .decision-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          width: 100%;
          max-width: 680px;
          margin: 0 auto;
        }

        .decision-item-img {
          width: 100%;
          max-width: 680px;
          height: auto;
          display: block;
          opacity: 0;
          transform-origin: center bottom;
        }

        .decision-item-img.animate-1 {
          animation: balloonPop 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
        }
        .decision-item-img.animate-2 {
          animation: balloonPop 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.65s forwards;
        }
        .decision-item-img.animate-3 {
          animation: balloonPop 1.4s cubic-bezier(0.22, 1, 0.36, 1) 1.1s forwards;
        }
        .decision-item-img.animate-4 {
          animation: balloonPop 1.4s cubic-bezier(0.22, 1, 0.36, 1) 1.55s forwards;
        }
        .decision-item-img.animate-5 {
          animation: balloonPop 1.4s cubic-bezier(0.22, 1, 0.36, 1) 2.0s forwards;
        }

        .dot-img {
          width: 11px;
          height: 54px;
          display: block;
        }
        .ch-img {
          width: 150px;
          height: 164px;
          display: block;
          margin-top: 0px;
        }

        /* 810px 이상: 좌우 분산 배치 및 밴드 섹션 위로 당기기 */
        @media screen and (min-width: 810px) {
          .decision-list {
            max-width: 920px;
          }
          /* 1, 3, 5번은 왼쪽 영역으로 배치 */
          .decision-item-img.animate-1 {
            align-self: flex-start;
            margin-left: 40px;
          }
          .decision-item-img.animate-3 {
            align-self: flex-start;
            margin-left: 60px;
          }
          .decision-item-img.animate-5 {
            align-self: flex-start;
            margin-left: 120px;
          }

          /* 2, 4번은 오른쪽 영역으로 배치 */
          .decision-item-img.animate-2 {
            align-self: flex-end;
            margin-right: 30px;
          }
          .decision-item-img.animate-4 {
            align-self: flex-end;
            margin-right: 100px;
          }

          /* 아래 점과 캐릭터는 정중앙 유지 */
          .dot-img,
          .ch-img {
            align-self: center;
          }

          /* 810px 이상에서만 밴드 섹션을 위로 올림 */
          .band-section {
            margin-top: -35px;
          }
        }

        .band-section {
          position: relative;
          z-index: 2;
          padding: 0;
        }
        .band-content {
          position: relative;
          width: 100%;
          background: linear-gradient(90deg, #A7DD14 0%, #62D246 100%);
          padding: 28px clamp(20px, 5vw, 240px);
          min-height: 250px;
          overflow: hidden;
          box-sizing: border-box;
        }
        .band-inner {
          position: relative;
          width: 100%;
          max-width: 1100px;
          min-height: 194px;
          margin: 0 auto;
        }
        .band-text-wrap {
          display: grid;
          gap: 6px;
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 1;
          max-width: 760px;
          width: min(760px, calc(100% - 120px));
          text-align: center;
          transform: translate(-50%, -50%);
        }
        .band-title {
          color: #08141a;
          font-family: Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
          font-size: 44px;
          line-height: 1.4;
          letter-spacing: -0.02em;
          font-weight: 700;
        }
        .band-sub {
          color: rgba(8,20,26,0.7);
          font-family: Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
          font-size: 24px;
          line-height: 1.46;
          letter-spacing: -0.01em;
          font-weight: 500;
        }
        .band-star {
          position: absolute;
          left: -54px;
          top: 4px;
          width: 67px;
          height: auto;
          transform: translateY(-32px);
        }
        .band-character {
          position: absolute;
          right: 0;
          top: 50%;
          width: 148px;
          height: auto;
          transform: translateY(calc(-50% + 70px));
        }

        @media screen and (max-width: 1439px) {
          .mobile-break,
          .band-break {
            display: inline;
          }
        }

        @media screen and (max-width: 1439px) and (min-width: 810px) {
          .decision-heading {
            font-size: 38px;
            padding: 0 20px;
          }
          .band-star {
            position: absolute;
            left: -90px;
            top: 30px;
            width: 45px;
            height: auto;
          }
          .band-character {
            position: absolute;
            right: 0;
            top: 58%;
            width: 95px;
            height: auto;
          }
        }

        @media screen and (max-width: 809px) {
          .sub-break {
            display: inline;
          }
          .decision-section {
            padding: 60px 20px 0;
          }
          .decision-heading {
            font-size: 28px;
            line-height: 1.35;
            margin-bottom: 24px;
          }
          .decision-list {
            max-width: 100%;
            gap: 12px;
          }
          .decision-item-img {
            max-width: 320px;
          }
          .dot-img {
            height: 40px;
          }
          .ch-img {
            max-width: 75px;
            height: auto;
            margin-top: 0px;
          }

          .band-section {
            margin-top: -20px;
          }
          .band-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 180px 24px;
            width: 100%;
            min-height: auto;
            height: auto;
            overflow: hidden;
            box-sizing: border-box;
          }
          .band-inner {
            position: relative;
            width: 100%;
            max-width: 360px;
            min-height: auto;
            margin: 0 auto;
          }
          .band-text-wrap {
            position: static;
            transform: none;
            width: 100%;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            text-align: center;
          }
          .band-title {
            font-size: 28px;
          }
          .band-sub {
            font-size: 16px;
          }

          .band-star {
            position: absolute;
            left: 0px;
            top: -80px;
            width: 45px;
            height: auto;
          }
          .band-character {
            position: absolute;
            right: -10px;
            top: 150%;
            width: 95px;
            height: auto;
          }
        }
      `}</style>

      <section className="decision-section" ref={sectionRef}>
        <h2 className="decision-heading">
          이런 생각, 한번쯤
          <br className="mobile-break" />
          해보신 적 있으신가요?
        </h2>
        <div className="decision-list">
          <img src={ment1} alt="" className={`decision-item-img ${isVisible ? 'animate-1' : ''}`} />
          <img src={ment2} alt="" className={`decision-item-img ${isVisible ? 'animate-2' : ''}`} />
          <img src={ment3} alt="" className={`decision-item-img ${isVisible ? 'animate-3' : ''}`} />
          <img src={ment4} alt="" className={`decision-item-img ${isVisible ? 'animate-4' : ''}`} />
          <img src={ment5} alt="" className={`decision-item-img ${isVisible ? 'animate-5' : ''}`} />
          <img src={dot} alt="" className="dot-img" />
          <img src={ch1} alt="" className="ch-img" />
        </div>
      </section>

      <section className="band-section" aria-label="PickPle 안내">
        <div className="band-content">
          <div className="band-inner">
            <div className="band-text-wrap">
              <img src={star} alt="" className="band-star" />
              <strong className="band-title">
                자꾸 망설여지는 결정,
                <br className="band-break" />
                이제 혼자 하지 마세요
              </strong>
              <span className="band-sub">
                PickPle은 당신의 고민에
                <br className="sub-break" />
                가장 솔직한 답을 드립니다
              </span>
            </div>
            <img src={ch2} alt="" className="band-character" />
          </div>
        </div>
      </section>
    </>
  )
}

export default IntroDecisionSection
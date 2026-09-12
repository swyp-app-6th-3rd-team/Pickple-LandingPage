function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="PickPle 홈">
        <img src="/Logo.svg" alt="PickPle" />
      </a>
      <button className="header-button" onClick={() => document.querySelector('#signup')?.scrollIntoView({ behavior: 'smooth' })}>출시 알림 신청</button>
    </header>
  )
}

export default SiteHeader

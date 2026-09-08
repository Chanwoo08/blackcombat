export default function SignupPage() {
    return (
      <main className="auth-page">
        <header className="header">
          <div className="logo">BLACK COMBAT</div>
  
          <nav className="nav">
            <a href="/">HOME</a>
            <a href="/matches">MATCH</a>
            <a href="/fighters">FIGHTERS</a>
            <a href="/login">LOGIN</a>
          </nav>
        </header>
  
        <section className="auth-container">
          <div className="auth-box">
            <p className="auth-label">BLACK COMBAT</p>
  
            <h1>SIGN UP</h1>
  
            <p className="auth-description">
              BLACK COMBAT 계정을 만들어보세요.
            </p>
  
            <form className="auth-form">
              <label>
                이름
                <input
                  type="text"
                  placeholder="이름을 입력하세요"
                />
              </label>
  
              <label>
                이메일
                <input
                  type="email"
                  placeholder="이메일을 입력하세요"
                />
              </label>
  
              <label>
                비밀번호
                <input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                />
              </label>
  
              <label>
                비밀번호 확인
                <input
                  type="password"
                  placeholder="비밀번호를 다시 입력하세요"
                />
              </label>
  
              <button type="submit">
                SIGN UP
              </button>
            </form>
  
            <p className="signup-link">
              이미 계정이 있으신가요?{" "}
              <a href="/login">로그인</a>
            </p>
          </div>
        </section>
      </main>
    );
  }
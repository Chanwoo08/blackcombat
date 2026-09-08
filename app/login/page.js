export default function LoginPage() {
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
  
            <h1>LOGIN</h1>
  
            <p className="auth-description">
              BLACK COMBAT 서비스에 로그인하세요.
            </p>
  
            <form className="auth-form">
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
  
              <button type="submit">
                LOGIN
              </button>
            </form>
  
            <p className="signup-link">
              계정이 없으신가요?{" "}
              <a href="/signup">회원가입</a>
            </p>
          </div>
        </section>
      </main>
    );
  }
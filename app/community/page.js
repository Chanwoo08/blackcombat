'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Community.module.css';

const initialPosts = [
  { 
    id: 3, 
    title: '이번 블랙컵 결승전 직관 가시는 분?', 
    author: '격투기광', 
    date: '2026-06-07', 
    views: 142,
    content: '드디어 기다리고 기다리던 블랙컵 결승전이 다가오네요!\n티켓 예매 성공하신 분들 다들 어느 구역이신가요? 저는 이번에 맨 앞줄 잡아서 너무 기대됩니다 ㅎㅎ 현장에서 같이 응원해요!',
    comments: [
      { id: 1, author: 'MMA덕후', text: '부럽습니다 저는 티켓팅 실패해서 집관이요ㅜㅜ', date: '2026-06-07' }
    ]
  },
  { 
    id: 2, 
    title: '팀 코리아 오메가 선수들 고생하셨습니다 ㅠㅠ', 
    author: '블랙컴뱃러버', 
    date: '2026-06-06', 
    views: 230,
    content: '진짜 이번 경기 모든 선수가 다 불태웠습니다.\n결과는 아쉽게 되었지만 끝까지 포기하지 않는 모습에 감동받았어요. 다음 무대에서는 더 높이 올라갈 뼛속까지 응원합니다!',
    comments: [
      { id: 1, author: '방관자', text: '윤방관 선수 경기 역대급이었음..', date: '2026-06-06' },
      { id: 2, author: '격투팬', text: '인정합니다 진짜 멋졌어요.', date: '2026-06-06' }
    ]
  },
  { 
    id: 1, 
    title: '커뮤니티 이용 수칙 및 클린 리플 안내', 
    author: 'ADMIN', 
    date: '2026-01-01', 
    views: 1054,
    content: '안녕하세요. 블랙컴뱃 팬 커뮤니티 관리자입니다.\n\n1. 타인에 대한 비방 및 욕설 금지\n2. 선수들에 대한 지나친 인신공격성 발언 제재\n3. 클린한 응원 문화 조성\n\n위 수칙 위반 시 무통보 삭제 및 차단 조치될 수 있으니 원활한 소통을 위해 협조 부탁드립니다.',
    comments: [
      { id: 1, author: '클린유저', text: '언제나 고생 많으십니다 룰 지키면서 놀게요!', date: '2026-01-01' }
    ]
  }
];

export default function CommunityPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [isWriting, setIsWriting] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newContent, setNewContent] = useState('');

  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newAuthor.trim() || !newContent.trim()) return;

    const newPostItem = {
      id: posts.length + 1,
      title: newTitle,
      author: newAuthor,
      date: new Date().toISOString().slice(0, 10),
      views: 1,
      content: newContent,
      comments: []
    };

    setPosts([newPostItem, ...posts]);
    setNewTitle('');
    setNewAuthor('');
    setNewContent('');
    setIsWriting(false);
  };

  const handlePostClick = (post) => {
    const updatedPosts = posts.map(p => 
      p.id === post.id ? { ...p, views: p.views + 1 } : p
    );
    setPosts(updatedPosts);
    setSelectedPost({ ...post, views: post.views + 1 });
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentAuthor.trim() || !commentText.trim()) return;

    const newComment = {
      id: selectedPost.comments.length + 1,
      author: commentAuthor,
      text: commentText,
      date: new Date().toISOString().slice(0, 10)
    };

    const updatedComments = [...selectedPost.comments, newComment];
    const updatedPost = { ...selectedPost, comments: updatedComments };

    setSelectedPost(updatedPost);
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
    setCommentAuthor('');
    setCommentText('');
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ── 블랙컴뱃 공식 상단 네비게이션 바 ── */}
      <header className="bc-header">
        <div className="bc-top-util">
          <div className="bc-util-container">
            <Link href="/signup">회원가입</Link>
            <Link href="/login">로그인</Link>
            <select className="bc-lang-select">
              <option value="kr">KR 한국어</option>
              <option value="en">EN English</option>
            </select>
          </div>
        </div>
        <div className="bc-header-container">
          <div className="bc-logo-area">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              BLACK <span>COMBAT</span>
            </Link>
          </div>
          <div className="bc-nav-bg-slant">
            <nav className="bc-nav-links">
              <Link href="/ticket">TICKET</Link>
              <Link href="/store">STORE</Link>
              <Link href="/event">EVENT</Link>
              <Link href="/black-cup">BLACK CUP</Link>
              <Link href="/ranking">RANKING</Link>
              <Link href="/community" className="active">COMMUNITY</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          
          {/* 상단 헤더 영역 */}
          <div className={styles.header}>
            <div>
              <span className={styles.badge}>BLACK COMBAT COMMUNITY</span>
              <h2 className={styles.title}>COMMUNITY</h2>
              <p className={styles.description}>
                팬들과 자유롭게 소통하고 뜨거운 승부를 이야기하는 공간입니다.
              </p>
            </div>
            {!selectedPost && (
              <button
                onClick={() => setIsWriting(!isWriting)}
                className={styles.writeBtn}
              >
                {isWriting ? '✕ 취소하기' : '✏️ 글쓰기'}
              </button>
            )}
          </div>

          {/* 1. 상세 보기 화면 */}
          {selectedPost ? (
            <div className={styles.detailContainer}>
              <div className={styles.detailHeader}>
                <h3 className={styles.detailTitle}>{selectedPost.title}</h3>
                <div className={styles.detailInfoBar}>
                  <span>작성자: <strong>{selectedPost.author}</strong></span>
                  <span>작성일: {selectedPost.date} | 조회수: {selectedPost.views}</span>
                </div>
              </div>

              <div className={styles.detailContent}>
                {selectedPost.content}
              </div>

              <button 
                onClick={() => setSelectedPost(null)}
                className={styles.backListBtn}
              >
                ← 목록으로 돌아가기
              </button>

              {/* 댓글 영역 */}
              <div className={styles.commentSection}>
                <h4 className={styles.commentTitle}>댓글 ({selectedPost.comments.length})</h4>
                
                <div className={styles.commentList}>
                  {selectedPost.comments.length === 0 ? (
                    <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>작성된 댓글이 없습니다. 첫 댓글을 남겨보세요!</p>
                  ) : (
                    selectedPost.comments.map((comment) => (
                      <div key={comment.id} className={styles.commentItem}>
                        <div className={styles.commentHeader}>
                          <span>{comment.author}</span>
                          <span>{comment.date}</span>
                        </div>
                        <p className={styles.commentText}>{comment.text}</p>
                      </div>
                    ))
                  )}
                </div>

                {/* 댓글 작성 폼 */}
                <form onSubmit={handleAddComment} className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    <input
                      type="text"
                      value={commentAuthor}
                      onChange={(e) => setCommentAuthor(e.target.value)}
                      placeholder="댓글 닉네임"
                      className={styles.inputField}
                      required
                    />
                    <div className="md:col-span-3 flex gap-2">
                      <input
                        type="text"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="따뜻한 댓글을 남겨주세요 :)"
                        className={styles.inputField}
                        required
                      />
                      <button type="submit" className={styles.submitBtn}>등록</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            /* 2. 글 작성 폼 또는 목록 화면 */
            <>
              {isWriting && (
                <form onSubmit={handleCreatePost} className={styles.formBox}>
                  <div className={styles.formHeader}>
                    <h3 className={styles.formTitle}>🔥 새 글 작성하기</h3>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>클린한 소통 문화를 지향합니다.</span>
                  </div>
                  
                  <div className={styles.gridInputs}>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>작성자 닉네임</label>
                      <input
                        type="text"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        placeholder="닉네임을 입력하세요"
                        className={styles.inputField}
                        required
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>제목</label>
                      <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="제목을 입력하세요"
                        className={styles.inputField}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>내용</label>
                    <textarea
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      placeholder="내용을 자유롭게 작성해주세요"
                      className={styles.textareaField}
                      required
                    />
                  </div>

                  <div className={styles.formActions}>
                    <button
                      type="button"
                      onClick={() => setIsWriting(false)}
                      className={styles.cancelBtn}
                    >
                      취소
                    </button>
                    <button
                      type="submit"
                      className={styles.submitBtn}
                    >
                      등록하기
                    </button>
                  </div>
                </form>
              )}

              {/* 게시글 목록 테이블 영역 */}
              <div className={styles.tableContainer}>
                <div className={styles.tableScroll}>
                  <table className={styles.table}>
                    <thead>
                      <tr className={styles.theadTr}>
                        <th className={`${styles.th} ${styles.tdCenter}`} style={{ width: '80px' }}>번호</th>
                        <th className={styles.th}>제목</th>
                        <th className={styles.th} style={{ width: '150px' }}>작성자</th>
                        <th className={`${styles.th} ${styles.tdCenter}`} style={{ width: '120px' }}>날짜</th>
                        <th className={`${styles.th} ${styles.tdCenter}`} style={{ width: '90px' }}>조회</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((post) => (
                        <tr 
                          key={post.id} 
                          className={styles.tbodyTr}
                          onClick={() => handlePostClick(post)}
                        >
                          <td className={`${styles.td} ${styles.tdCenter}`}>
                            {post.id === 1 ? (
                              <span className={styles.noticeBadge}>공지</span>
                            ) : (
                              <span style={{ color: '#64748b', fontFamily: 'monospace', fontSize: '0.8125rem' }}>{post.id}</span>
                            )}
                          </td>
                          <td className={styles.td}>
                            <span className={styles.postTitle}>{post.title}</span>
                            {post.comments && post.comments.length > 0 && (
                              <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: 'bold', marginLeft: '6px' }}>
                                [{post.comments.length}]
                              </span>
                            )}
                          </td>
                          <td className={styles.td}>
                            <div className={styles.authorBox}>
                              <div className={styles.authorAvatar}>
                                {post.author.slice(0, 1)}
                              </div>
                              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.author}</span>
                            </div>
                          </td>
                          <td className={`${styles.td} ${styles.tdCenter}`}>
                            <span style={{ color: '#64748b', fontSize: '0.8125rem' }}>{post.date}</span>
                          </td>
                          <td className={`${styles.td} ${styles.tdCenter}`}>
                            <span style={{ color: '#64748b', fontSize: '0.8125rem' }}>{post.views}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
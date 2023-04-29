import { Link } from "react-router-dom";
import URL from "../../context/URL";
import ImgFetch from "../../fetch/ImgFetch";
import { useState } from "react";

const Main =()=> {

    const [noticeNum, setNoticeNum] = useState('01');

    const scrollToApt = () => {
        const st = document.getElementById('main-apt').offsetTop;
        console.log(st)
        window.scroll({top:st, behavior:'smooth'});
    }

    const goYoutube = ()=>{window.location.href='https://www.youtube.com/'}
    const goKakao = ()=> {window.location.href='https://www.kakaocorp.com/page/'}
    const goBlog = () => {window.location.href = 'https://section.blog.naver.com/'}
    return (
        <>
            <section id="visual">
                <article>
                    <ImgFetch imgSource={'visual_logo'} className={'slide-logo'}/>
                </article>
                <button onClick={()=>scrollToApt()} className="scroll-btn"><span>Scroll</span><ImgFetch imgSource={'scroll'}/></button>
            </section>

            <section id="main-apt">
                <h1>분양단지</h1>

            </section>

            <section id='main-service'>

                <section>
                    
                    <article className="service-tab">
                        <div className="service-card">
                            <ImgFetch imgSource={'service_1'} height={'69'}></ImgFetch>
                            <h1>산업단지를<br/>분양하기<br/>원하신다면?</h1>
                            <ul>
                                <li><Link to={URL.MAIN}>분양 가이드</Link></li>
                                <li><Link to={URL.MAIN}>분양중인 산업단지</Link></li>
                                <li><Link to={URL.MAIN}>기업이전 컨설팅</Link></li>
                            </ul>
                        </div>
                        <div className="service-card">
                            <ImgFetch imgSource={'service_2'} height={'71'}></ImgFetch>
                            <h1>산업단지를 찾는<br/>고객님이시라면?</h1>
                            <ul>
                                <li><Link to={URL.MAIN}>분양중인 산업단지</Link></li>
                                <li><Link to={URL.MAIN}>청약 가이드</Link></li>
                                <li><Link to={URL.MAIN}>기업이전 컨설팅</Link></li>
                            </ul>
                        </div>
                        <div className="service-card">
                            <ImgFetch imgSource={'logo_color'} height={'50'}></ImgFetch>
                            <h1>산업단지연구소는<br/>어떤일을 하나요?</h1>
                            <ul>
                                <li><Link to={URL.MAIN}>브랜드 소개</Link></li>
                                <li><Link to={URL.MAIN}>하는 일</Link></li>
                                <li><Link to={URL.MAIN}>클라이언트</Link></li>
                                <li><Link to={URL.MAIN}>포트폴리오</Link></li>
                            </ul>
                        </div>
                    </article>

                    <article className="service-title">
                        <h1>SERVICE</h1>
                        <p>고객센터 1544-1221</p>
                        <button>고객문의</button>
                    </article>
                </section>

            </section>

            <section id="main-notice">
                <article className="notice-list" style={noticeNum == '01' ? {transform: 'translateX(0)'} : {transform:'translateX(-50%)'}}>
                    <div className="notice-box">
                        <Link to={URL.MAIN}></Link>
                        <span>2023.04.16</span>
                        <h1>포스코건설, 부산 최초 산업단지 사업</h1>
                        <p>공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 만평 부지에 공사비 3889억원, 25만 ...</p>
                    </div>
                    <div className="notice-box">
                        <Link to={URL.MAIN}></Link>
                        <span>2023.04.16</span>
                        <h1>포스코건설, 부산 최초 산업단지 사업</h1>
                        <p>공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 만평 부지에 공사비 3889억원, 25만 ...</p>
                    </div>
                    <div className="notice-box">
                        <Link to={URL.MAIN}></Link>
                        <span>2023.04.16</span>
                        <h1>포스코건설, 부산 최초 산업단지 사업</h1>
                        <p>공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 만평 부지에 공사비 3889억원, 25만 ...</p>
                    </div>
                    <div className="notice-box">
                        <Link to={URL.MAIN}></Link>
                        <span>2023.04.16</span>
                        <h1>포스코건설, 부산 최초 산업단지 사업</h1>
                        <p>공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 만평 부지에 공사비 3889억원, 25만 ...</p>
                    </div>
                    <div className="notice-box">
                        <Link to={URL.MAIN}></Link>
                        <span>2023.04.16</span>
                        <h1>포스코건설, 부산 최초 산업단지 사업</h1>
                        <p>공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 만평 부지에 공사비 3889억원, 25만 ...</p>
                    </div>
                    <div className="notice-box">
                        <Link to={URL.MAIN}></Link>
                        <span>2023.04.16</span>
                        <h1>포스코건설, 부산 최초 산업단지 사업</h1>
                        <p>공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 만평 부지에 공사비 3889억원, 25만 ...</p>
                    </div>
                    <div className="notice-box">
                        <Link to={URL.MAIN}></Link>
                        <span>2023.04.16</span>
                        <h1>포스코건설, 부산 최초 산업단지 사업</h1>
                        <p>공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 만평 부지에 공사비 3889억원, 25만 ...</p>
                    </div>
                    <div className="notice-box">
                        <Link to={URL.MAIN}></Link>
                        <span>2023.04.16</span>
                        <h1>포스코건설, 부산 최초 산업단지 사업</h1>
                        <p>공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 공사비 3889억원, 25만평 부지에 만평 부지에 공사비 3889억원, 25만 ...</p>
                    </div>
                </article>
                <article className="notice-bar">
                    <div className="notice-bar-btn">
                        <button onClick={()=>setNoticeNum('01')}>&lt;</button>
                        <span className="notice-now">{noticeNum}</span>
                        <hr/>
                        <span className="notice-all">02</span>
                        <button onClick={()=>setNoticeNum('02')}>&gt;</button>
                    </div>
                    <hr/>
                    <Link to={URL.SERVICE_NOTICE}>더보기 <ImgFetch imgSource={'right'} width={'15'}/></Link>
                </article>
            </section>

            <section id="main-link">
                <article className="link-youtube" onClick={()=>goYoutube()}></article>
                <article className="link-kakao" onClick={()=>goKakao()}></article>
                <article className="link-blog" onClick={()=>goBlog()}></article>
            </section>
        </>
    )
}

export default Main;
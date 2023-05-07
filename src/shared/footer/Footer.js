import { Link } from "react-router-dom";
import URL from "../../context/URL";
import ImgFetch from "../../fetch/ImgFetch";

const Footer = () => {

    return (
        
        <footer>
            <section id="footer-top">
                <article>
                    <div>
                        <h1>브랜드</h1>
                        <ul>
                            <li><Link to={URL.BRAND_INFO}>브랜드 소개</Link></li>
                            <li><Link to={URL.BRAND_BI}>BI</Link></li>
                            <li><Link to={URL.BRAND_CLIENT}>클라이언트</Link></li>
                            <li><Link to={URL.BRAND_PORTFOLIO}>포트폴리오</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1>하는일</h1>
                        <ul>
                            <li><Link to={URL.WORK_SALES_AGENT}>분양대행</Link></li>
                            <li><Link to={URL.WORK_MARKETING}>광고/마케팅</Link></li>
                            <li><Link to={URL.WORK_CONSULTING}>컨설팅</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1>산업단지정보</h1>
                        <ul>
                            <li><Link to={URL.APT_INFO}>분양단지</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1>고객서비스</h1>
                        <ul>
                            <li><Link to={URL.SERVICE_NOTICE}>공지사항</Link></li>
                            <li><Link to={URL.SERVICE_CUSTOMER}>고객문의</Link></li>
                            <li><Link to={URL.SERVICE_CONTACTUS}>CONTACT US</Link></li>
                        </ul>
                    </div>
                </article>
                <div>
                    <ul>
                        <li>마이페이지</li>
                        <li>고객센터</li>
                        <li>회원가입</li>
                        <li>로그인</li>
                        <li>아이디찾기</li>
                        <li>비밀번호 찾기</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>개인정보처리방침</li>
                        <li>이용약관</li>
                        <li>이메일주소수집거부</li>
                    </ul>
                </div>
            </section>

            <section id="footer-bottom">
                {/* <img src="./img/footer_logo.png" alt="soom_logo"> */}
                <ImgFetch imgSource={'footer_logo'} alt='soom_logo' width='148' height={'53'}/>
                <div>
                    <address>
                        <span>(주)숨 인터렉티브</span>
                        <span>대표자 : 이수미</span>
                        <span>사업자번호 : 135-86-41091</span>
                        <span>경기도 화성시 동탄순환대로3길 42-1 4층 숨인터렉티브</span>
                        <span>1544-1221</span>
                    </address>
                    <p>COPYRIGHT &copy; SOOM INTERACTIVE. All rights reserved.</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
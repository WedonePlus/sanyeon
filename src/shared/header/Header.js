import { Link } from "react-router-dom";
import URL from "../../context/URL";

const Header = (props) => {
    const tab = props.tab;
    const headerList = [URL.MENUTYPE_MAIN, URL.MENUTYPE_BI, URL.MENUTYPE_BRANDINFO]
    return (
        <header className={headerList.includes(tab) ? 'main-header' : ''}>
            <Link to={URL.MAIN } id="logo"></Link>
            <div id="menu-title">
                <p>브랜드</p>
                <p>하는일</p>
                <p>산업단지정보</p>
                <p>고객서비스</p>
            </div>
            <div className="call">
                <div className="call-img"></div>
                <span>1544-1221</span>    
            </div>
            <nav id="menu-tab">
                <div className="menu-back"></div>            
                <ul>
                    <li><Link to={URL.BRAND_INFO}>브랜드 소개</Link></li>
                    <li><Link to={URL.BRAND_BI}>BI</Link></li>
                    <li><Link to={URL.BRAND_CLIENT}>클라이언트</Link></li>
                    <li><Link to={URL.BRAND_PORTFOLIO}>포트폴리오</Link></li>
                </ul>
                <ul>
                    <li><Link to={URL.WORK_SALES_AGENT}>분양대행</Link></li>
                    <li><Link to={URL.WORK_MARKETING}>광고/마케팅</Link></li>
                    <li><Link to={URL.WORK_CONSULTING}>컨설팅</Link></li>
                </ul>
                <ul>
                    <li><Link to={URL.APT_INFO}>분양단지</Link></li>
                </ul>
                <ul>
                    <li><Link to={URL.SERVICE_NOTICE}>공지사항</Link></li>
                    <li><Link to={URL.SERVICE_CUSTOMER}>고객문의</Link></li>
                    <li><Link to={URL.SERVICE_CONTACTUS}>CONTACT US</Link></li>
                </ul>
            </nav>
            <div className="menu-back-black"></div>
        </header>
    )
}

export default Header;
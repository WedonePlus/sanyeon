import URL from "../context/URL";
import Main from "../views/main/Main";
import BrandInfo from '../views/brand/BrandInfo';
import BI from '../views/brand/BI'
import Client from "../views/brand/Client";
import Null from "../views/Null";
import SaleAgent from "../views/work/SaleAgent";
import Marketing from "../views/work/Marketing";
import Consulting from "../views/work/Consulting";
import AptInfo from "../views/aptInfo/AptInfo";
import Notice from '../views/customerService/Notice'
import NoticeDetail from "../views/customerService/NoticeDetail";

function Tab(props) {
    const tab = props.tab;
    
    // 메인
    if(tab === URL.MENUTYPE_MAIN) {
        return <Main/>
    }

    // 브랜드
    if(tab === URL.MENUTYPE_BRANDINFO) {
        return <BrandInfo></BrandInfo>
    }

    if(tab === URL.MENUTYPE_BI) {
        return <BI></BI>
    }

    if(tab === URL.MENUTYPE_CLIENT) {
        return <Client/>
    }

    // 하는 일
    if(tab == URL.MENUTYPE_SALESAGENT) {
        return <SaleAgent/>
    }

    if(tab == URL.MENUTYPE_MARKETING) {
        return <Marketing/>
    }

    if(tab == URL.MENUTYPE_CONSULTING){
        return <Consulting/>
    }    

    // 산업단지정보
    if(tab == URL.MENUTYPE_APTINFO) {
        return <AptInfo/>
    }

    // 고객센터
    if(tab == URL.MENUTYPE_NOTICE) {
        return <Notice/>
    }
    if(tab == URL.MENUTYPE_NOTICE_DETAIL) {
        return <NoticeDetail/>
    }

    // 빈 페이지
    return <Null/>
}

export default Tab;
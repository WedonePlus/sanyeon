import URL from "../context/URL";
import Main from "../views/main/Main";
import BrandInfo from '../views/brand/BrandInfo';
import BI from '../views/brand/BI'
import Client from "../views/brand/Client";
import Null from "../views/Null";
import SaleAgent from "../views/work/SaleAgent";
import Marketing from "../views/work/Marketing";
import Consulting from "../views/work/Consulting";

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

    // 빈 페이지
    return <Null/>
}

export default Tab;
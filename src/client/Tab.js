import URL from "../context/URL";
import Main from "../views/main/Main";
import BrandInfo from '../views/brand/BrandInfo';
import BI from '../views/brand/BI'

function Tab(props) {
    const tab = props.tab;
    
    if(tab === URL.MENUTYPE_MAIN) {
        return <Main/>
    }

    if(tab === URL.MENUTYPE_BRANDINFO) {
        return <BrandInfo></BrandInfo>
    }

    if(tab === URL.MENUTYPE_BI) {
        return <BI></BI>
    }
}

export default Tab;
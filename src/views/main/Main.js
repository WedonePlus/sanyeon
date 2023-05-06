import { Link } from "react-router-dom";
import URL from "../../context/URL";
import ImgFetch from "../../fetch/ImgFetch";
import { Fragment, useEffect, useState } from "react";
import CODE from "../../context/CODE";
import tmpBoard from "./tmpBoard";

const Main =()=> {

    const [noticeNum, setNoticeNum] = useState('01'); // 공지사항 페이징 번호
    
    // 분양단지 검색
    const [searchWord, setSearchWord] = useState(''); // 검색 조건 : 산업단지명 / 지역
    const [filterSwitch, setFilterSwitch] = useState(CODE.FLAG_NO); // 상세검색 펼치기 switch
    const [aptType, setAptType] = useState(CODE.APT_TYPE_MAP); // 지도 보기 or 목록 보기
    const [aptArea, setAptArea] = useState([]); // 선택한 지역 리스트
    const [aptMore, setAptMore] = useState(CODE.FLAG_NO);
    const [searchSection, setSearchSection] = useState([]);
    const [searchSize, setSearchSize] = useState([]);

    const tmpBaord = tmpBoard;
    
    const num = (n) => {
        return n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    // 비쥬얼 영역 -> 분양단지 탭으로 스크롤 이동
    const scrollToApt = () => {
        
        const st = document.getElementById('main-apt').offsetTop;
        console.log(st)
        window.scroll({top:st, behavior:'smooth'});
    }


    const changeAptArea = (areaValue) => {
        console.log(areaValue)
        if(aptArea.includes(areaValue)) {
            let arr = aptArea.filter((element) => element !== areaValue);
            setAptArea(arr)
        }else {
            setAptArea([...aptArea, areaValue])
        }
    }
    const changeSearchSection = (v) => {
        if(searchSection.includes(v)) {
            let arr = searchSection.filter((element) => element !== v);
            setSearchSection(arr)
        }else {
            setSearchSection([...searchSection, v])
        }
    }
    const chagneSearchSize = (v) => {
        if(searchSize.includes(v)) {
            let arr = searchSize.filter((element) => element !== v);
            setSearchSize(arr)
        }else {
            setSearchSize([...searchSize, v])
        }
    }

    const showMore = () => {
        setAptMore(CODE.FLAG_YES)
        const st = document.getElementById('main-apt').offsetTop + document.getElementById('main-apt').offsetHeight - 100;
        window.scroll({top:st, behavior:'smooth'});
    }

    const moreClose = () => {
        setAptMore(CODE.FLAG_NO)
        const st = document.getElementById('main-apt').offsetTop;
        window.scroll({top:st, behavior:'smooth'});
    }

    const search = () => {
        setFilterSwitch(CODE.FLAG_NO);
    }

    // 실제 링크들
    const goYoutube = ()=>{window.location.href='https://www.youtube.com/'}
    const goKakao = ()=> {window.location.href='https://www.kakaocorp.com/page/'}
    const goBlog = () => {window.location.href = 'https://section.blog.naver.com/'}

    useEffect(()=> {
        setAptMore(CODE.FLAG_NO)
    }, [aptType])

    return (
        <>
            {/* 비쥬얼 영역 */}
            <section id="visual">
                <article>
                    <ImgFetch imgSource={'visual_logo'} className={'visual-logo'}/>
                </article>
                <button onClick={()=>scrollToApt()} className="scroll-btn"><span>Scroll</span><ImgFetch imgSource={'scroll'}/></button>
                <Link to={URL.APT_INFO} id='visual_btn'>
                    <ImgFetch imgSource={'visual_btn'}/>
                    <span>전국 산업단지 분양정보 ▼</span>
                </Link>
            </section>

            {/* 분양 단지 */}
            <section id="main-apt">
                <h1>분양단지</h1>

                <article className="apt-search">
                    <div className="search-tab">
                        <div className="search-word">
                            <input type="text" value={searchWord} onChange={e=>setSearchWord(e.target.value)} placeholder="산업단지명 / 지역 입력"></input>
                            <button><ImgFetch imgSource={'search'} width={'18'}></ImgFetch></button>
                        </div>
                        <div className="search-condition">
                            <button className={filterSwitch == CODE.FLAG_YES ? 'filter filter-active' : 'filter'} onClick={()=>setFilterSwitch(filterSwitch == CODE.FLAG_YES ? CODE.FLAG_NO : CODE.FLAG_YES)}><span>상세검색</span></button>
                            <button className={aptType == CODE.APT_TYPE_BOARD ? "search-switch active" : "search-switch"} onClick={()=>setAptType(CODE.APT_TYPE_BOARD)}><ImgFetch imgSource={'list'} width={'12'}></ImgFetch></button>
                            <button className={aptType == CODE.APT_TYPE_MAP ? "search-switch active" : "search-switch"} onClick={()=>setAptType(CODE.APT_TYPE_MAP)}><ImgFetch imgSource={'location'} width={'12'}></ImgFetch></button>
                        </div>
                    </div>
                    <ul className="search-area">
                        <li className={aptArea.length == 0 ?'active' : ''} onClick={()=> setAptArea([])}>전국</li>
                        <li className={aptArea.includes(CODE.AREA_SEOUL) ? 'active' : ''} onClick={()=>changeAptArea(CODE.AREA_SEOUL)}>수도권</li>
                        <li className={aptArea.includes(CODE.AREA_GANGWON) ? 'active' : ''} onClick={()=>changeAptArea(CODE.AREA_GANGWON)}>강원권</li>
                        <li className={aptArea.includes(CODE.AREA_CHUNGCHEONG) ? 'active' : ''} onClick={()=>changeAptArea(CODE.AREA_CHUNGCHEONG)}>충청권</li>
                        <li className={aptArea.includes(CODE.AREA_GYEONGSANG) ? 'active' : ''} onClick={()=>changeAptArea(CODE.AREA_GYEONGSANG)}>경상권</li>
                        <li className={aptArea.includes(CODE.AREA_JEOLLA) ? 'active' : ''} onClick={()=>changeAptArea(CODE.AREA_JEOLLA)}>전라권</li>
                        <li className={aptArea.includes(CODE.AREA_JEJU) ? 'active' : ''} onClick={()=>changeAptArea(CODE.AREA_JEJU)}>제주권</li>
                    </ul>
                    
                    {
                        filterSwitch == CODE.FLAG_YES &&  <div id='hamburger-search'>
                            <div  className="search-area-sub">
                                <ul className="search-sub-category">
                                    <li><button className={searchSection.length == 0 ?'active' : ''} onClick={()=> setSearchSection([])}>전체업종</button></li>
                                    <li><button className={searchSection.includes('C10') ? 'active' : ''} onClick={()=>changeSearchSection('C10')}><span>C10</span>식료품</button></li>
                                    <li><button className={searchSection.includes('C11') ? 'active' : ''} onClick={()=>changeSearchSection('C11')}><span>C11</span>음료</button></li>
                                    <li><button className={searchSection.includes('C12') ? 'active' : ''} onClick={()=>changeSearchSection('C12')}><span>C12</span>담배</button></li>
                                    <li><button className={searchSection.includes('C13') ? 'active' : ''} onClick={()=>changeSearchSection('C13')}><span>C13</span>섬유제품</button></li>
                                    <li><button className={searchSection.includes('C14') ? 'active' : ''} onClick={()=>changeSearchSection('C14')}><span>C14</span>의복/액세서리</button></li>
                                    <li><button className={searchSection.includes('C15') ? 'active' : ''} onClick={()=>changeSearchSection('C15')}><span>C15</span>가죽/가방/신발</button></li>
                                    <li><button className={searchSection.includes('C16') ? 'active' : ''} onClick={()=>changeSearchSection('C16')}><span>C16</span>목재</button></li>
                                    <li><button className={searchSection.includes('C17') ? 'active' : ''} onClick={()=>changeSearchSection('C17')}><span>C17</span>펄프</button></li>
                                    <li><button className={searchSection.includes('C18') ? 'active' : ''} onClick={()=>changeSearchSection('C18')}><span>C18</span>인쇄업</button></li>
                                </ul>
                                
                                <ul className="search-sub-category">
                                    <li><button className={searchSection.includes('C19') ? 'active' : ''} onClick={()=>changeSearchSection('C19')}><span>C19</span>코크스/석탄/섬유</button></li>
                                    <li><button className={searchSection.includes('C20') ? 'active' : ''} onClick={()=>changeSearchSection('C20')}><span>C20</span>화학제품</button></li>
                                    <li><button className={searchSection.includes('C21') ? 'active' : ''} onClick={()=>changeSearchSection('C21')}><span>C21</span>의약품</button></li>
                                    <li><button className={searchSection.includes('C22') ? 'active' : ''} onClick={()=>changeSearchSection('C22')}><span>C22</span>고무/플라스틱</button></li>
                                    <li><button className={searchSection.includes('C23') ? 'active' : ''} onClick={()=>changeSearchSection('C23')}><span>C23</span>비금속광물</button></li>
                                    <li><button className={searchSection.includes('C24') ? 'active' : ''} onClick={()=>changeSearchSection('C24')}><span>C24</span>1차금속</button></li>
                                    <li><button className={searchSection.includes('C25') ? 'active' : ''} onClick={()=>changeSearchSection('C25')}><span>C25</span>금속가공</button></li>
                                    <li><button className={searchSection.includes('C26') ? 'active' : ''} onClick={()=>changeSearchSection('C26')}><span>C26</span>전자부품/컴퓨터</button></li>
                                    <li><button className={searchSection.includes('C27') ? 'active' : ''} onClick={()=>changeSearchSection('C27')}><span>C27</span>의료/정밀/시계</button></li>
                                    <li><button className={searchSection.includes('C28') ? 'active' : ''} onClick={()=>changeSearchSection('C28')}><span>C28</span>전기장비</button></li>
                                </ul>
                                
                                <ul className="search-sub-category">
                                    <li><button className={searchSection.includes('C29') ? 'active' : ''} onClick={()=>changeSearchSection('C29')}><span>C29</span>기타기계및장비</button></li>
                                    <li><button className={searchSection.includes('C30') ? 'active' : ''} onClick={()=>changeSearchSection('C30')}><span>C30</span>자동차/트레일러</button></li>
                                    <li><button className={searchSection.includes('C31') ? 'active' : ''} onClick={()=>changeSearchSection('C31')}><span>C31</span>기타운송장비</button></li>
                                    <li><button className={searchSection.includes('C32') ? 'active' : ''} onClick={()=>changeSearchSection('C32')}><span>C32</span>가구</button></li>
                                    <li><button className={searchSection.includes('C33') ? 'active' : ''} onClick={()=>changeSearchSection('C33')}><span>C33</span>기타제품</button></li>
                                    <li><button className={searchSection.includes('C34') ? 'active' : ''} onClick={()=>changeSearchSection('C34')}><span>C34</span>산업용장비 수리</button></li>
                                    <li><button className={searchSection.includes('D35') ? 'active' : ''} onClick={()=>changeSearchSection('D35')}><span>D35</span>전기/가스/증기</button></li>
                                    <li><button className={searchSection.includes('E37') ? 'active' : ''} onClick={()=>changeSearchSection('E37')}><span>E37</span>하수/폐소/분뇨</button></li>
                                    <li><button className={searchSection.includes('E38') ? 'active' : ''} onClick={()=>changeSearchSection('E38')}><span>E38</span>폐기물 수집운반</button></li>
                                    <li><button className={searchSection.includes('H52') ? 'active' : ''} onClick={()=>changeSearchSection('H52')}><span>H52</span>창고/운송</button></li>
                                </ul>
                            </div>

                            <div  className="search-area-sub">
                                <ul className="search-sub-extent">
                                    <li><button className={searchSize.length == 0 ?'active' : ''} onClick={()=> setSearchSize([])}>전체면적</button></li>
                                    <li><button className={searchSize.includes(CODE.SIZE_OPTION_FIRST) ? 'active' : ''} onClick={()=>chagneSearchSize(CODE.SIZE_OPTION_FIRST)}>240㎡ (100평) 이하</button></li>
                                    <li><button className={searchSize.includes(CODE.SIZE_OPTION_SECOND) ? 'active' : ''} onClick={()=>chagneSearchSize(CODE.SIZE_OPTION_SECOND)}>120㎡ (500평) 이하</button></li>
                                    <li><button className={searchSize.includes(CODE.SIZE_OPTION_THIRD) ? 'active' : ''} onClick={()=>chagneSearchSize(CODE.SIZE_OPTION_THIRD)}>2400㎡ (1000평) 이하</button></li>
                                    <li><button className={searchSize.includes(CODE.SIZE_OPTION_FOURTH) ? 'active' : ''} onClick={()=>chagneSearchSize(CODE.SIZE_OPTION_FOURTH)}>12000 (5000평) 이하</button></li>
                                    <li><button className={searchSize.includes(CODE.SIZE_OPTION_FIFTH) ? 'active' : ''} onClick={()=>chagneSearchSize(CODE.SIZE_OPTION_FIFTH)}>12000 (5000평) 이상</button></li>
                                </ul>
                            </div>
                            <button onClick={()=>search()}>확인</button>
                        </div>
                    }
                </article>

                {
                    aptType == CODE.APT_TYPE_BOARD && <>    
                    <article className="apt-gallery">
                        {
                            tmpBaord.map((x, idx)=>{
                                if(aptMore == CODE.FLAG_NO && idx > 2) {return null;}
                                if(aptMore == CODE.FLAG_YES && idx > 5) {return null;}
                                return <Fragment key={'gallery'+idx}>
                                    <div className="apt-gallery-box">
                                    <div className="gallery-img"><ImgFetch imgSource={'condo'}/></div>
                                    <p><span>{x.status}</span>{x.location}</p>
                                    <h1>{x.name}</h1>
                                    <div className="apt-gallery-sub">
                                        <div>
                                            <span>위치</span>
                                            <p>{x.location} {x.locationDetail}</p>
                                        </div>
                                        <div>
                                            <span>조성면적</span>
                                            <p>{num(x.size)}㎡ ({num(Math.round(x.size * 0.3025))}평)</p>
                                        </div>
                                        <div>
                                            <span>사업기간</span>
                                            <p>{x.periodStart}년-{x.periodEnd}년</p>
                                        </div>
                                        <div>
                                            <span>시행 / 시공</span>
                                            <p>{x.companyAction} / {x.companyConstruct}</p>
                                        </div>
                                        <div>
                                            <span>건폐율 / 용적률</span>
                                            <p>산업시설용지: {x.industBuilding}% / {x.industVolume}%<br/>복합시설용지: {x.complexBuilding}% / {x.complexVolume}%</p>
                                        </div>
                                        <div>
                                            <span>입주가능 업종</span>
                                            <p>
                                                {x.secotrs.map(s=><Fragment key={s.sectorId}>({s.sectorId}){s.sectorName}</Fragment>)}
                                            </p>
                                        </div>
                                    </div>
                                    <button><span className="apt-btn-title">{x.name}</span><span className="apt-btn-detail">상세보기 &gt;</span></button>
                                </div>
                                </Fragment>
                                
                            })
                        }
                    </article>
                </>
                }
                {
                    aptType == CODE.APT_TYPE_MAP && <>
                    <article className="apt-map">
                        <div className="apt-map-view">
                            {/* <ImgFetch imgSource={'map/all'}/> */}
                            
                            <img src={require('../../img/map/all.png')} useMap="#image-map"></img>
                            
                            <div>
                                <img style={aptArea.includes(CODE.AREA_SEOUL) ? {'opacity' : '1'} : {opacity : '0'}} id="seoul" src={require('../../img/map/seoul.png')} useMap="#image-map"></img>
                                <img style={aptArea.includes(CODE.AREA_GANGWON) ? {'opacity' : '1'} : {opacity : '0'}} id='gangwon' src={require('../../img/map/gangwon.png')} useMap="#image-map"></img>
                                <img style={aptArea.includes(CODE.AREA_CHUNGCHEONG) ? {'opacity' : '1'} : {opacity : '0'}} id='chungcheong' src={require('../../img/map/chungcheong.png')} useMap="#image-map"></img>
                                <img style={aptArea.includes(CODE.AREA_GYEONGSANG) ? {'opacity' : '1'} : {opacity : '0'}} id='gyeongsang' src={require('../../img/map/gyeongsang.png')} useMap="#image-map"></img>
                                <img style={aptArea.includes(CODE.AREA_JEOLLA) ? {'opacity' : '1'} : {opacity : '0'}} id='jeolla' src={require('../../img/map/jeolla.png')} useMap="#image-map"></img>
                                <img style={aptArea.includes(CODE.AREA_JEJU) ? {'opacity' : '1'} : {opacity : '0'}}  id='jeju' src={require('../../img/map/jeju.png')} useMap="#image-map"></img>
                            </div>
                            <map name="image-map" id='image-map'>
                                <area target="" alt={CODE.AREA_SEOUL} onClick={()=>{changeAptArea(CODE.AREA_SEOUL); return false;}} coords="51,76,74,69,84,73,95,70,101,61,116,47,117,32,130,25,143,37,150,41,166,58,163,79,164,96,178,102,183,107,187,116,187,136,184,150,174,162,164,173,157,175,153,179,144,179,126,183,108,167,99,169,91,162,79,154,87,145,99,145,105,128,97,128,99,117,69,113,55,103,47,87,45,83" shape="poly" />
                                <area target="" alt={CODE.AREA_GANGWON}  onClick={()=>{changeAptArea(CODE.AREA_GANGWON); return false;}} coords="143,20,156,20,174,13,193,19,217,21,256,7,268,19,274,49,303,91,319,116,322,121,326,132,337,143,340,154,322,159,290,162,259,159,230,147,221,147,208,154,192,145,200,107,176,91,175,71,185,55,178,56" shape="poly" />
                                <area target="" alt={CODE.AREA_CHUNGCHEONG}  onClick={()=>{changeAptArea(CODE.AREA_CHUNGCHEONG); return false;}} coords="64,182,84,183,107,191,124,191,143,190,153,190,192,175,222,161,240,157,260,167,254,181,237,189,215,201,207,219,201,233,201,245,204,261,215,271,212,288,204,295,188,289,178,291,172,297,154,290,153,278,144,285,134,285,129,274,118,276,103,287,99,302,89,283,62,216,52,206,52,195,52,205,53,186" shape="poly" />
                                <area target="" alt={CODE.AREA_GYEONGSANG} onClick={()=>{changeAptArea(CODE.AREA_GYEONGSANG); return false;}} coords="275,169,342,162,350,198,356,292,365,288,354,350,314,404,302,404,278,392,269,402,267,410,283,410,285,423,280,434,270,441,260,440,246,432,230,419,223,430,219,437,204,437,190,408,188,392,180,385,183,356,183,341,208,312,208,296,223,290,222,267,210,255,212,241,212,222,237,191,247,196,259,196,260,180,270,173" shape="poly" />
                                <area target="" alt={CODE.AREA_JEOLLA} onClick={()=>{changeAptArea(CODE.AREA_JEOLLA); return false;}} coords="97,312,105,308,117,288,125,294,137,299,145,294,157,298,163,300,177,307,190,299,200,304,200,318,190,318,181,335,173,349,176,370,176,391,175,406,188,417,195,438,187,448,199,462,202,472,178,458,177,440,173,432,165,432,165,442,171,452,172,460,166,468,174,474,162,475,149,477,143,477,130,482,133,474,146,456,133,452,122,462,117,474,116,484,115,489,99,489,82,489,67,467,63,477,48,484,39,472,54,464,56,450,41,442,18,439,31,432,50,432,67,439,57,428,56,414,56,402,46,402,43,406,40,392,55,392,61,392,67,385,65,366,71,353,76,345,74,333" shape="poly"/>
                                <area target="" alt={CODE.AREA_JEJU} onClick={()=>{changeAptArea(CODE.AREA_JEJU); return false;}} coords="84,515,94,511,103,511,112,511,126,523,126,535,114,545,96,545,82,549,76,552,65,544,64,536,77,532,81,524"  shape="poly" />
                            </map>

                        </div>
                        <div className="apt-map-board">
                        {
                            tmpBaord.map((x, idx)=>{
                                if(aptMore == CODE.FLAG_NO && idx > 1) {return null;}
                                if(aptMore == CODE.FLAG_YES && idx > 3) {return null;}
                                return <Fragment key={'map'+idx}>
                                    <div className="apt-map-box">
                                    <div className="map-img"><ImgFetch imgSource={'condo'}/></div>
                                    <p><span>{x.status}</span>{x.location}</p>
                                    <h1>{x.name}</h1>
                                    <div className="apt-map-sub">
                                        <div>
                                            <span>위치</span>
                                            <p>{x.location} {x.locationDetail}</p>
                                        </div>
                                        <div>
                                            <span>조성면적</span>
                                            <p>{num(x.size)}㎡ ({num(Math.round(x.size * 0.3025))}평)</p>
                                        </div>
                                        <div>
                                            <span>사업기간</span>
                                            <p>{x.periodStart}년-{x.periodEnd}년</p>
                                        </div>
                                        <div>
                                            <span>시행 / 시공</span>
                                            <p>{x.companyAction} / {x.companyConstruct}</p>
                                        </div>
                                        <div>
                                            <span>건폐율 / 용적률</span>
                                            <p>산업시설용지: {x.industBuilding}% / {x.industVolume}%<br/>복합시설용지: {x.complexBuilding}% / {x.complexVolume}%</p>
                                        </div>
                                        <div>
                                            <span>입주가능 업종</span>
                                            <p>
                                                {x.secotrs.map(s=><Fragment key={s.sectorId}>({s.sectorId}){s.sectorName}</Fragment>)}
                                            </p>
                                        </div>
                                    </div>
                                    <button><span className="apt-btn-title">{x.name}</span><span className="apt-btn-detail">상세보기 &gt;</span></button>
                                </div>
                                </Fragment>
                                
                            })
                        }
                        </div>
                    </article>
                    </>
                }
                <div className="apt-btn-box">
                {
                    aptMore == CODE.FLAG_NO && <button onClick={()=>showMore()}>더보기 +</button>
                }
                {
                    aptMore == CODE.FLAG_YES && <>
                    <button onClick={()=>moreClose()}>닫기</button>
                    <button className="blue-btn" onClick={()=>window.location.href = URL.APT_INFO}>더 많은 정보 보러 가기</button>
                    </>
                }
                </div>

            </section>

            <section id='main-service'>

                <section>
                    
                    <article className="service-tab">
                        <div className="service-card">
                            <div>
                                <ImgFetch imgSource={'service_1'} height={'69'}></ImgFetch>
                                <h1>산업단지를<br/>분양하기<br/>원하신다면?</h1>
                            </div>
                            <ul>
                                <li><Link to={URL.MAIN}>분양 가이드</Link></li>
                                <li><Link to={URL.MAIN}>분양중인 산업단지</Link></li>
                                <li><Link to={URL.MAIN}>기업이전 컨설팅</Link></li>
                            </ul>
                        </div>
                        <div className="service-card">
                            <div>
                                <ImgFetch imgSource={'service_2'} height={'71'}></ImgFetch>
                                <h1>산업단지를 찾는<br/>고객님이시라면?</h1>
                            </div>
                            <ul>
                                <li><Link to={URL.MAIN}>분양중인 산업단지</Link></li>
                                <li><Link to={URL.MAIN}>청약 가이드</Link></li>
                                <li><Link to={URL.MAIN}>기업이전 컨설팅</Link></li>
                            </ul>
                        </div>
                        <div className="service-card">
                            <div>
                                <ImgFetch imgSource={'logo_color'} height={'50'}></ImgFetch>
                                <h1>산업단지연구소는<br/>어떤일을 하나요?</h1>
                            </div>
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
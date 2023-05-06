import { useState } from "react";
import ImgFetch from "../../fetch/ImgFetch";

const SaleAgent = () => {

    const [selectNow, setSelectNow] = useState('tab-1');

    return (
        <>
        <main>
            <h1>분양대행</h1>
            <address>HOME<span/>하는일<span/>분양대행</address>
            
            <section id='work'>
                <article id='work-select-menu'>
                    <ul>
                        <li className={selectNow == 'tab-1' ? 'active' : ''} onClick={()=>setSelectNow('tab-1')}>산업단지 분양</li>
                        <li className={selectNow == 'tab-2' ? 'active' : ''} onClick={()=>setSelectNow('tab-2')}>산업단지 성공 솔루션 </li>
                    </ul>
                </article>

                {
                    selectNow == 'tab-1' && <>
                        <article className="work-image-title">
                            <ImgFetch imgSource={'sale_agent_back'}/>
                            <div className="work-img-sub">
                                <p>
                                    산업단지연구소는 환경을 분석하고<br></br>
                                    변화를 예측하여 새로운 트렌드를 제시하는<br/>
                                    토탈 산업부동산 솔루션 에이전시입니다
                                </p>
                                <button className="transition-btn">회사소개서 PDF</button>
                            </div>
                        </article>
                        <article className="work-content">
                            <p>STEP별 업무를 관리함으로써 체계적인 산업단지 용역업무를 실시합니다.<br></br>귀하는 당사의 STEP별 업무에 대한 용역업무 협의가 가능합니다.</p>
                            <div className="work-content-card">
                                <div>
                                    <ImgFetch imgSource={'sg_1'}/>
                                    <p>안전한 생활을 위한<br></br>부재중 방문자 확인,cctv 등</p>
                                </div>
                                <div>
                                    <ImgFetch imgSource={'sg_2'}/>
                                    <p>안전한 생활을 위한<br></br>부재중 방문자 확인,cctv 등</p>
                                </div>
                                <div>
                                    <ImgFetch imgSource={'sg_3'}/>
                                    <p>안전한 생활을 위한<br></br>부재중 방문자 확인,cctv 등</p>
                                </div>
                                <div>
                                    <ImgFetch imgSource={'sg_4'}/>
                                    <p>안전한 생활을 위한<br></br>부재중 방문자 확인,cctv 등</p>
                                </div>
                                <div>
                                    <ImgFetch imgSource={'sg_3'}/>
                                    <p>안전한 생활을 위한<br></br>부재중 방문자 확인,cctv 등</p>
                                </div>
                                <div>
                                    <ImgFetch imgSource={'sg_4'}/>
                                    <p>안전한 생활을 위한<br></br>부재중 방문자 확인,cctv 등</p>
                                </div>
                            </div>
                        </article>

                        <article className="work-step">
                            <div>
                                <div className="step-title">
                                    <h1>01</h1>
                                    <p>안전한 생활을 위한 <br></br>부재중 방문자 확인</p>
                                </div>
                                <div className="step-detail">
                                    <div>
                                        <h1>1</h1>
                                        <p>입장환경분석<br/>(개발기본 구상안 수립)</p>
                                    </div>
                                    <div>
                                        <h1>2</h1>
                                        <p>공급 및 시장현황 분석<br/>(현재, 미래 시점의 공급동 및 예측)</p>
                                    </div>
                                    <div>
                                        <h1>3</h1>
                                        <p>정부 정책 분석<br/>(정책에 따른 개발 방향 제시)</p>
                                    </div>
                                    <div>
                                        <h1>4</h1>
                                        <p>수요자 분석<br/>(업종, 적정면적, 분양가, 입주예정시기 등)</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="work-step">
                            <div>
                                <div className="step-title">
                                    <h1>02</h1>
                                    <p>안전한 생활을 위한 <br></br>부재중 방문자 확인</p>
                                </div>
                                <div className="step-detail">
                                    <div>
                                        <h1>1</h1>
                                        <p>입장환경분석<br/>(개발기본 구상안 수립)</p>
                                    </div>
                                    <div>
                                        <h1>2</h1>
                                        <p>공급 및 시장현황 분석<br/>(현재, 미래 시점의 공급동 및 예측)</p>
                                    </div>
                                    <div>
                                        <h1>3</h1>
                                        <p>정부 정책 분석<br/>(정책에 따른 개발 방향 제시)</p>
                                    </div>
                                    <div>
                                        <h1>4</h1>
                                        <p>수요자 분석<br/>(업종, 적정면적, 분양가, 입주예정시기 등)</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="work-step">
                            <div>
                                <div className="step-title">
                                    <h1>03</h1>
                                    <p>안전한 생활을 위한 <br></br>부재중 방문자 확인</p>
                                </div>
                                <div className="step-detail">
                                    <div>
                                        <h1>1</h1>
                                        <p>입장환경분석<br/>(개발기본 구상안 수립)</p>
                                    </div>
                                    <div>
                                        <h1>2</h1>
                                        <p>공급 및 시장현황 분석<br/>(현재, 미래 시점의 공급동 및 예측)</p>
                                    </div>
                                    <div>
                                        <h1>3</h1>
                                        <p>정부 정책 분석<br/>(정책에 따른 개발 방향 제시)</p>
                                    </div>
                                    <div>
                                        <h1>4</h1>
                                        <p>수요자 분석<br/>(업종, 적정면적, 분양가, 입주예정시기 등)</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        
                    </>
                }
            </section>
        </main>
        </>
    )
}

export default SaleAgent;
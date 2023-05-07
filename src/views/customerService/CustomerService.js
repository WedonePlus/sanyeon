import { useState } from "react";
import CODE from "../../context/CODE";
import ImgFetch from "../../fetch/ImgFetch";
import URL from "../../context/URL";
import { Link } from "react-router-dom";

const CustomerService = () => {

    const [serviceOption, setServiceOption] = useState('');
    const [agreeCheck, setAgreeCheck] = useState(CODE.FLAG_NO);
    

    return (
        <main>
            <h1>고객문의</h1>
            <address>HOME<span/>고객서비스<span/>고객문의</address>
            
            <section id="customer-service">
                <p>
                    산업단지 연구소에 대하여 <br/>
                    궁금하신 점이 있으신가요?
                </p>

                <article className="customer-select">
                    <h1>문의 분류를 선택해주세요.</h1>
                    <ul>
                        <li onClick={()=>setServiceOption(CODE.SERVICE_OPTION_SALE)} className={serviceOption == CODE.SERVICE_OPTION_SALE ? 'active' : ''}><ImgFetch imgSource={serviceOption == CODE.SERVICE_OPTION_SALE ? 'customer_1_white' : 'customer_1'}/><span>분양문의</span></li>
                        <li onClick={()=>setServiceOption(CODE.SERVICE_OPTION_ADVERTISE)} className={serviceOption == CODE.SERVICE_OPTION_ADVERTISE ? 'active' : ''}><ImgFetch imgSource={serviceOption == CODE.SERVICE_OPTION_ADVERTISE ? 'customer_2_white' : 'customer_2'}/><span>광고문의</span></li>
                        <li onClick={()=>setServiceOption(CODE.SERVICE_OPTION_CONSULTING)} className={serviceOption == CODE.SERVICE_OPTION_CONSULTING ? 'active' : ''}><ImgFetch imgSource={serviceOption == CODE.SERVICE_OPTION_CONSULTING ? 'customer_3_white' : 'customer_3'}/><span>컨설팅문의</span></li>
                        <li onClick={()=>setServiceOption(CODE.SERVICE_OPTION_ALLIANCE)} className={serviceOption == CODE.SERVICE_OPTION_ALLIANCE ? 'active' : ''}><ImgFetch imgSource={serviceOption == CODE.SERVICE_OPTION_ALLIANCE ? 'customer_4_white' : 'customer_4'}/><span>제휴문의</span></li>
                        <li onClick={()=>setServiceOption(CODE.SERVICE_OPTION_ETC)} className={serviceOption == CODE.SERVICE_OPTION_ETC ? 'active' : ''}><ImgFetch imgSource={serviceOption == CODE.SERVICE_OPTION_ETC ? 'customer_5_white' : 'customer_5'}/><span>기타</span></li>
                    </ul>
                </article>

               {
                serviceOption != '' && <article className="customer-agree">
                        <h1>문의하실 내용을 입력 해 주세요.</h1>
                        <p>
                            직접 작성하신 개인정보의 경우([필수 정보], [선택 정보] 및 이외의 고객이 직접 작성한 개인정보) 개인정보 수집을<br/>
                            동의한 것으로 확인하며 문의내용에 작성된 개인정보는 상담 및 컨설팅 서비스 목적으로 처리하도록 하겠습니다. <br/>
                            1:1 문의에 대한 개인정보 처리 사항은 '개인정보 처리방침' 온라인 고객문의 사항을 참조해주시기 바랍니다.
                        </p>
                        <p className="customer-txt-point">
                            개인정보 수집이용 동의에 동의하시면 문의작성이 가능합니다.
                        </p>
                        <button className={agreeCheck == CODE.FLAG_YES ? 'active' : ''} onClick={()=>{agreeCheck == CODE.FLAG_NO ? setAgreeCheck(CODE.FLAG_YES) : setAgreeCheck(CODE.FLAG_NO)}}>√  개인정보 수집 이용에 동의합니다</button>
                        {
                            agreeCheck == CODE.FLAG_YES && <span>CLICK</span>
                        }
                    </article>
               }
               {
                serviceOption != '' && agreeCheck == CODE.FLAG_YES && <article className="customer-form">
                    <p className="form-notice"><span className="require">＊</span>항목은 필수 입력 항목입니다.</p>
                    <div className="form-tab">
                        <div>
                            <h1>업체명/성함 <span className="require">＊</span></h1>
                            <input type="text"></input>
                        </div>
                        
                        <div>
                            <h1>전화번호  <span className="require">＊</span></h1>
                            <input type="text"></input>
                        </div>
                        
                        <div>
                            <h1>이메일  <span className="require">＊</span></h1>
                            <input type="text"></input>
                        </div>

                        <div>
                            <h1>내용  <span className="require">＊</span></h1>
                            <textarea placeholder=" ▷ 기존 공장 소재지 :
                                                ▷ 업종 :
                                                ▷ 희망 면적 :
                                                ▷ 찾으시는 지역 :
                                                ▷ 입주시기 :
                                                ▷ 예산 :
                                                ▷ 기타문의사항 :"/>
                        </div>
                    </div>
                    <button className="transition-btn">등록</button>
                </article>
               }

               <article className="customer-banner">
                    <div>
                        <h2>카카오톡</h2>
                        <h3>1:1 전문상담</h3>
                        <p>궁금하신 점에 대한 답변을 바로 확인하세요.</p>
                        <button className="transition-btn">카카오톡으로 바로 문의하기</button>
                    </div>
                    <div>
                        <p>산업단지 연구소 고객센터</p>
                        <h1>1544.1221</h1>
                        <ul>
                            <li>운영시간</li>
                            <li>월- 금 : 09:00 - 18:00</li>
                            <li>토 : 09:00 - 13:00</li>
                        </ul>
                        <span>※ 운영시간 외에는 <Link to={URL.SERVICE_CUSTOMER}>고객문의</Link> 혹은 <Link to ={URL.LINK_KAKAO}>카카오톡 문의</Link>를 이용해주세요.</span>
                    </div>
               </article>

                
                <article className="work-step">
                    <div>
                        <div className="step-title">
                            <p>문의 처리 절차</p>
                        </div>
                        <div className="step-detail">
                            <div>
                                <h1>1</h1>
                                <p>
                                    문의내용 접수
                                    <b>친절하게 접수하겠습니다.</b>
                                    <span>콜센터 / 카카오톡문의 / 고객문의에서 접수할 수 있습니다.</span>
                                </p>
                            </div>
                            <div>
                                <h1>2</h1>
                                
                                <p>
                                    담당자 지정
                                    <b>정확하게 담당부서로 전달하겠습니다.</b>
                                    <span>해당 부서로 담당자를 지정하여 처리계획을 수립합니다.</span>
                                </p>
                            </div>
                            <div>
                                <h1>3</h1>
                                
                                <p>
                                    문의처리진행
                                    <b>정성을 다하여 처리하겠습니다.</b>
                                    <span>요청하신 문의사항을 확인하여 문의처리를 진행합니다.</span>
                                </p>
                            </div>
                            <div>
                                <h1>4</h1>
                                
                                <p>
                                    처리결과 안내
                                    <b>신속하게 결과를 안내하겠습니다.</b>
                                    <span>문의사항ㅇ르 처리한 후 처리결과를 안내해 드리겠습니다.<br/>(전화 / SMS / 이메일로 안내)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}
export default CustomerService;
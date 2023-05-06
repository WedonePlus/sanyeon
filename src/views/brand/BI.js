import { useEffect } from "react";
import ImgFetch from "../../fetch/ImgFetch";
import $ from 'jquery'

const BI = () =>{
    useEffect(()=> {
        var $html = $("html");
 
        var page = 1;
    
        var lastPage = $(".bi-section").length;
    
        $html.animate({scrollTop:0},10);

        $(window).on("wheel", function(e){
 
            if($html.is(":animated")) return;
         
            if(e.originalEvent.deltaY > 0){
                if(page== lastPage) return;
                page++;
            }else if(e.originalEvent.deltaY < 0){
                if(page == 1) return;
                page--;
            }
            var posTop = (page-1) * $(window).outerHeight(true);
         
            $html.animate({scrollTop : posTop});
         
        });
    },[])
    return(
        <section id="bi">
            <section className="bi-section bi-video">
                <video muted autoPlay loop>
                    <source src={require('../../img/bi.mp4')} type="video/mp4" />
                    <strong>Your browser does not support the video tag.</strong>
                </video>
                <article className="bi-video-back">
                    <p>DESIGN IDENTITY</p>
                    <ImgFetch imgSource={'logo'}/>
                </article>
            </section>
            
            <section className="bi-section">

                <article className="bi-info">
                    <div className="bi-info-top">
                        <h1>Needs & Goals</h1>
                        <p>산업단지연구에서 추구하는 3가지 키워드인 진심, 경험, 휴식에서 모티브를 받아 산업단지를 대표할 수 있는 신뢰의 정체성을 담아냈습니다.</p>
                    </div>
                    <div className="bi-info-circle">
                        <div>
                            <ImgFetch imgSource={'bi_info_1'} />
                            <h1>진심</h1>
                        </div>
                        <div>
                            <ImgFetch imgSource={'bi_info_2'} />
                            <h1>경험</h1>
                        </div>
                        <div>
                            <ImgFetch imgSource={'bi_info_3'} />
                            <h1>휴식</h1>
                        </div>
                    </div>
                    <ImgFetch imgSource={'bi_info_arrow'} width={'21'}/>
                    <div className="bi-info-sub">
                        <div>
                            <h1>Brand Goal 01</h1>
                            <p>광활한 우주속 찰나의 시간에 존재하는 우리는 그 순간 당신과 함께할 수 있다는 사실에 감사하고 그 시간이 <b>진심</b>일수밖에 없습니다.</p>
                        </div>
                        <div>
                            <h1>Brand Goal 02</h1>
                            <p><b>경험</b>으로부터 시작된 열매는 우리의 노력을 상징합니다.
                            <br></br>우리가 준비한 열매를 맛보는 순간이 당신의 삶에서 가장 달콤한 <b>경험</b>이 됩니다.</p>
                        </div>
                        <div>
                            <h1>Brand Goal 03</h1>
                            <p><b>휴식</b>이야 말로 산업단지연구소가 고객에게 드리고 싶은 가장 큰 선물입니다.<br></br>우리의 노력으로 당신에게 최고의 <b>휴식</b>을 선사하겠습니다.</p>
                        </div>
                    </div>
                </article>

            </section>
            
            <section className="bi-section">
                <article className="bi-logo-type">
                    <h1>Logo Type</h1>
                    <ImgFetch imgSource={'logo_color'} />
                    <ImgFetch imgSource={'bi_logos'}/>
                </article>
            </section>
            
            <section className="bi-section" >
                <article className="bi-image-tab">
                    <div className="sanyeon-blue">
                        <div className="bi-color">
                            <h1>Sanyeon Space Blue</h1>
                            <p>C 89  M 73  Y 26  K 54<br/>R 13  G 31  B 81<br/>#0d1f51</p>
                        </div>
                        <div className="bi-color-image"></div>
                    </div>
                    <div className="sanyeon-red">
                        <div className="bi-color">
                            <h1>Sanyeon Cherry Red</h1>
                            <p>C 2  M 61  Y 40  K 0<br/>R 238  G 133  B 125<br/>#ee857d</p>
                        </div>
                        <div className="bi-color-image"></div>
                    </div>
                    <div className=" sanyeon-green">
                        <div className="bi-color">
                            <h1>Sanyeon Space Blue</h1>
                            <p>C 75  M 6  Y 31  K 1<br/>R 53  G 173  B 183<br/>#35adb7</p>
                        </div>
                        <div className="bi-color-image"></div>
                    </div>
                </article>
            </section>
        </section>
    )
}

export default BI;
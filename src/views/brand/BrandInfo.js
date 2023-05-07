import { useEffect } from 'react';
import $ from 'jquery'

const BrandInfo = () =>
{
    useEffect(()=> {
        var $html = $("html");

        var page = 1;

        var lastPage = 6;
        $(window).on('load', function(e){
            
            $html.animate({scrollTop:0},10);
            $(`.brand-info-visual > div`).eq(0).animate({opacity : 1}, 1000)
            $('.brand-info-sub > h1').animate({opacity :0,top:'80%'}, 3000)
            $('.brand-txt').animate({opacity : 0}, 0)
        })
        $('#brand-info > article').on("wheel", function(e){

            if($html.is(":animated")) return;
        
            if(e.originalEvent.deltaY > 0){
                if(page == lastPage) return;
                if(page == 1) {
                    $(`.brand-info-visual > div`).eq(1).animate({opacity : 1}, 1000)
                    $(`.brand-info-visual > div`).eq(0).animate({opacity : 0}, 500)
                }
                if(page == 2) {
                    $(`.brand-info-visual > div`).eq(1).animate({opacity : 0}, 500)
                    $('.brand-info-sub > h1').animate({opacity :1,top:'50%'}, 2000)
                }
                if(page==3) {
                    
                    $('.brand-info-sub > h1').animate({opacity :0,top:'80%'}, 500)
                    $('.brand-txt').eq(0).animate({opacity : 1}, 2000)
                }
                if(page==4) {
                    $('.brand-txt').eq(0).animate({opacity : 0}, 500)
                    $('.brand-txt').eq(1).animate({opacity : 1}, 2000)
                }
                if(page==5) {
                    $('.brand-txt').eq(1).animate({opacity : 0}, 500)
                    $('.brand-txt').eq(2).animate({opacity : 1}, 2000)
                }
                
                page++;
            }else if(e.originalEvent.deltaY < 0){
                if(page == 1) return;
                if(page == 2) {
                    $(`.brand-info-visual > div`).eq(0).animate({opacity : 1}, 1000)
                    $(`.brand-info-visual > div`).eq(1).animate({opacity : 0}, 500)
                }
                if(page ==3 ) {
                    $(`.brand-info-visual > div`).eq(1).animate({opacity : 1}, 1000)
                    $('.brand-info-sub > h1').animate({opacity :0,top:'80%'}, 2000)
                }
                if(page==4) {
                    $('.brand-info-sub > h1').animate({opacity :1,top:'50%'}, 2000)
                    $('.brand-txt').eq(0).animate({opacity : 0}, 500)
                }
                if(page==5) {
                    $('.brand-txt').eq(0).animate({opacity : 1}, 2000)
                    $('.brand-txt').eq(1).animate({opacity : 0}, 500)
                }
                if(page==6) {
                    $('.brand-txt').eq(1).animate({opacity : 1}, 2000)
                    $('.brand-txt').eq(2).animate({opacity : 0}, 500)
                }
                
    
                page--;
            }
            var posTop = (page-1) * $(window).outerHeight(true);
            $html.animate({scrollTop : posTop}, 1000);
        
        });
        
        // $('.brand-info-visual > div').on('wheel', function(e){
        //     let scrollTop = $(window).scrollTop();
        //     console.log('scroll' + scrollTop); 
        //     console.log('this' + this.offsetTop);
        // });
    },[])

    return(
        <section id="brand-info">
            <article className="brand-info-visual">
                <video muted autoPlay loop>
                    <source src={require('../../img/brand_info.mp4')} type="video/mp4" />
                    <strong>Your browser does not support the video tag.</strong>
                </video>

                <div >
                    <h1>존중은 품격을, <br></br>품격은 삶을 완성합니다.</h1>
                </div>
                <div>
                    <h2>
                        우리는 <br/>
                        좋은 관계의 시작이 <br/>
                        존중에서 비롯된다고 생각합니다.
                    </h2>
                </div>
            </article>
            <article className='brand-info-sub'>
                <h1>
                    산업단지연구소의 존중에는 <br></br>
                    정성, 조화, 매너가 있습니다.
                </h1>
            </article>

            <article className='brand-card'>
                {/* <div className='brand-card-txt'>
                    <div>
                    </div>
                </div> */}
                <article className='brand-card-back'>
                        
                    <div className='brand-txt'>
                        <h1>정성</h1>
                        <p>집 짓는 사람의 정성을 담습니다. 깊은 고민과 앞선 생각으로 감동을 담습니다. 롯데캐슬의 감동은 전 직원의 정성으로 완성됩니다.</p>
                    </div>
                </article>
                <article className='brand-card-back'>
                    <div className='brand-txt'>
                        <h1>조화</h1>
                        <p>사람, 자연, 공간의 조화를 이룹니다. 사람, 자연, 공간, 기술의 조화로운 설계로 삶의 질을 높이고 주거문화의 품격을 실현합니다.</p>
                    </div>

                </article>
                <article className='brand-card-back'>

                    <div className='brand-txt'>
                        <h1>매너</h1>
                        <p>성숙한 문화를 만드는 아름다운 매너가 있습니다. 공감하는 마음과 타인을 바라보는 따뜻한 눈은 '나'와 '우리'를 잇는 아름다운 에티켓입니다.</p>
                    </div>
                </article>
            </article>
        </section>
    )
}

export default BrandInfo;
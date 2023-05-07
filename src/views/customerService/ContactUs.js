import { useEffect } from "react";
import { Link } from "react-router-dom";
import URL from "../../context/URL";
const {kakao} = window;

const ContactUs = () => {
    useEffect(()=> {
        const container = document.getElementById('sanyeon-map');
        const options = {
            center: new kakao.maps.LatLng(37.570047744041084, 126.96944854921864),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
        const markerPosition  = new kakao.maps.LatLng(37.570047744041084, 126.96944854921864); 
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }, [])
    return (
        <main>
            <h1>CONTACT US</h1>
            <address>HOME<span/>고객서비스<span/>Contact us</address>

            <section id="contact-us">
                <h2>산업단지연구소는 항상 당신을 기다리고 있습니다.</h2>
                <article className="contact-map">
                    <div id="sanyeon-map"></div>
                    <p>12344   경기도 화성시 동탄순환대로3길 42-1 4층 숨인터렉티브</p>
                    <p><span>TEL | 1544.1221</span><span>E-mail | soom@sanyeon.com</span><span>FAX | 0303-3440-0507</span></p>
                </article>

                
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

            </section>
            
        </main>
    )
}
export default ContactUs;
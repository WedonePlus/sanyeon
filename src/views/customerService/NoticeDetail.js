import { useNavigate } from "react-router-dom";
import ImgFetch from "../../fetch/ImgFetch";
import URL from "../../context/URL";

const NoticeDetail = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }

    const goList = () => {
        navigate(URL.SERVICE_NOTICE);
    }

    return (
        <main>
        <section id='notice-detail'>
            <article className="notice-title">
                <h1>홈페이지 개인정보 처리방침 변경 안내드립니다.</h1>
                <p>2022.08.25</p>
                <button onClick={()=>goBack()}><ImgFetch imgSource={'notice-view-prev-btn'}/></button>
            </article>

            <article className="notice-content">
                <pre>
                                · 변경일정
                - 사전 공지일 : 2023년 03월 25일
                - 개정 공지일 : 2023년 04월 01일
                본 개인정보 처리방침 변경에 동의하지 않으시는 경우 거부의사 표시(회원탈퇴)를 하실 수 있으며,
                거부의사를 표시하지 않으신 경우 개인정보 처리방침 변경에 동의하신 것으로 간주됩니다.

                &lt; 홈페이지 개인정보 취급방침 변경 전 내용 &gt;

                10. 개인정보에 관한 민원서비스
                    개인정보분쟁조정위원회 (https://kopico.go.kr / 1833-6972)


                &lt; 홈페이지 개인정보 취급방침 변경 내용 &gt;

                10. 개인정보에 관한 민원서비스
                    개인정보분쟁조정위원회 (https://kopico.go.kr / 1833-6972)
                    ※ 온라인 분쟁조정 신청 (https://privacy.go.kr)


                변경 되었음을 안내드립니다.
 ​
                </pre>
            </article>

            <button className="transition-btn" onClick={()=>goList()}>목록으로</button>
        </section> 
        </main>
    )
}
export default NoticeDetail;
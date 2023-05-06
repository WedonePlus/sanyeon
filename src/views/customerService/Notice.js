import URL from "../../context/URL";
import ImgFetch from "../../fetch/ImgFetch";

const Notice = () => {

    const goDetail = (idx) => {
        window.location.href = `${URL.SERVICE_NOTICE}/${idx}`;
    }
    return(
        <main>
            <h1>공지사항</h1>
            <address>HOME<span/>고객센터<span/>공지사항</address>
            
            <section id="notice">
                <div className="search-word">
                    <input type="text" placeholder="검색어를 입력해주세요"></input>
                    <button><ImgFetch imgSource={'search'} width={'18'}></ImgFetch></button>
                </div>

                <article className="notice-list">
                    <div onClick={()=>goDetail(1)}>
                        <h1>홈페이지 개인정보 처리방침 변경 안내드립니다.</h1>
                        <p>· 변경일정 - 사전 공지일 : 2023년 03월 25일 - 개정 공지일 : 2023년 04월 01...</p>
                        <span>2023.03.25</span>
                    </div>
                    <div onClick={()=>goDetail(1)}>
                        <h1>홈페이지 개인정보 처리방침 변경 안내드립니다.</h1>
                        <p>· 변경일정 - 사전 공지일 : 2023년 03월 25일 - 개정 공지일 : 2023년 04월 01...</p>
                        <span>2023.03.25</span>
                    </div>
                    <div onClick={()=>goDetail(1)}>
                        <h1>홈페이지 개인정보 처리방침 변경 안내드립니다.</h1>
                        <p>· 변경일정 - 사전 공지일 : 2023년 03월 25일 - 개정 공지일 : 2023년 04월 01...</p>
                        <span>2023.03.25</span>
                    </div>
                    <div onClick={()=>goDetail(1)}>
                        <h1>홈페이지 개인정보 처리방침 변경 안내드립니다.</h1>
                        <p>· 변경일정 - 사전 공지일 : 2023년 03월 25일 - 개정 공지일 : 2023년 04월 01...</p>
                        <span>2023.03.25</span>
                    </div>
                    <div onClick={()=>goDetail(1)}>
                        <h1>홈페이지 개인정보 처리방침 변경 안내드립니다.</h1>
                        <p>· 변경일정 - 사전 공지일 : 2023년 03월 25일 - 개정 공지일 : 2023년 04월 01...</p>
                        <span>2023.03.25</span>
                    </div>
                    <div onClick={()=>goDetail(1)}>
                        <h1>홈페이지 개인정보 처리방침 변경 안내드립니다.</h1>
                        <p>· 변경일정 - 사전 공지일 : 2023년 03월 25일 - 개정 공지일 : 2023년 04월 01...</p>
                        <span>2023.03.25</span>
                    </div>
                    <div onClick={()=>goDetail(1)}>
                        <h1>홈페이지 개인정보 처리방침 변경 안내드립니다.</h1>
                        <p>· 변경일정 - 사전 공지일 : 2023년 03월 25일 - 개정 공지일 : 2023년 04월 01...</p>
                        <span>2023.03.25</span>
                    </div>
                    <div onClick={()=>goDetail(1)}>
                        <h1>홈페이지 개인정보 처리방침 변경 안내드립니다.</h1>
                        <p>· 변경일정 - 사전 공지일 : 2023년 03월 25일 - 개정 공지일 : 2023년 04월 01...</p>
                        <span>2023.03.25</span>
                    </div>
                    <div onClick={()=>goDetail(1)}>
                        <h1>홈페이지 개인정보 처리방침 변경 안내드립니다.</h1>
                        <p>· 변경일정 - 사전 공지일 : 2023년 03월 25일 - 개정 공지일 : 2023년 04월 01...</p>
                        <span>2023.03.25</span>
                    </div>
                    <div onClick={()=>goDetail(1)}>
                        <h1>홈페이지 개인정보 처리방침 변경 안내드립니다.</h1>
                        <p>· 변경일정 - 사전 공지일 : 2023년 03월 25일 - 개정 공지일 : 2023년 04월 01...</p>
                        <span>2023.03.25</span>
                    </div>
                    <div onClick={()=>goDetail(1)}>
                        <h1>홈페이지 개인정보 처리방침 변경 안내드립니다.</h1>
                        <p>· 변경일정 - 사전 공지일 : 2023년 03월 25일 - 개정 공지일 : 2023년 04월 01...</p>
                        <span>2023.03.25</span>
                    </div>
                    <div onClick={()=>goDetail(1)}>
                        <h1>홈페이지 개인정보 처리방침 변경 안내드립니다.</h1>
                        <p>· 변경일정 - 사전 공지일 : 2023년 03월 25일 - 개정 공지일 : 2023년 04월 01...</p>
                        <span>2023.03.25</span>
                    </div>
                    <div onClick={()=>goDetail(1)}>
                        <h1>홈페이지 개인정보 처리방침 변경 안내드립니다.</h1>
                        <p>· 변경일정 - 사전 공지일 : 2023년 03월 25일 - 개정 공지일 : 2023년 04월 01...</p>
                        <span>2023.03.25</span>
                    </div>
                    <div onClick={()=>goDetail(1)}>
                        <h1>홈페이지 개인정보 처리방침 변경 안내드립니다.</h1>
                        <p>· 변경일정 - 사전 공지일 : 2023년 03월 25일 - 개정 공지일 : 2023년 04월 01...</p>
                        <span>2023.03.25</span>
                    </div>
                </article>            
            </section>
        </main>
    )
}
export default Notice;
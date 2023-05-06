import ImgFetch from "../../fetch/ImgFetch";

const Client = () =>
{
    return(
        <main>
            <h1>클라이언트</h1>
            <address>HOME<span></span>브랜드<span></span>클라이언트</address>
            <section id='client'>
                <p>
                    광고라는 책은 광고주와 대행사가 함께 <br></br>
                    만들어가는 이야기로 채워나가는 것입니다.
                </p>
                <ImgFetch imgSource={'client'}/>
            </section>
        </main>
    )
}

export default Client;
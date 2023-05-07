import { useState } from "react";
import CODE from "../../context/CODE";
import ImgFetch from "../../fetch/ImgFetch";

const Portfolio = () =>
{

    const [category, setCategory] = useState(CODE.CATEGORY_ALL);

    return(
        <main>
            <h1>포트폴리오</h1>
            <address>HOME<span/>브랜드<span/>포트폴리오</address>

            <section id="portfolio">
                <ul className="portfolio-category">
                    <li className={category==CODE.CATEGORY_ALL ? 'active' : ''} onClick={()=>setCategory(CODE.CATEGORY_ALL)}>{CODE.CATEGORY_ALL}</li>
                    <li className={category==CODE.CATEGORY_ESSAY ? 'active' : ''} onClick={()=>setCategory(CODE.CATEGORY_ESSAY)}>{CODE.CATEGORY_ESSAY}</li>
                    <li className={category==CODE.CATEOGRY_INTERVIEW ? 'active' : ''} onClick={()=>setCategory(CODE.CATEOGRY_INTERVIEW)}>{CODE.CATEOGRY_INTERVIEW}</li>
                    <li className={category==CODE.CATEGORY_TREND ? 'active' : ''} onClick={()=>setCategory(CODE.CATEGORY_TREND)}>{CODE.CATEGORY_TREND}</li>
                    <li className={category==CODE.CATEOGRY_CASTLETOUR ? 'active' : ''} onClick={()=>setCategory(CODE.CATEOGRY_CASTLETOUR)}>{CODE.CATEOGRY_CASTLETOUR}</li>
                </ul>

                <article className="port-list">
                    <div className="port-box">
                        <div className="port-img"><ImgFetch imgSource={'portfolio'}/></div>
                        <h2><span>ESSSAY.</span>2022.12</h2>
                        <h1>품위를 높이는 반짝이는 온기</h1>
                        <p>금은 태양의 조각이 아닐까 생각했다. 태양은 만물을 살리는 에너지를 가진 존재이고 금속은 그런 태양의 온기를</p>
                    </div>
                    <div className="port-box">
                        <div className="port-img"><ImgFetch imgSource={'portfolio'}/></div>
                        <h2><span>ESSSAY.</span>2022.12</h2>
                        <h1>품위를 높이는 반짝이는 온기</h1>
                        <p>금은 태양의 조각이 아닐까 생각했다. 태양은 만물을 살리는 에너지를 가진 존재이고 금속은 그런 태양의 온기를</p>
                    </div>
                    <div className="port-box">
                        <div className="port-img"><ImgFetch imgSource={'portfolio'}/></div>
                        <h2><span>ESSSAY.</span>2022.12</h2>
                        <h1>품위를 높이는 반짝이는 온기</h1>
                        <p>금은 태양의 조각이 아닐까 생각했다. 태양은 만물을 살리는 에너지를 가진 존재이고 금속은 그런 태양의 온기를</p>
                    </div>
                    <div className="port-box">
                        <div className="port-img"><ImgFetch imgSource={'portfolio'}/></div>
                        <h2><span>ESSSAY.</span>2022.12</h2>
                        <h1>품위를 높이는 반짝이는 온기</h1>
                        <p>금은 태양의 조각이 아닐까 생각했다. 태양은 만물을 살리는 에너지를 가진 존재이고 금속은 그런 태양의 온기를</p>
                    </div>
                    <div className="port-box">
                        <div className="port-img"><ImgFetch imgSource={'portfolio'}/></div>
                        <h2><span>ESSSAY.</span>2022.12</h2>
                        <h1>품위를 높이는 반짝이는 온기</h1>
                        <p>금은 태양의 조각이 아닐까 생각했다. 태양은 만물을 살리는 에너지를 가진 존재이고 금속은 그런 태양의 온기를</p>
                    </div>
                    <div className="port-box">
                        <div className="port-img"><ImgFetch imgSource={'portfolio'}/></div>
                        <h2><span>ESSSAY.</span>2022.12</h2>
                        <h1>품위를 높이는 반짝이는 온기</h1>
                        <p>금은 태양의 조각이 아닐까 생각했다. 태양은 만물을 살리는 에너지를 가진 존재이고 금속은 그런 태양의 온기를</p>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Portfolio;
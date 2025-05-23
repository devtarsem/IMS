import { Link } from "react-router";
import './../styles/mark.css'
import './../utils/util.css'
import fea1 from './../icon/fea1.png'
import fea2 from './../icon/fea2.png'
import fea3 from './../icon/fea3.png'
import fea4 from './../icon/fea4.png'
import './../styles/media.css'


function Marketing(){
    return (
        <main className="mardsl">
            <header className="header">
                <nav className="navigation flex flex-1 pad16">
                    <h1 className="head">SecMore - way to security</h1>
                    <div className="links marklinks flex flex-2 gap32">
                        <a href='#fea' className="navlink">Features</a>
                        <Link to='/' className="navlink">Try now</Link>
                    </div>
                </nav>

                <div className="markhomedis grid grid-2-col gap16">
                    <div className="content__ flex flex-2 flex-dir gap16">
                        <h2 className="head2 bighad">The trouble of sharing secure files <br/> is now solved with SecMore.</h2>
                        <Link to='/dashboard' className="link btnwhite__">Try it now!</Link>
                    </div>
                </div>
            </header>

            <div id='fea' className="features pad16 flex flex-dir gap16">
                <h2 className="head2 head2_">Our features</h2>
                <div className="flex flex-dir gap32">
                    <div className="feagrids grid grid-2-col gap16">
                        <div className="contentoffea flex flex-2 pad16 flex-dir gap16">
                            <p className="tag">01</p>
                            <p className="des">We have full organised dashboard for you, in which you can generate as many secret codes as you want and send them from the provided links, you will get double layer of security so that you data must be safe and secure.</p>
                        </div>
                        <div className="imgfea pad16">
                            <img src={fea1} alt='features' className='feature'/>
                        </div>
                    </div>
                    <hr/>
                    <div className="feagrids grid grid-2-col gap16">
                        <div className="imgfea pad16">
                            <img src={fea2} alt='features' className='feature'/>
                        </div>
                        <div className="contentoffea flex flex-2 pad16 flex-dir gap16">
                            <p className="tag">02</p>
                            <p className="des">Our dashboard will gives you 2 great feature one is you can send one time visible json data to anyone  through our provided link, once the receiver sees the data he/she can't be able to see it again and second you can send password protected files through our provided links.</p>
                        </div>
                    </div>
                    <hr/>

                    <div className="feagrids grid grid-2-col gap16">
                        <div className="contentoffea flex flex-2 pad16 flex-dir gap16">
                            <p className="tag">03</p>
                            <p className="des">You get complete history saved on the secure cloud in our dashboard on which you can access you data any time, and guess what this tab is double proytected, second layer must be passed before to get the data access.</p>
                        </div>
                        <div className="imgfea pad16">
                            <img src={fea3} alt='features' className='feature'/>
                        </div>
                    </div>
                    <hr/>

                    <div className="feagrids grid grid-2-col gap16">
                        <div className="imgfea pad16">
                            <img src={fea4} alt='features' className='feature'/>
                        </div>
                        <div className="contentoffea flex flex-2 pad16 flex-dir gap16">
                            <p className="tag">04</p>
                            <p className="des">You can see your private data at any time as you want and change you essential credentials as well.</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer pad96">
                <h2 className="whitegead">SecMore</h2>
            </footer>
        </main>
    )
}

export default Marketing;
import VideoScreen from "/images/VideoScreen.png"

const Cta = () =>{
    const list = [
            '30 days free trial',
            'Cancel any time',
            'Access to all features',
            'Personalized onboarding'
        ].map((item, index) =>{
            return (
              <p key={index}>
                <span class="material-symbols-outlined">check</span>
                {item}
              </p>
            );
        })

    return(
        <section className="section--5">
            <div className="section--5_left">
                <h2>Ready to clear the path to <br />perfect communication</h2>

                <div className="list">
                    {list}
                </div>

                <div className="cta">
                    <a href="#">Talk to sales</a>
                    <a href="#">Start your free trial</a>
                </div>
            </div>

            <img src={VideoScreen} alt="" />
        </section>
    )
}

export default Cta
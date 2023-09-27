import ImageGrid from "/images/Rectangle 1.png"
import Arrow from "/images/Hand-drawn arrow.png"

const Features = () =>{
    const features = [
      {
        icon: "videocam",
        title: "Crystal-clear HD video",
        body: "No more pixelation or blurriness just stunning, lifelike clarity that brings your team closer in meetings.",
      },
      {
        icon: "graphic_eq",
        title: "Noise-cancelling audio",
        body: "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
      },
      {
        icon: "calendar_today",
        title: "Scheduling made easy",
        body: "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
      },
      {
        icon: "lock_open",
        title: "Bank-grade security",
        body: "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
      },
    ].map((feature, index) =>{
        return(
            <div className="feature" key={index}>
                <span className="material-symbols-outlined">
                    {feature.icon}
                </span>

                <h3>
                    {feature.title}
                </h3>

                <p>
                    {feature.body}
                </p>
            </div>
        )
    })

    return (
      <section className="section--2">
        <div className="section--2_top">
          <h4>The clearlink advantage</h4>

          <h2>Why choose ClearLink?</h2>

          <p>
            In a world where connection is everything, ClearLink takes the lead.
            Our <br /> cutting-edge video conferencing app offers:
          </p>

          <img src={Arrow} alt="" />
        </div>

        <div className="section--2_bottom">
            <div className="features">
                {features}
            </div>

            <img src={ImageGrid} alt="" />
        </div>
      </section>
    );
}

export default Features
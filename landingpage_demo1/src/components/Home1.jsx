import style from "../style/home1.module.css";
import bgimg from "../assets/bgimg.png";
export default function Home1() {
  return (
    <>
      <div className={style.home1body}>
        <div className={style.element1}></div>
        <div className={style.heading}>
          <h2>EMPOWERING THE DIGITAL ERA:</h2>
          <h2>DECENTRALIZING ENTERTAINTMENT</h2>
        </div>
        <div className={style.lowerheading}>
          <p>
            Join the worlds first DePIN: Revolutionizing content Streaming with
            faster,Safer
          </p>
          <p>and Cheaper Access</p>
        </div>
        <div className={style.btn}>
          <button>Comming soon</button>
        </div>
        <div className={style.bgimg}>
          <img src={bgimg} alt="Background image" />
        </div>
        <div className={style.databoxs}>
          <div className={style.box}>
            <div className={style.starelement}>
              <h2>No. of Node Operators</h2>
              <svg
                width="47"
                height="48"
                viewBox="0 0 47 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5 1.5V46.5"
                  stroke="url(#paint0_linear_1_5410)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M1 24L46 24"
                  stroke="url(#paint1_linear_1_5410)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_5410"
                    x1="24"
                    y1="1.5"
                    x2="24"
                    y2="46.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0" />
                    <stop offset="0.5" stop-color="#1E1E1E" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_5410"
                    x1="1"
                    y1="24"
                    x2="46"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0" />
                    <stop offset="0.505" stop-color="#1E1E1E" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1>2000</h1>
          </div>
          <div className={style.box}>
            <div className={style.starelement}>
              <h2>
                Data Transferred in TB{" "}
                <span style={{ fontSize: "15px" }}>(last 30 days)</span>
              </h2>
              <svg
                width="47"
                height="48"
                viewBox="0 0 47 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5 1.5V46.5"
                  stroke="url(#paint0_linear_1_5410)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M1 24L46 24"
                  stroke="url(#paint1_linear_1_5410)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_5410"
                    x1="24"
                    y1="1.5"
                    x2="24"
                    y2="46.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0" />
                    <stop offset="0.5" stop-color="#1E1E1E" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_5410"
                    x1="1"
                    y1="24"
                    x2="46"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0" />
                    <stop offset="0.505" stop-color="#1E1E1E" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1>12,000</h1>
          </div>
        </div>
      </div>
    </>
  );
}

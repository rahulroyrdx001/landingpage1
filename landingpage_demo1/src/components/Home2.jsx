import style from "../style/home2.module.css";
import home2 from "../assets/home2.png";
export default function Home2() {
  return (
    <>
      <div className={style.home2body}>
        <div className={style.headline}>
          <h1>FanCloud CDN network revolutionizes video infrastructure</h1>
          <h1>with community-driven Innovation</h1>
        </div>
        <div className={style.lowerheadline}>
          <p>
            FanCloud pioneers a new era of connectivity with its decentralised
            content delivery network (dCDN),
          </p>
          <p>
            leveraging a global network of community-powered nodes. By
            harnessing a decentralised{" "}
          </p>
          <p>
            architecture, dCDN drastically reduces data transfer and compute
            costs while enhancing load time.
          </p>
          <p>
            Join FanCloud’s dCDN network and experience the future of seamless,
            secure and community-{" "}
          </p>
          <p>driven consumption</p>
        </div>
        <div className={style.home2}>
          <img
            src={home2}
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            alt="Background image"
          />
        </div>
        <div className={style.databox2}>
          <div className={style.box1}>
            <h1>Content Nodes</h1>
            <p>Content Nodes, Earn rewards for supplying</p>
            <p>their GPU, Storage and bandwidth for</p>
            <p>dCDN</p>
          </div>
          <div className={style.box2}>
            <h1>Orchestrators</h1>
            <p>Orchestrators will be responsible for</p>
            <p>connecting the client with the content</p>
            <p>node for seamless streaming. Traffic </p>
            <p>distribution will be based on multiple</p>
            <p>factors like job type, performance</p>
          </div>
          <div className={style.box3}>
            <h1>Validators</h1>
            <p>Validators will be responsible for validating</p>
            <p>the execution of dCDN Network. Validators</p>
            <p>will earn rewards from Staking and earn a</p>
            <p>cut on the executions validated.</p>
          </div>
        </div>
      </div>
    </>
  );
}

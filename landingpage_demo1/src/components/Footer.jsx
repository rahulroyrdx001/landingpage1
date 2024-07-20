import style from "../style/footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={style.footerbody}>
        <div className={style.textarea}>
          <h3>The transition CDN-dCDN</h3>
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
            costs while enhancing load time
          </p>
          <p>
            Join FanCloud’s dCDN network and experience the future of seamless,
            secure and community-
          </p>
          <p>driven consumption</p>
        </div>
      </div>
    </>
  );
}

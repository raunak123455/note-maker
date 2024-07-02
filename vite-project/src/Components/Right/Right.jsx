import Styles from "./Right.module.css";

const Right = () => {
  return (
    <>
      <div className={Styles.right}>
        <div className={Styles.image}>
          <img
            src="assets/Default.svg"
            alt="Default"
            style={{ width: "50vw" }}
          />
          <div>
            <div className={Styles.imageText1}>Pocket Notes</div>
            <div className={Styles.imageText2}>
              Send and receive messages without keeping your phone online.
              <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </div>
          </div>
          <div className={Styles.endToEnd}>
            <img src="assets/lock.svg" alt="Imagee" /> end-to-end encrypted
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;

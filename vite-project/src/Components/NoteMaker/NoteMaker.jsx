import Style from "./NoteMaker.module.css";
import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Notes from "../Notes/Notes";
import Left from "../Left/Left";
import Right from "../Right/Right";

const NoteMaker = () => {
  const [open, setOpen] = useState(false);
  const [colorChoice, setColorChoice] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [colorgroupChoice, setColorgroupChoice] = useState(false);

  const [userIdClicked, setUserIdClicked] = useState(0);

  const handleUserIdClicked = (ID) => {
    setUserIdClicked(ID);
  };

  const [createGroup, setCreateGroup] = useState({
    id: 0,
    groupName: "",
    color: "",
    create: false,
  });

  const { id, groupName, color, create } = createGroup;

  const SubmissionValid = () => {
    if (colorChoice === true && groupName !== "") {
      return true;
    } else {
      return false;
    }
  };

  const handleClick = (open) => {
    setOpen(open);
  };

  const handleNotesChange = (e) => {
    setCreateGroup({ ...createGroup, groupName: e.target.value });
    setColorgroupChoice(true);
  };

  const handleSubmit = (e) => {
    console.log(SubmissionValid + "Valid");
    if (SubmissionValid() === true) {
      setCreateGroup({ ...createGroup, create: true });

      setOpen(false);
    }
  };

  const FirstColor = () => {
    setCreateGroup({ ...createGroup, color: "#B38BFA" });
    setColorChoice(true);
  };

  const SecondColor = () => {
    setCreateGroup({ ...createGroup, color: "#FF79F2" });
    setColorChoice(true);
  };

  const ThirdColor = () => {
    setCreateGroup({ ...createGroup, color: "#43E6FC" });
    setColorChoice(true);
  };

  const FourthColor = () => {
    setCreateGroup({ ...createGroup, color: "#F19576" });
    setColorChoice(true);
  };

  const FifthColor = () => {
    setCreateGroup({ ...createGroup, color: "#0047FF" });
    setColorChoice(true);
  };

  const SixthColor = () => {
    setCreateGroup({ ...createGroup, color: "#6691FF" });
    setColorChoice(true);
  };

  return (
    <>
      <div className={Style.NoteMaker}>
        {/*  desktop  */}
        {SubmissionValid() ? (
          <div className={Style.PC}>
            <Left
              handleClick={handleClick}
              handleUserIdClicked={handleUserIdClicked}
              id={id}
              groupName={groupName}
              color={color}
              create={create}
            />
          </div>
        ) : (
          <div className={Style.PC}>
            <Left
              handleClick={handleClick}
              handleUserIdClicked={handleUserIdClicked}
            />
          </div>
        )}
        {userIdClicked > 0 ? (
          <div className={Style.PC}>
            <Notes userIdClicked={userIdClicked} />
          </div>
        ) : (
          <div className={Style.PC}>
            <Right />
          </div>
        )}
        {/* mobile  */}
        {SubmissionValid() && isVisible ? (
          <div className={Style.Mobile}>
            <Left
              handleClick={handleClick}
              handleUserIdClicked={handleUserIdClicked}
              id={id}
              groupName={groupName}
              color={color}
              create={create}
            />
          </div>
        ) : isVisible ? (
          <div className={Style.Mobile} onClick={() => setIsVisible(false)}>
            <Left
              handleClick={handleClick}
              handleUserIdClicked={handleUserIdClicked}
            />
            {console.log(isVisible)}
          </div>
        ) : null}
        {userIdClicked > 0 ? (
          <div className={Style.Mobile}>
            <Notes userIdClicked={userIdClicked} />
          </div>
        ) : (
          open > 0 && (
            <div className={Style.Mobile}>
              <Left
                handleClick={handleClick}
                handleUserIdClicked={handleUserIdClicked}
                id={id}
                groupName={groupName}
                color={color}
                create={create}
              />
            </div>
          )
        )}
      </div>
      {}
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          window.location.reload();
        }}
        closeOnOverlayClick={true}
        center={true}
        showCloseIcon={false}
      >
        <h2 className={Style.Text1}>Create New Notes group</h2>
        <form action="">
          <p>
            <label htmlFor="GroupName">
              <span className={Style.Text2}> Group Name</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <input
                type="text"
                placeholder="   Enter your group name...."
                className={Style.placeHold}
                onChange={(e) => handleNotesChange(e)}
              />
              {colorgroupChoice === false && groupName === "" ? (
                <p style={{ color: "red" }}>Please Enter Group Name!</p>
              ) : null}
            </label>
          </p>
          <p className={Style.ColorPicker}>
            <label htmlFor="Choosecolour">
              <span className={Style.Text2}>Choose colour</span>
              <span className="Style.ChoosecolourBreak">
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={Style.color1}
                  onClick={FirstColor}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={Style.color2}
                  onClick={SecondColor}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={Style.color3}
                  onClick={ThirdColor}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={Style.color4}
                  onClick={FourthColor}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={Style.color5}
                  onClick={FifthColor}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={Style.color6}
                  onClick={SixthColor}
                ></button>
                &nbsp;&nbsp;
              </span>
            </label>
          </p>
          {colorChoice === false ? (
            <p style={{ color: "red" }}>Please Choose The Color!</p>
          ) : null}
          <input
            type="submit"
            value="Create"
            className={Style.create}
            onClick={handleSubmit}
          />
        </form>
      </Modal>
    </>
  );
};

export default NoteMaker;

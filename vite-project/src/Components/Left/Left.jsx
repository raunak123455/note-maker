import AllNotes from "../AllNotes/AllNotes";
import Styles from "./Left.module.css";
import React, { useState, useEffect } from "react";

const Left = ({
  handleClick,
  handleUserIdClicked,
  id,
  groupName,
  color,
  create,
}) => {
  const [clickedButton, setClickedButton] = useState(null);

  const storedDataString = localStorage.getItem("groupNamesData");
  const storedData = JSON.parse(storedDataString) || [];
  const newId =
    storedData.length > 0 ? storedData[storedData.length - 1].id + 1 : 1;

  const newData = {
    id: newId,
    groupName: groupName,
    color: color,
    create: create,
  };

  const submitCheck = () => {
    if (groupName !== "" && create === true) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (submitCheck()) {
      storedData.push(newData);
      localStorage.setItem("groupNamesData", JSON.stringify(storedData));
    }
  }, [groupName, create, newData]);

  const handleButtonClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  const buttonStyle = (buttonId) => {
    return {
      backgroundColor: clickedButton === buttonId ? "#F7ECDC" : "transparent",
      color: "white",
      minWidth: "100%",
      minHeight: "61px",
      display: "flex",
      justifyContent: "flex-start",
      borderRadius: "2rem 0rem 0rem 2rem",
    };
  };

  return (
    <div className={Styles.left}>
      <h1>Pocket Notes</h1>
      <div className={Styles.center}>
        <button
          className={Styles.createNotesGroup}
          onClick={() => handleClick(true)}
        >
          {" "}
          <img src="assets/+.svg" alt="+" style={{ minWidth: "21px" }} />
        </button>
        <div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column-reverse",
            }}
          >
            {storedData.map((group) =>
              group.create ? (
                <div className={Styles.notesGroupSlected}>
                  <span
                    className={Styles.act}
                    style={buttonStyle(group.id)}
                    onClick={(_) => {
                      handleUserIdClicked(group.id);
                      handleButtonClick(group.id);
                    }}
                  >
                    <AllNotes
                      key={group.id}
                      groupName={group.groupName}
                      color={group.color}
                      buttonColorId={group.id}
                    />
                  </span>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;

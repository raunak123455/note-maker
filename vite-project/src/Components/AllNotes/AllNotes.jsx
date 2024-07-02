import Style from "./AllNotes.module.css";
import React from "react";

const AllNotes = ({ id, groupName, color, buttonColorId }) => {
  const imageText = groupName.length;
  const NotesImage = {
    backgroundColor: `${color}`,
    borderRadius: "50%",
    minWidth: "61px",
    minHeight: "61px",
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: "1.50719rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "97.688%",
    letterSpacing: "0.03013rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
  };

  return (
    <>
      {buttonColorId === id ? (
        <div className={Style.AllNotes} style={{ backgroundColor: "#F7ECDC" }}>
          <div style={NotesImage}>
            {groupName[0]}
            {groupName[imageText - 1]}
          </div>
          <div className={Style.NotesName}>{groupName}</div>
        </div>
      ) : (
        <div className={Style.AllNotes}>
          <div style={NotesImage}>
            {groupName[0]}
            {groupName[imageText - 1]}
          </div>
          <div className={Style.NotesName}>{groupName}</div>
        </div>
      )}
    </>
  );
};

export default AllNotes;

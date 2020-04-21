import React, { useState, useEffect } from "react";

export const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    // if (props.profileUserId === props.authorizedUserId)

    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const statusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <>
      {!editMode ? (
        <div className="">
          <span onDoubleClick={activateEditMode}>
            {props.status || "-----"}
          </span>
        </div>
      ) : (
        <div className="">
          <input
            onChange={statusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            type="text"
            value={status}
          />
        </div>
      )}
    </>
  );
};

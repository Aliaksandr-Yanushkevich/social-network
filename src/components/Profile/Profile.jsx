import React from "react";
import s from "./Profile.module.scss";
import UserInfo from "./UserInfo/UserInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";
import Loader from "react-loader-spinner";
import ContactBlock from "./ContactBlock/ContactBlock";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";

const Profile = (props) => {
  if (!props.profile) {
    return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
  }

  return (
    <div className={s.content}>
      <ContactBlock
        photo={props.profile.photos.large}
        contacts={props.profile.contacts}
      />
      <div className={s.wideColumn}>
        <div className={s.info}>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
          <UserInfo
            fullName={props.profile.fullName}
            aboutMe={props.profile.fullName}
            lookingForAJob={props.profile.lookingForAJob}
            lookingForAJobDescription={props.profile.lookingForAJobDescription}
          />
          <MyPostsContainer
            avatar={props.profile.photos.small}
            fullName={props.profile.fullName} // poka zaglushka
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;

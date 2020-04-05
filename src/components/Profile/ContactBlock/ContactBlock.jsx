import React from "react";
import avatar from "../avatar.png";
import s from "./ContactBlock.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faVk,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const ContactBlock = ({ photo, contacts }) => {
  console.log(contacts);
  return (
    <div className={s.narrowColumn}>
      <div className={s.contactBlock}>
        {photo ? (
          <img src={photo} alt="My avatar" />
        ) : (
          <img src={avatar} alt="My avatar" />
        )}
      </div>
      <div className={s.contacts}>
        <div className={s.contactItem}>
          <FontAwesomeIcon icon={faFacebook} className={s.icon}/>
          {contacts.facebook ? contacts.facebook : "-"}
        </div>
        <div className={s.contactItem}>
          <FontAwesomeIcon icon={faTwitter} className={s.icon}/>
          {contacts.twitter ? contacts.twitter : "-"}
        </div>
        <div className={s.contactItem}>
          <FontAwesomeIcon icon={faInstagram} className={s.icon}/>
          {contacts.instagram ? contacts.instagram : "-"}
        </div>
        <div className={s.contactItem}>
          <FontAwesomeIcon icon={faVk} className={s.icon}/>
          {contacts.vk ? contacts.vk : "-"}
        </div>
        <div className={s.contactItem}>
        <FontAwesomeIcon icon={faYoutube} className={s.icon}/>
          {contacts.youtube ? contacts.youtube : "-"}</div>
        <div className={s.contactItem}>
          <FontAwesomeIcon icon={faGithub} className={s.icon}/>
          {contacts.github ? contacts.github : "-"}
        </div>
        <div className={s.contactItem}>
        <FontAwesomeIcon icon={faGlobe} className={s.icon}/>
          {contacts.website ? contacts.website : "-"}</div>
        <div className={s.contactItem}>
        <FontAwesomeIcon icon={faLink} className={s.icon}/>
          {contacts.mainLink ? contacts.mainLink : "-"}</div>
      </div>
    </div>
  );
};

export default ContactBlock;

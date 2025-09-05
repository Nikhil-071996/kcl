import React from "react";
import facebookIcon from '../../assets/images/social_media/fb.svg'
import instagramIcon from '../../assets/images/social_media/insta.svg'
import youtubeIcon from '../../assets/images/social_media/youtube.svg'
import linkedInIcon from '../../assets/images/social_media/linkedin.svg'
import xIcon from '../../assets/images/social_media/x.svg'
import './share-menu.css'

const ShareMenu = ({ url, title, onClose }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
  };

  const handleCopy = async () => {
    
    try {
      await navigator.clipboard.writeText(url);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="share-menu-bar">
      <span className="share-label">Share</span>

      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="share-icon facebook"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={facebookIcon} alt="Facebook" />
      </a>

      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="share-icon whatsapp"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={instagramIcon} alt="Instagram" />
      </a>

      <button onClick={(e) => {
        e.stopPropagation();
        handleCopy()
      }} className="share-icon copy">
        copy link
      </button>

      <button onClick={(e) => {
        e.stopPropagation();
        onClose()
      }} className="share-icon close">
        X
      </button>
    </div>
  );
};

export default ShareMenu;

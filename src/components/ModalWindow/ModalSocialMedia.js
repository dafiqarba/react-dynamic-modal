function ModalSocialMedia(props) {
  return (
    <div className="card-info__socials">
      <div className="card-info__social">
        <a className="links" href={"https://github.com/" + props.git}>
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="card__right-social">
        <a className="links" href={"https://instagram.com/" + props.insta}>
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default ModalSocialMedia;

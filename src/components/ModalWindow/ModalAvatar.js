function ModalAvatar(props) {
  return (
    <div className="card-avatar">
      <div className="card-avatar__box">
        <img alt="avatar" className="card-avatar__img" src={props.avatar} />
      </div>
    </div>
  );
}

export default ModalAvatar;

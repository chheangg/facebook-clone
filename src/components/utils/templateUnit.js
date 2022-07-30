import Image from "../utils/Image";

function templateUnit (Header, type) {
  return ({discussion, user}) => {
    const checkSide = () => user ? discussion.by === user.name ? 'left' : 'right' : null;
    return (
      <div className={`${type}-container ${checkSide()}`} data-testid={user ? checkSide() : type}>
        <Header user={discussion.by}/>
        {discussion.content ? <div>{discussion.content}</div> : null}
        {discussion.img ? <Image img={discussion.img} alt={`${type} pic`} /> : null}
      </div>
    )
  }
}

export default templateUnit;
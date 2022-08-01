import Image from "../utils/Image";

function templateUnit (Header, type) {
  return ({discussion}) => {
    return (
      <div className={`${type}-container`} data-testid={type}>
        {Header ? <Header user={discussion.by}/> : null }
        {discussion.content ? <div>{discussion.content}</div> : null}
        {discussion.img ? <Image img={discussion.img} alt={`${type} pic`} /> : null}
      </div>
    )
  }
}

export default templateUnit;
import "../Components/SinglePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/phottos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Amanda</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A sed
          consectetur sint, aut qui officia hic repudiandae earum. Eligendi at
          dolor quo! Quod neque, reprehenderit distinctio similique minus veniam
          libero. Sit, harum quos ea explicabo ipsum qui inventore facilis
          repellendus at, delectus est recusandae a nisi quisquam alias
          aspernatur officia ipsam quod aliquam, asperiores autem optio incidunt
          commodi necessitatibus! Odio? Dignissimos, cupiditate nesciunt?
          Delectus a, sint ad expedita distinctio veritatis ut repudiandae
          natus, eos placeat doloribus officiis est accusamus laboriosam
          assumenda dolor? Enim molestias, aspernatur unde ea id at aperiam!
          Esse nulla repellat ducimus, blanditiis dolore nostrum quis aliquid
          quod animi libero tenetur commodi voluptate praesentium. Mollitia
          aspernatur eaque sint placeat cum? Et, amet eius! Obcaecati velit id
          quae quis.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;

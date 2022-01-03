import "../Components/Post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          animi quaerat ipsa voluptas vero dolor unde fugiat officiis, doloribus
          sunt veniam expedita incidunt odit molestiae! Harum quae earum
          praesentium doloremque.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto
        tempore, ipsum quos, quam eius aspernatur eveniet perferendis voluptate
        assumenda labore inventore deleniti nostrum natus corrupti vitae, fuga
        recusandae totam. Quo magnam ea magni distinctio quasi iusto aspernatur
        eaque. Quae deleniti, dignissimos possimus cupiditate eum fuga quod
        explicabo id debitis distinctio, labore asperiores soluta! Dolorum
        itaque ducimus laboriosam ullam architecto.
      </p>
    </div>
  );
}

export default Post;

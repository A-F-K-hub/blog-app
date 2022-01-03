import "../Components/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTtile">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, non.
          Ipsam repellendus reprehenderit vero. Quos eligendi necessitatibus
          asperiores voluptatem sed. Unde recusandae minus eaque doloremque,
          quod quae ab temporibus modi. Ipsa commodi assumenda reiciendis
          cumque, numquam id temporibus soluta repudiandae iste, totam optio
          odio ratione tenetur facere. Aliquam placeat hic soluta cupiditate
          dicta a natus, error sequi ex, sit sint?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTtile">CATERGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Healing</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTtile">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

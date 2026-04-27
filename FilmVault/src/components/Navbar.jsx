function Navbar() {
  return (
    <div>
      <ul>
        <img
          width={100}
          src="https://th.bing.com/th/id/OIP.qUE__mVadLREI3ZYXJvDggAAAA?w=190&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Film Cube"
        />
        <li>Home</li>
        <li>Movies</li>
        <li>Favorites</li>
        <li>About</li>
        <li>
          <input type="text" placeholder="Searhc movies" />
        </li>
        <li>
          <button> + Add movies</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
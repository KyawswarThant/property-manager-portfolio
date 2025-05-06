export default function Footer() {
  return (
    <footer className="bg-[#708090]">
      {/* <nav>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </nav> */}
      <p className="text-center py-5">
        &copy; {new Date().getFullYear()} Thant@kiinteistönhuolto. All rights reserved.
      </p>
    </footer>
  );
};
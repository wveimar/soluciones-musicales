import Navbar from "../nav-bar/Navbar";


const Layout = ({ children }) => {
  return (
    <div>
      {/* <Seo /> */}
      <header>
        <Navbar />
      </header>
      <main style={{ paddingTop: "100px" }}>{children}</main>
    </div>
  );
};
export default Layout;

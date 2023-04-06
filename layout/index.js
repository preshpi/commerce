import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      {/* your header code */}
      <main>{children}</main>
      <Footer 
      />
    </div>
  );
};

export default Layout;

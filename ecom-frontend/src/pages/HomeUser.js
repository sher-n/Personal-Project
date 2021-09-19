import Body from "../components/body/Body";
import NavbarUser from "../components/navbar/navbarUser";


const HomeUser = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <NavbarUser props={props} setRole={props.setRole} />
      <Body />
    </div>
  );
};

export default HomeUser;

import PropsType from "prop-types";

export const FirtsApp = ({ title }) => {

  return (
    <>
      {/* <h1>{ newMessage }</h1> */}
      <h3>{ title }</h3>
      {/* <code>{ JSON.stringify( menssage ) }</code>
      <h4>{ menssage.msg }</h4> */}
      <p>texto de sub</p>
    </>
  );
}

FirtsApp.propTypes = {
    title: PropsType.string.isRequired
}

FirtsApp.defaultProps = {
    title: "Sin titulo"
}
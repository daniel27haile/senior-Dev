

type propsTypes = {
    name : string,
    role : string
}
function PropsExample({name, role}: propsTypes){


    return (
      <>
        <h1>{name}</h1>
        <h1>{role}</h1>
      </>
    );
}

export default PropsExample;

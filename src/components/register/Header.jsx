import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const { successMsg } = props;
  const navigate = useNavigate();

  return (
    <div>
      {successMsg ? (
        <div className="flex flex-col items-center gap-3">
          <p>REGISTRO COMPLETADO CON ÉXITO</p>
          <button
            className="bg-[url('/img/fondoWeb.svg')] bg-cover text-white py-2 px-4 rounded-md "
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </button>
        </div>
      ) : (
        <h1 className="text-2xl text-center font-bold">REGISTRO</h1>
      )}
    </div>
  );
};

export default Header;

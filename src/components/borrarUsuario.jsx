import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BorrarUsuario = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const borrarUsuario = async (event) => {
    try {
      event.stopPropagation();

      // AÑADIR UNA VENTANA DE CONFIRMACIÓN DE ELIMINACIÓN DE
      // USUARIO PARA ASEGURAR QUE QUIERES BORRAR

      const result = await Swal.fire({
        title: "Estás seguro?",
        text: "Se eliminarán todos los datos del usuario!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
      });

      if (result.isConfirmed) {
        const user_Id = 7;
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6IkdhYnJpZWwiLCJpYXQiOjE3MDYxNzgxMzksImV4cCI6MTcwNjM1MDkzOX0.Fro7u3o8XRuNO8RVxcK4sLq2qi5hrRKg74zMEVQxq7E";

        const res = await fetch(
          `${import.meta.env.VITE_REACT_HOST}/user/${user_Id}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json", // Corregir la tipografía de 'application'
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.ok) {
          const data = await res.json();
          Swal.fire({
            title: "Usuario borrado!",
            text: "Se ha eliminado este usuario",
            icon: "success",
          });
          navigate("/");
          console.log(data);
          setMessage("Usuario borrado correctamente.");
        } else {
          setMessage("No se puede eliminar el usuario.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button
        className="bg-red-500 text-white rounded-md px-2 py-1"
        onClick={borrarUsuario}
      >
        Eliminar Usuario
      </button>
    </div>
  );
};

export default BorrarUsuario;

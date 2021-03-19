import React from "react";

const Logout = () => {
  const handleSubmit = () => {
    localStorage.removeItem("TOKEN");
    alert("Vous avez bien été déconnecter");
  };

  return (
    <form>
      <button type="button" onClick={handleSubmit}>
        Déconnexion
      </button>
    </form>
  );
};

export default Logout;
import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const saveData = async (e) => {

    e.preventDefault();

    try {

      const res = await fetch(
        "https://form-backend-bnzq.onrender.com/api/save",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name,
            email,
          }),
        }
      );

      const data = await res.text();

      alert(data);

      setName("");
      setEmail("");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>

      <form onSubmit={saveData}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default App;
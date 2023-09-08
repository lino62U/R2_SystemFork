import React, { useState } from "react";

export default function New() {
  const [user, setUser] = useState({ username: "", password: "", roles: [] });

  const roles = ["admin", "tesoreria", "logistica"]; // Lista de roles disponibles

  const handleChange = (e) => {
    if (e.target.name === "roles") {
      // Manejar la selección de roles
      const selectedRoles = Array.from(e.target.options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setUser({ ...user, [e.target.name]: selectedRoles });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
      <form>
        <input
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={user.username}
        />
        <input
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={user.password}
        />
        <select
          name="roles"
          multiple
          onChange={handleChange}
          value={user.roles}
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

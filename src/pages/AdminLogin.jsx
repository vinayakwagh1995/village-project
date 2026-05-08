import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate();

  /* Toggle Login/Register */

  const [isRegister, setIsRegister] =
    useState(false);

  /* Login State */

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  /* Register State */

  const [name, setName] =
    useState("");

  const [registerEmail, setRegisterEmail] =
    useState("");

  const [registerPassword, setRegisterPassword] =
    useState("");

  /* Login */

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      email === "admin@gmail.com" &&
      password === "12345"
    ) {

      navigate("/admin-dashboard");

    } else {

      setError(
        "Wrong Email or Password"
      );

    }

  };

  /* Register */

  const handleRegister = (e) => {

    e.preventDefault();

    alert(
      "Registration Successful"
    );

    setIsRegister(false);

  };

  return (

    <div className="admin-login-page">

      <div className="login-card">

        {/* Top */}

        <div className="d-flex justify-content-between align-items-center mb-4">

          <Link
            to="/"
            className="btn btn-outline-light rounded-pill px-3"
          >

            <i className="fas fa-home me-2"></i>

            Home

          </Link>

          {!isRegister ? (

            <button
              className="btn btn-primary rounded-pill px-3"
              onClick={() =>
                setIsRegister(true)
              }
            >

              Register

            </button>

          ) : (

            <button
              className="btn btn-success rounded-pill px-3"
              onClick={() =>
                setIsRegister(false)
              }
            >

              Login

            </button>

          )}

        </div>

        {/* Icon */}

        <div className="text-center mb-4">

          <i className="fas fa-shield-alt login-icon"></i>

          <h2 className="mt-3">

            {isRegister
              ? "Admin Register"
              : "Admin Login"}

          </h2>

        </div>

        {/* Error */}

        {error && !isRegister && (

          <div className="alert alert-danger">

            {error}

          </div>

        )}

        {/* LOGIN FORM */}

        {!isRegister ? (

          <form onSubmit={handleLogin}>

            {/* Email */}

            <div className="mb-3">

              <label className="form-label">
                ईमेल पत्ता
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>

            {/* Password */}

            <div className="mb-4">

              <label className="form-label">
                पासवर्ड
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

            </div>

            {/* Login Button */}

            <button
              type="submit"
              className="btn btn-primary w-100 py-2 rounded-pill"
            >

              <i className="fas fa-sign-in-alt me-2"></i>

              लॉगिन करा

            </button>

          </form>

        ) : (

          /* REGISTER FORM */

          <form onSubmit={handleRegister}>

            {/* Name */}

            <div className="mb-3">

              <label className="form-label">
                Full Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

            </div>

            {/* Email */}

            <div className="mb-3">

              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={registerEmail}
                onChange={(e) =>
                  setRegisterEmail(
                    e.target.value
                  )
                }
              />

            </div>

            {/* Password */}

            <div className="mb-4">

              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={registerPassword}
                onChange={(e) =>
                  setRegisterPassword(
                    e.target.value
                  )
                }
              />

            </div>

            {/* Register Button */}

            <button
              type="submit"
              className="btn btn-success w-100 py-2 rounded-pill"
            >

              <i className="fas fa-user-plus me-2"></i>

              Register

            </button>

          </form>

        )}

      </div>

    </div>

  );
}

export default AdminLogin;
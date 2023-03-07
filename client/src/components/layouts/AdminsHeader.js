import React, { useContext } from 'react'
import { useNavigate,useLocation} from "react-router-dom"
import AuthContext from '../../context/auth/AuthContext';
import GlobalContext from '../../context/global/GlobalContext';
import InstituteLogo from '../../images/InstituteLogo.jpg';
const DoctorsHeader = () => {
  const authContext = useContext(AuthContext);
  const globalContext = useContext(GlobalContext);
  const {isMobile} = globalContext;
  const { logout } = authContext;
  const handleLogout = () => {
    logout();
  };

  const navigate = useNavigate();
  const location=useLocation();
  return (
    <div>
      <nav className={`navbar ${!isMobile?'fixed-top':''} navbar-expand-lg bg-light`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={InstituteLogo} width="30" height="30" class="d-inline-block align-text-top mx-2" />
            PHC
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
              <button
                  className={`nav-link ${location.pathname==="/admin"?"fw-bolder text-primary active":""}`}
                  aria-current='page'
                  onClick={() => navigate("/admin")}
                  style={{ borderWidth: "0px", backgroundColor: "transparent" }}
                >
                  Dashboard
                </button>
              </li>

              <li className="nav-item">
              <button
                  className={`nav-link ${location.pathname==="/admin/addActor"?"fw-bolder text-primary active":""}`}
                  aria-current='page'
                  onClick={() => navigate("/admin/addActor")}
                  style={{ borderWidth: "0px", backgroundColor: "transparent" }}
                >
                  Add actor
                </button>
              </li>
              <li className="nav-item">
              <button
                  className={`nav-link ${location.pathname==="/admin/profile"?"fw-bolder text-primary active":""}`}
                  aria-current='page'
                  onClick={() => navigate("/admin/profile")}
                  style={{ borderWidth: "0px", backgroundColor: "transparent" }}
                >
                  Profile
                </button>
              </li>
              <li className="nav-item">
              <button
                  className={`nav-link ${location.pathname==="/admin/inventory"?"fw-bolder text-primary active":""}`}
                  aria-current='page'
                  onClick={() => navigate("/admin/inventory")}
                  style={{ borderWidth: "0px", backgroundColor: "transparent" }}
                >
                  Inventory
                </button>
              </li>
              <li className="nav-item">
              <button
                  className={`nav-link ${location.pathname==="/admin/stock"?"fw-bolder text-primary active":""}`}
                  aria-current='page'
                  onClick={() => navigate("/admin/stock")}
                  style={{ borderWidth: "0px", backgroundColor: "transparent" }}
                >
                  Stock
                </button>
              </li>
            </ul>
            <ul className="navbar-nav mx-2 ms-auto">
              <li className="nav-item">
              <button
                  type='button'
                  class='btn btn-primary'
                  onClick={handleLogout}
                >
                  Sign Out
                </button>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default DoctorsHeader

import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const HeaderBox = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleLogout = () => {
    auth.signOut();
    console.log("logout");
    navigate("/login");
  };
  return(
    <div>
      <h1>header</h1>
    {user
      ?<button onClick={handleLogout}>Logout</button>
      :<button onClick={handleLogout}>Login</button>
    }
    </div>
  );
};

export default HeaderBox;

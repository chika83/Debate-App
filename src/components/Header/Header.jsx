import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const HeaderBox = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  return(
    <div>
      <h1>header</h1>
      <button >Mypage</button>
      {user
        ?<button onClick={handleLogout}>Logout</button>
        :<button onClick={handleLogout}>Login</button>
      }
    </div>
  );
};

export default HeaderBox;

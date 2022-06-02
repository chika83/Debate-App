import { auth } from '../../firebase';
import { useNavigate, Navigate, } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
// import  {Link}  from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleLogout = () => {
    auth.signOut();
    navigate.push('/login');
  };

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <h1>ホームページ</h1>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    );
  }
};

export default Home;

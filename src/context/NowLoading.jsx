import Loading from '../components/css/Loading.css';

const NowLoading = () => {
  const color = {
    background:"red",
    innerWidth:100,
    innerHeight:100,
  }
  return (
      <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
          <p>Now Loading...</p>
      </div>
  );
}

export default NowLoading;

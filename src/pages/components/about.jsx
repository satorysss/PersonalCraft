import Carousel from './Carousell';

function Header() {
  return (
<div className="container d-flex flex-column align-items-center">
    <div className="col-12 col-md-6 text-center mt-5">
        <div className="blob p-4">
            <h1>PersonalCraft</h1>
            <h3>Создай своего уникального цифрового аватара</h3>
        </div>
    </div>
    
    <div className="col-12 col-md-10 text-center mt-5">
        <div className="blobtwo p-5">
            <h2 className="fs-1">Unleash Your Imagination with AI-Powered Art!</h2>
            <h3 className="mt-4">Dive into a world where your wildest dreams come to life, one click at a time, and let your creativity run riot!</h3>
            <div className="mt-4">
                <button className="getbutton2 me-3">Попробуй бесплатно</button>
                <button className="getbutton3"><span>Gallery</span> </button>
            </div>
        </div>
    </div>
    <Carousel/>
    <button className="getbutton3 mt-5">Gallery</button>
</div>
  );
}

export default Header;
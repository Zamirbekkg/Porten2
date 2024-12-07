import Hero from '../ComponentsHome/hero/Hero';
import Sezon from '../ComponentsHome/sezon/Sezon';
import Collect from '../ComponentsHome/collecsia/Collect';
import New from '../ComponentsHome/new/New';
import Brand from '../ComponentsHome/brand/Brand';



const Home = () => {
    return (
        <div  className='container'>
        <Hero />
        <Sezon />
        <Collect />
        <New />
        <Brand />
        </div>
    );
}

export default Home;

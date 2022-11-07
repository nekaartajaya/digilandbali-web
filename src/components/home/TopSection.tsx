import CustomButton from '@components/global/Button';
import {useRouter} from 'next/router';

const HomeTopSection = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center min-h-[772px] px-4">
      <div className="w-1/2 px-24">
        <h1 className="text-xl text-blue tracking-[8px] mb-4">BALI NFT LAND</h1>
        <div className="text-7xl font-bold tracking-wider leading-tight text-blue mb-8">
          <h1>NFT,</h1>
          <h1>Blockchain,</h1>
          <h1>Property,</h1>
        </div>
        <div>
          <CustomButton
            text="About Bali NFT Land"
            classes="text-base"
            onClick={() => router.push('/profile')}
          />
        </div>
      </div>

      <div className="w-1/2">
        <img src="images/stages/stage-4.png" alt="Home Top Section" />
      </div>
    </div>
  );
};

export default HomeTopSection;

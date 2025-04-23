import Card from './Card';
import Loader from './Loader';
import Switch from './Switch';
import Button from './Button';
import SpaceButton from './SpaceButton';
import PyramidLoader from './PyramidLoader';
import Input from './Input';
import ParticlesBackground from '@/components/ParticlesBackground';



export default function PhaseOne() {
    return (
        <>
            <div className="flex flex-col items-center gap-10 animate-fadeIn z-10 relative">
                <h2 className="text-5xl font-extrabold text-pink-500">Neon Mode: Activated</h2>

                <div className="flex flex-wrap gap-10 justify-center">
                    <Card />
                    <Loader />
                    <Switch />
                    <Button />
                    <SpaceButton />
                    <PyramidLoader />
                    <Input />
                </div>
            </div>
        </>
    );
}

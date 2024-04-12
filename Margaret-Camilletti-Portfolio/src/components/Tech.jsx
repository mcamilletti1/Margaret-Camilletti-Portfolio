import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';


const Tech = () => {
    return (
        <div className="grid-container">
            {technologies.map((technology) => (
                <div className="ball-container" key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
        </div>
    )
}

export default SectionWrapper(Tech, "");
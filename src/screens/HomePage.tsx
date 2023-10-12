import { Designed } from '@/components/Designed';
import { Hero } from '@/components/Hero';
import { OptimizedSolution } from '@/components/OptimizedSolution';
import { OurExpertisesFeature } from '@/components/OurExpertisesFeature';
import { ScaleFeature } from '@/components/ScaleFeature';
import { Team } from '@/components/Team';
import { WelcomeToOurStudioFeature } from '@/components/WelcomeToOurStudioFeature';
import { WhoAreYouFeature } from '@/components/WhoAreYouFeature';
import { Footer } from '@/footer/Footer';
import { Navbar } from '@/navigation/Navbar';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const HomePage = () => (
  <div className="body-font text-bg-gray-100 bg-gray-900 font-grotensk antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />

    <Navbar></Navbar>
    <Hero />

    <OptimizedSolution />
    <Designed />
    <ScaleFeature />

    <Team />
    <OurExpertisesFeature />

    <WelcomeToOurStudioFeature />
    <WhoAreYouFeature />
    <Footer reverse />
  </div>
);

export { HomePage };

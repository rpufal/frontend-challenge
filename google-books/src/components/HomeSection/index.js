import React from 'react';
import DiscoverCarousel from '../DiscoverCarousel/index';
import CurrentlySection from '../CurrentlySection';
import ReviewSection from '../ReviewSection/index';
import HomeSectionDisplay from './styles/HomeSectionDisplay';

export default function Home() {
  const user = 'Rafael Pufal';
  return (
    <HomeSectionDisplay>
      <div className="welcome-message">
        <p>
          Hi,
          <p className="username">{`. ${user}  .`}</p>
          👋
        </p>
      </div>
      <DiscoverCarousel />
      <CurrentlySection />
      <ReviewSection />
    </HomeSectionDisplay>
  );
}

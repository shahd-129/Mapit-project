import React from 'react';
import { SolutionImage, SolutionImage2 } from '../../assets';
import SolutionCard from './SolutionCard';
import Collaboration from './Collaboration';


export default function Solutions() {

  return (<>
      <Collaboration/>
    <SolutionCard SolutionImage={SolutionImage} SolutionImage2={SolutionImage2} />
  </>
  );
}

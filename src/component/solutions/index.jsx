import React from 'react';
import { SolutionImage, SolutionImage2 } from '../../assets';
import SolutionCard from './solutionCard';
import Collaboration from './collaboration';


export default function Solutions() {

  return (<>
      <Collaboration/>
    <SolutionCard SolutionImage={SolutionImage} SolutionImage2={SolutionImage2} />
  </>
  );
}

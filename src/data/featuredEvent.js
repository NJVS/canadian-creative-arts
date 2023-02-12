import { ReactComponent as PlaneIcon } from '../assets/icons/plane-arrival-solid.svg';
import { ReactComponent as GlobeIcon } from '../assets/icons/earth-americas-solid.svg';
import { ReactComponent as InfoIcon } from '../assets/icons/circle-info-solid.svg';
import { ReactComponent as RocketIcon } from '../assets/icons/rocket-solid.svg';
import { ReactComponent as QuestionIcon } from '../assets/icons/question-solid.svg';
import { ReactComponent as DiscoverIcon } from '../assets/icons/magnifying-glass-solid.svg';

export const details = {
  address: {
    country: 'Qatar',
    district: 'Hilton',
    street: '483 Lion Street 1930'
  },
  date: 'March 11th & 12th',
  time: '4:00 pm to 7:30 pm'
}

export const overview = [
  {
    id: 1,
    icon: <PlaneIcon />,
    title: `A world of education is coming to the Qatar`,
    desc: `This global event series is brought to you by London-based BMI/Times Higher Education, 
    owners of the prestigius World University Rankings.`,
  },
  {
    id: 2,
    icon: <GlobeIcon />,
    title: `Meet over 105 different institurions`,
    desc: `Universities, Business and High Schools from the UAE and 19 other countries. Senior
    admissions staf and ready to help.`
  },
  {
    id: 3,
    icon: <InfoIcon />,
    title: `Live interactive seminars`,
    desc: `Attend live information sessions to learn about visas, fees, the application process,
    accommodation and overseas work opportunities.`
  },
  {
    id: 4,
    icon: <RocketIcon />,
    title: `Build the employable YOU!`,
    desc: `Make the right course choice. Learn how your studies can turbocharge your career and
    make you employable anywhare in the world.`
  },
  {
    id: 5,
    icon: <QuestionIcon />,
    title: `All your questions answered`,
    desc: `The right course and country is a big decision. Receive 1-1 counselling from international 
    experts. Make the right choice`
  }, 
  {
    id: 6,
    icon: <DiscoverIcon />,
    title: `Discover 1000's of courses`,
    desc: `Undergraduate, Postgraduate, MBA, High School. The perfect course is waiting for you.`
  }
]
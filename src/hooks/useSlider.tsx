import React, { createContext, useContext, useState } from 'react';
import { useError } from './useError';

interface sliderTypes {
  openSlider: (body: JSX.Element, header: string) => void;
  closeSlider: () => void;
  informations: {
    body: JSX.Element;
    header: string;
  };
  isOpen: boolean;
}
const initialObject: sliderTypes = {
  openSlider: (body: JSX.Element, header: string) => console.log('Opened...'),
  closeSlider: () => console.log('Closed...'),
  informations: {
    body: <p>Nothing</p>,
    header: ''
  },
  isOpen: false
};

const SliderContext = createContext<sliderTypes>(initialObject);
const SliderProvider: React.FC = ({ children }) => {
  const [isOpen, setOpenState] = useState(false);
  const [body, setBody] = useState(<p>Empty</p>);
  const [header, setHeader] = useState('');

  const closeSlider = () => setOpenState(false);
  const openSlider = (body: JSX.Element, header: string) => {
    setBody(body);
    setHeader(header);
    setOpenState(true);
  };

  const informations = {
    body,
    header
  };

  const object: sliderTypes = {
    closeSlider,
    openSlider,
    informations,
    isOpen
  };
  return <SliderContext.Provider value={object}>{children}</SliderContext.Provider>;
};

export const useSlider = (): sliderTypes => {
  const { dispatchError } = useError();

  const slider = useContext(SliderContext);
  if (!slider)
    dispatchError(new Error('Something went wrong with slider! Please contact with our support!'), new Error('No context in useSlider hook!'));
  return slider;
};

export default SliderProvider;

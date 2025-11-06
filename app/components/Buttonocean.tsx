import React from 'react';

interface ButtonoceanProps {
  Text: string;
  src: string;
  color: string;
  hovercolor: string;
  bgcolor: string;
  bgcolorhover: string;
}

const Buttonocean: React.FC<ButtonoceanProps> = ({
  Text,
  src,
  color ,
  hovercolor ,
  bgcolor ,
  bgcolorhover ,
}) => {
  return (
    <a href={src} target="_blank" rel="buttons">
      <button  className={`md:text-2xl text-lg w-full md:py-3 px-5 cursor-pointer font-normal transition-colors duration-300 border-2 border-oceanColor rounded-lg shadow-lg ${color} ${hovercolor} ${bgcolor} ${bgcolorhover}`}>
        {Text}
      </button>
    </a>
  );
};

export default Buttonocean;
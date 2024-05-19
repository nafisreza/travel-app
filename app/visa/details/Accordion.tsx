import React, { ReactNode, useState } from 'react';
import { IoIosInformationCircle } from 'react-icons/io';

interface AccordionProps {
  title: string;
  body: ReactNode;
  defaultOpen?: boolean;
  classes?: string;
  onClick?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, body, defaultOpen = false, classes, onClick }) => {
  return (
    <details className="rounded-lg overflow-hidden bg-white border border-green-200" open={defaultOpen} onClick={onClick}>
      <summary
        className={`flex items-center gap-3 w-full py-3 font-medium text-left text-green-800 bg-green-100 p-4 cursor-pointer ${classes}`}
      >
        <IoIosInformationCircle size="24" />
        <span>{title}</span>
      </summary>
      <div className="accordion border-t bg-green-100">
        <div className="py-3 font-light bg-white p-4">{body}</div>
      </div>
    </details>
  );
};

export default Accordion;

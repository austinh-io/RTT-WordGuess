import React from 'react';

type FooterLinkProps = {
  link: string;
  title: string;
  children?:
    | React.ReactElement<unknown, 'box-icon'>
    | React.ReactElement<unknown, 'box-icon'>[];
  newTab?: boolean;
};

const NormalNavLink: React.FC<FooterLinkProps> = ({
  link,
  title,
  children,
  newTab = false,
}) => {
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type !== 'box-icon') {
      throw new Error('Children of FooterLink must be of type box-icon');
    }
  });

  return (
    <a
      href={link}
      target={newTab ? '' : '_blank'}
      className='relative overflow-hidden flex items-center justify-center group pb-0.5'>
      <span className='mr-1 flex items-center justify-center'>{children}</span>
      <span className='font-medium '>{title}</span>
      <span className='absolute left-0.5 right-0 bottom-0 h-0.5 bg-slate-200 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out'></span>
    </a>
  );
};

export default NormalNavLink;

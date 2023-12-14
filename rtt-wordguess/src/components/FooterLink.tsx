type FooterLinkProps = {
  link: string;
  title: string;
  children?: React.ReactNode;
  newTab?: boolean;
};

const FooterLink: React.FC<FooterLinkProps> = ({
  link,
  title,
  children,
  newTab = false,
}) => {
  return (
    <a
      href={link}
      target={newTab ? '' : '_blank'}
      className='flex items-center justify-center'>
      <span className='mr-1 flex items-center justify-center'>{children}</span>
      <span className='font-medium '>{title}</span>
    </a>
  );
};

export default FooterLink;

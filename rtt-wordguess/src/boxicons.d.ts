type BoxIconProps = React.HTMLAttributes<HTMLElement> & {
  type?: 'regular' | 'solid' | 'logo';
  name?: string;
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | string;
  rotate?: '90' | '180' | '270';
  flip?: 'horizontal' | 'vertical';
  border?: 'square' | 'circle';
  animation?: string;
  pull?: 'left' | 'right';
};

declare namespace JSX {
  interface IntrinsicElements {
    'box-icon': BoxIconProps;
  }
}

import { SVGProps } from 'react';

const SvgSuccessStatus = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path
        d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm6.2,10.512l-4.426,4.345c-.783.768-1.791,1.151-2.8,1.151-.998,0-1.996-.376-2.776-1.129l-1.899-1.867c-.394-.387-.399-1.02-.012-1.414.386-.395,1.021-.4,1.414-.012l1.893,1.861c.776.75,2.001.746,2.781-.018l4.425-4.344c.393-.388,1.024-.381,1.414.013.387.394.381,1.027-.014,1.414Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgSuccessStatus;
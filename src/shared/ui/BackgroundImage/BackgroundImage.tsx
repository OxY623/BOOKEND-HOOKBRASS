import {memo} from 'react';

export type Props = {
         src: string;
         isVisible: boolean;
}


export const BackgroundImage = memo(({ src, isVisible }: Props) => (
         <div
           className={`absolute inset-0 bg-contain bg-no-repeat bg-center 
            transition-all duration-1500 ease-in-out ${
             isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-100'
           }`}
           style={{ backgroundImage: `url(${src})` }}
         >
           <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
         </div>
       ));
       

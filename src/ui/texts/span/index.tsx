import generalStyles from '../generalStyle.module.css';
import { ISpan, textColor, textSize, textFamily} from "@/ui";

import cn from "classnames";

export const Span = ({size, color, fontFamily, children, classname}: ISpan):JSX.Element=>{

    return(
        <span 
            className={cn(
                generalStyles.text,
                classname,
                {
                    [generalStyles.xl]:size===textSize.xl,
                    [generalStyles.l]:size===textSize.l,
                    [generalStyles.m]:size===textSize.m,
                    [generalStyles.s]:size===textSize.s,
                    
                    [generalStyles.black]: color===textColor.black,
                    [generalStyles.blue]: color===textColor.blue,
                    [generalStyles.green]: color===textColor.green,
                    [generalStyles.orange]: color===textColor.orange,
                    [generalStyles.white]: color===textColor.white,
                    [generalStyles.blackGray]: color===textColor.blackGray,

                    [generalStyles.montserrat]:fontFamily===textFamily.montserrat,
                    [generalStyles.openSanse]:fontFamily===textFamily.openSanse
                }
                )}
        >  
            {children}
        </span>
    )
}
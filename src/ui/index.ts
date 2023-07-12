// export ui
export { Input } from './inputs/auth/Input';
export {SubmitButton} from './buttons/auth/SubmitButton';
export {SimpleHeadline} from "./headlines/simple/index";
export {UnderlineHeadLine} from "./headlines/underline/index";
export {Paragraph} from "./texts/paragraph/index";
export {Span} from "./texts/span/index";
export {Button} from "./buttons/button/index";
export {Item} from "./navbarItems/item/index";



// export headline types
export {headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes} from "./headlines/customTypes";
export type {IHeadline} from "./headlines/headlineInterfaces";


// export text types
export {textColor, textSize, textFamily} from "./texts/types";
export type {IParagraph} from "./texts/paragraph/paragraphInterface";
export type {ISpan} from "./texts/span/spanInterface";


//export button types
export {btnBorderSizeType, btnViewType, btnColorType, btnArrowType} from './buttons/types';
export type {IButton} from './buttons/btnInterface';

//export navbar types
export {itemTextColorTypes, itemTextSizeTypes, itemTypes} from "./navbarItems/types";
export type {IItem} from "./navbarItems/itemInterface";
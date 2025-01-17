import {
  Definition,
  CustomLink,
  CustomTitle,
  CustomText,
  Padding,
  CustomUnorderedList,
  CustomListItem,
  CustomImage,
  CustomPre,
  CustomCode,
  CustomDiv,
  TextColorMode,
} from './MDXComponents';
import { Checkbox, VStack } from '@chakra-ui/react';

const titles: any = {};
new Array(6).fill('').forEach((x, i) => {
  titles['h' + (i + 1).toString()] = CustomTitle;
});

const MDXComponents = {
  a: CustomLink,
  p: CustomText,
  ul: CustomUnorderedList,
  li: CustomListItem,
  pre: CustomPre,
  code: CustomCode,
  div: CustomDiv,
  VStack,
  Padding,
  Definition,
  Checkbox,
  TextColorMode,
  Image: CustomImage,
  ...titles,
};

export default MDXComponents;

import { RangeSliderProps, RangeSlider as _RangeSlider } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraRangeSliderComponent, 'container');

export const RangeSlider = (props: RangeSliderProps) => {
  return <Wrapped {...props} />;
};

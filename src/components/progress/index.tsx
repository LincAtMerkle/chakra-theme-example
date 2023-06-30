import { ProgressProps, Progress as _Progress } from "@chakra-ui/react";
import { wrapTokens } from "../tokensCtx";

const Wrapped = wrapTokens(ChakraProgressComponent, 'container');

export const Progress = (props: ProgressProps) => {
  return <Wrapped {...props} />;
};

import { Box, Container, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { steps } from './data'
import { Step } from './Step'
import { useStep } from './useStep'

export const App = () => {
  const [currentStep, { setStep }] = useStep({ maxStep: steps.length })
  return (
    <Box bg="bg-surface">
      <Container py={{ base: '8', md: '16' }}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing="4">
          {steps.map((step, id) => (
            <Step
              key={id}
              cursor="pointer"
              onClick={() => setStep(id)}
              title={step.title}
              description={step.description}
              isActive={currentStep === id}
              isCompleted={currentStep > id}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
import {z} from 'zod'

export const randomNumberSchema = z.object({
  bet1: z.number().min(1).max(50),
  bet2: z.number().min(1).max(50), 
  bet3: z.number().min(1).max(50),
  bet4: z.number().min(1).max(50),
  bet5: z.number().min(1).max(50),
})

export default randomNumberSchema
